import "dotenv/config";
import { prisma } from "./common/prisma/contect.prisma.js";
import { generateLichChieu } from "./lichChieu.seed.js";

// import {
//   heThongRap,
//   cumRap,
//   raps,
//   ghes,
//   phims,
//   banners,
//   adminUser,
// } from "./dataSeed.js";

async function main() {
  console.log("Clearing DB");

  // await prisma.datVe.deleteMany();
  // await prisma.banner.deleteMany();
  // await prisma.ghe.deleteMany();
  // await prisma.rapPhim.deleteMany();
  // await prisma.cumRap.deleteMany();
  // await prisma.heThongRap.deleteMany();
  // await prisma.phim.deleteMany();
  // await prisma.nguoiDung.deleteMany();

  console.log("Clearing DB");

  console.log("Disable FK...");
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0`);

  console.log("Truncating LichChieu...");
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE LichChieu`);

  console.log("Enable FK...");
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1`);

  console.log("Generating data...");
  const lichChieuData = generateLichChieu();

  console.log("Inserting...");
  await prisma.lichChieu.createMany({
    data: lichChieuData,
  });

  console.log("Done");
  // await prisma.heThongRap.createMany({ data: heThongRap });

  // console.log("Seeding CumRap");
  // await prisma.cumRap.createMany({ data: cumRap });

  // console.log("Seeding RapPhim");
  // await prisma.rapPhim.createMany({ data: raps });

  // console.log("Seeding Ghe");
  // await prisma.ghe.createMany({ data: ghes });

  // console.log("Seeding Phim");
  // await prisma.phim.createMany({ data: phims });

  // console.log("Seeding Banner");
  // await prisma.banner.createMany({ data: banners });

  // console.log("Seeding Admin");
  // await prisma.nguoiDung.create({ data: adminUser });
}

main().finally(() => prisma.$disconnect());
