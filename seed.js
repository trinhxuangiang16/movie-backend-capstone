import "dotenv/config";
import { prisma } from "./src/common/prisma/contect.prisma.js";

const DATES = [
  "2026-10-01",
  "2026-10-02",
  "2026-10-03",
  "2026-10-04",
  "2026-10-05",
  "2026-10-06",
];

const SHOWTIMES_PER_DAY = 12;
const MOVIES_PER_ROOM = 4;
const DAY_START_MIN = 7 * 60;
const DAY_END_MIN = 23 * 60 + 55;
const MIN_GAP_MIN = 90;

const PRICE_TIERS = [
  { beforeHour: 12, gia_ve: 75000 },
  { beforeHour: 18, gia_ve: 85000 },
  { beforeHour: 24, gia_ve: 95000 },
];

function priceForMinute(minuteOfDay) {
  const hour = Math.floor(minuteOfDay / 60);
  const tier = PRICE_TIERS.find((t) => hour < t.beforeHour);
  return tier.gia_ve;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(...parts) {
  const str = parts.join("|");
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateSlotMinutes(rng) {
  const span = DAY_END_MIN - DAY_START_MIN;
  const baseSpan = (SHOWTIMES_PER_DAY - 1) * MIN_GAP_MIN;
  const slack = span - baseSpan;

  const gaps = SHOWTIMES_PER_DAY - 1;
  const cuts = Array.from({ length: gaps - 1 }, () => rng() * slack).sort(
    (a, b) => a - b,
  );
  const jitterChunks = [];
  let prev = 0;
  for (const c of cuts) {
    jitterChunks.push(c - prev);
    prev = c;
  }
  jitterChunks.push(slack - prev);

  const minutes = [DAY_START_MIN];
  for (let i = 0; i < gaps; i++) {
    minutes.push(minutes[i] + MIN_GAP_MIN + jitterChunks[i]);
  }
  return minutes.map((m) => Math.round(m));
}

function assignMoviesToSlots(roomMovies, rng) {
  const counts = new Array(roomMovies.length).fill(0);
  const assignment = new Array(SHOWTIMES_PER_DAY);

  const guaranteedSlots = shuffle(
    Array.from({ length: SHOWTIMES_PER_DAY }, (_, i) => i),
    rng,
  );
  let slotPtr = 0;
  for (let m = 0; m < roomMovies.length; m++) {
    for (let k = 0; k < 2; k++) {
      const slot = guaranteedSlots[slotPtr++];
      assignment[slot] = m;
      counts[m]++;
    }
  }

  while (slotPtr < SHOWTIMES_PER_DAY) {
    const slot = guaranteedSlots[slotPtr++];
    const m = Math.floor(rng() * roomMovies.length);
    assignment[slot] = m;
    counts[m]++;
  }

  return assignment.map((m) => roomMovies[m]);
}

async function main() {
  const rooms = await prisma.rapPhim.findMany({
    select: { ma_rap: true },
    orderBy: { ma_rap: "asc" },
  });

  const movies = await prisma.phim.findMany({
    where: { dang_chieu: true, isDeleted: false },
    select: { ma_phim: true },
    orderBy: { ma_phim: "asc" },
  });

  if (rooms.length === 0 || movies.length < MOVIES_PER_ROOM) {
    console.error(
      "Missing rooms or not enough dang_chieu movies in DB, aborting.",
    );
    return;
  }

  console.log(
    `Seeding LichChieu for ${rooms.length} rooms x ${DATES.length} days x ${SHOWTIMES_PER_DAY} showtimes...`,
  );

  const dateRange = {
    gte: new Date(`${DATES[0]}T00:00:00`),
    lt: new Date(`${DATES[DATES.length - 1]}T23:59:59`),
  };

  console.log("Clearing existing bookings/holds for target dates");
  await prisma.datVe.deleteMany({
    where: { LichChieu: { ngay_gio_chieu: dateRange } },
  });
  await prisma.giuCho.deleteMany({
    where: { LichChieu: { ngay_gio_chieu: dateRange } },
  });

  console.log("Clearing existing LichChieu for target dates");
  await prisma.lichChieu.deleteMany({ where: { ngay_gio_chieu: dateRange } });

  const data = [];

  for (const room of rooms) {
    const roomMovieRng = mulberry32(hashSeed("room-movies", room.ma_rap));
    const roomMovies = shuffle(movies, roomMovieRng)
      .slice(0, MOVIES_PER_ROOM)
      .map((m) => m.ma_phim);

    for (const dateStr of DATES) {
      const daySeed = hashSeed("day", room.ma_rap, dateStr);
      const timeRng = mulberry32(daySeed);
      const assignRng = mulberry32(daySeed + 1);

      const slotMinutes = generateSlotMinutes(timeRng);
      const slotMovies = assignMoviesToSlots(roomMovies, assignRng);

      for (let i = 0; i < SHOWTIMES_PER_DAY; i++) {
        const minuteOfDay = slotMinutes[i];
        const hour = Math.floor(minuteOfDay / 60);
        const minute = minuteOfDay % 60;

        const base = new Date(`${dateStr}T00:00:00`);
        base.setHours(hour, minute, 0, 0);

        data.push({
          ma_rap: room.ma_rap,
          ma_phim: slotMovies[i],
          ngay_gio_chieu: base,
          gia_ve: priceForMinute(minuteOfDay),
        });
      }
    }
  }

  console.log(`Inserting ${data.length} showtimes...`);
  const result = await prisma.lichChieu.createMany({ data });
  console.log(`Done. Inserted ${result.count} rows.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());

