import dayjs from "dayjs";

const START_DATES = ["2026-04-30", "2026-05-01", "2026-05-02", "2026-05-03"];

const BASE_TIMES = ["06:00", "09:15", "12:30", "15:45", "19:00", "22:15"];

function randomMinuteOffset() {
  return Math.floor(Math.random() * 11) - 5;
}

function randomPrice() {
  const prices = [75000, 90000, 120000, 150000];
  return prices[Math.floor(Math.random() * prices.length)];
}

export function generateLichChieu() {
  const lichChieu = [];

  let phimIndex = 0;

  const totalPhim = 20;
  const totalRap = 90;

  for (let rap = 1; rap <= totalRap; rap++) {
    for (let date of START_DATES) {
      for (let i = 0; i < BASE_TIMES.length; i++) {
        const baseTime = BASE_TIMES[i];

        let dateTime = dayjs(`${date} ${baseTime}`);

        dateTime = dateTime.add(randomMinuteOffset(), "minute");

        const finalTime = dateTime.second(0).toDate();

        const ma_phim = (phimIndex % totalPhim) + 1;

        lichChieu.push({
          ma_rap: rap,
          ma_phim: ma_phim,
          ngay_gio_chieu: finalTime,
          gia_ve: randomPrice(),
        });

        phimIndex++;
      }
    }
  }

  return lichChieu;
}
