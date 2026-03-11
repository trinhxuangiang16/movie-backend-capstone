import "dotenv/config";
import { prisma } from "./common/prisma/contect.prisma.js";

import {
  heThongRap,
  cumRap,
  raps,
  ghes,
  phims,
  banners,
  adminUser,
} from "./dataSeed.js";

async function main() {
  console.log("Clearing DB");

  await prisma.datVe.deleteMany();
  await prisma.banner.deleteMany();
  await prisma.ghe.deleteMany();
  await prisma.rapPhim.deleteMany();
  await prisma.cumRap.deleteMany();
  await prisma.heThongRap.deleteMany();
  await prisma.phim.deleteMany();
  await prisma.nguoiDung.deleteMany();

  console.log("Seeding HeThongRap");
  await prisma.heThongRap.createMany({ data: heThongRap });

  console.log("Seeding CumRap");
  await prisma.cumRap.createMany({ data: cumRap });

  console.log("Seeding RapPhim");
  await prisma.rapPhim.createMany({ data: raps });

  console.log("Seeding Ghe");
  await prisma.ghe.createMany({ data: ghes });

  console.log("Seeding Phim");
  await prisma.phim.createMany({ data: phims });

  console.log("Seeding Banner");
  await prisma.banner.createMany({ data: banners });

  console.log("Seeding Admin");
  await prisma.nguoiDung.create({ data: adminUser });
}

main().finally(() => prisma.$disconnect());
