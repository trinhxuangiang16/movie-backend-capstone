import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "./common/prisma/contect.prisma.js";
import { ADMIN_PASSWORD } from "./common/constant/app.contant.js";

async function main() {
  const seedUsers = [
    {
      email: "ad@gmail.com",
      ho_ten: "Admin",
      so_dt: "097533257",
      mat_khau: ADMIN_PASSWORD || "123456",
      loai_nguoi_dung: "ADMIN",
    },
    {
      email: "test1@gmail.com",
      ho_ten: "Test 1",
      so_dt: "0900000001",
      mat_khau: "123456",
      loai_nguoi_dung: "USER",
    },
    {
      email: "test2@gmail.com",
      ho_ten: "Test 2",
      so_dt: "0900000002",
      mat_khau: "123456",
      loai_nguoi_dung: "USER",
    },
  ];

  console.log("Seeding accounts...");

  for (const user of seedUsers) {
    await prisma.nguoiDung.upsert({
      where: { email: user.email },
      update: {
        ho_ten: user.ho_ten,
        so_dt: user.so_dt,
        mat_khau: bcrypt.hashSync(user.mat_khau, 10),
        loai_nguoi_dung: user.loai_nguoi_dung,
      },
      create: {
        ho_ten: user.ho_ten,
        email: user.email,
        so_dt: user.so_dt,
        mat_khau: bcrypt.hashSync(user.mat_khau, 10),
        loai_nguoi_dung: user.loai_nguoi_dung,
      },
    });
  }

  console.log("Done");
}

main().finally(() => prisma.$disconnect());
