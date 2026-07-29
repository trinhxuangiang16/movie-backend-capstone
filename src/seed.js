import "dotenv/config";
import { prisma } from "./common/prisma/contect.prisma.js";
import { generateLichChieu } from "./lichChieu.seed.js";

async function main() {
  console.log("Clearing seed data");

  await prisma.$transaction(async (tx) => {
    await tx.hoaDonCombo.deleteMany();
    await tx.datVe.deleteMany();
    await tx.giuCho.deleteMany();
    await tx.hoaDon.deleteMany();

    console.log("Truncating LichChieu...");
    await tx.lichChieu.deleteMany();

    console.log("Generating data...");
    const lichChieuData = generateLichChieu();

    console.log("Inserting LichChieu...");
    await tx.lichChieu.createMany({
      data: lichChieuData,
    });
  });

  console.log("Done");
}

main().finally(() => prisma.$disconnect());
