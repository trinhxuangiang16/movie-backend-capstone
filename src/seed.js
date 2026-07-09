import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "./common/prisma/contect.prisma.js";
import { generateLichChieu } from "./lichChieu.seed.js";
import { ADMIN_PASSWORD } from "./common/constant/app.contant.js";

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
  const adminEmail = "ad@gmail.com";
  const adminName = "Admin";
  const adminPhone = "097533257";
  const adminPassword = ADMIN_PASSWORD || "123456";

  console.log("Clearing seed data");

  const adminUsers = await prisma.nguoiDung.findMany({
    where: {
      loai_nguoi_dung: "ADMIN",
    },
    select: {
      tai_khoan: true,
    },
  });

  const adminIds = adminUsers.map((user) => user.tai_khoan);

  await prisma.$transaction(async (tx) => {
    if (adminIds.length > 0) {
      await tx.datVe.deleteMany({
        where: {
          tai_khoan: {
            in: adminIds,
          },
        },
      });

      await tx.giuCho.deleteMany({
        where: {
          tai_khoan: {
            in: adminIds,
          },
        },
      });

      await tx.nguoiDung.deleteMany({
        where: {
          tai_khoan: {
            in: adminIds,
          },
        },
      });
    }

    console.log("Truncating LichChieu...");
    await tx.$executeRawUnsafe(`TRUNCATE TABLE LichChieu`);

    console.log("Generating data...");
    const lichChieuData = generateLichChieu();

    console.log("Inserting LichChieu...");
    await tx.lichChieu.createMany({
      data: lichChieuData,
    });

    console.log("Creating new admin...");
    await tx.nguoiDung.create({
      data: {
        ho_ten: adminName,
        email: adminEmail,
        so_dt: adminPhone,
        mat_khau: bcrypt.hashSync(adminPassword, 10),
        loai_nguoi_dung: "ADMIN",
      },
    });
  });

  console.log("Done");
}

main().finally(() => prisma.$disconnect());
