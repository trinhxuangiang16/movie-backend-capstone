import { prisma } from "../common/prisma/contect.prisma.js";
import bcrypt from "bcrypt";
import { buildQueryPrisma } from "../utils/buildQueryPrisma.js";
import {
  ConflictException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";

export const nguoiDungService = {
  getLayDanhSachNguoiDung: async () => {
    return prisma.nguoiDung.findMany({
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  getLayDanhSachNguoiDungPhanTrang: async (query) => {
    const { page, pageSize, skip, where } = buildQueryPrisma(query);

    const data = await prisma.nguoiDung.findMany({
      skip,
      take: pageSize,
      where,
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
      orderBy: {
        tai_khoan: "asc",
      },
    });

    const total = await prisma.nguoiDung.count({ where });

    return {
      data,
      total,
      page,
      pageSize,
    };
  },

  timKiemNguoiDung: async (keyword) => {
    const user = await prisma.nguoiDung.findMany({
      where: {
        OR: [
          { email: { contains: keyword } },
          { ho_ten: { contains: keyword } },
        ],
      },
    });

    if (!user || user.length === 0) {
      throw new NotFoundException(
        "Không tìm thấy người dùng nào với từ khóa đã cho",
      );
    }

    const userWithoutPassword = user.map((u) => {
      const { mat_khau, ...rest } = u;
      return rest;
    });

    return userWithoutPassword;
  },

  capNhatNguoiDung: async (tai_khoan, data) => {
    const user = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: Number(tai_khoan) },
    });

    if (!user) {
      throw new NotFoundException("Tài khoản không tồn tại");
    }

    if (data.email) {
      const emailExist = await prisma.nguoiDung.findFirst({
        where: {
          email: data.email,
          tai_khoan: { not: Number(tai_khoan) },
        },
      });

      if (emailExist) {
        throw new ConflictException("Email đã tồn tại");
      }
    }


    const { tai_khoan: _, loai_nguoi_dung: __, ...payload } = data;

    return prisma.nguoiDung.update({
      where: { tai_khoan: Number(tai_khoan) },
      data: payload,
      select: {
        email: true,
        ho_ten: true,
        so_dt: true,
      },
    });
  },
  xoaNguoiDung: async (tai_khoan) => {
    const user = await prisma.nguoiDung.findFirst({
      where: {
        tai_khoan: Number(tai_khoan),
        isDeleted: false,
      },
    });

    if (!user) {
      throw new NotFoundException("Tài khoản không tồn tại hoặc đã bị xóa");
    }

    await prisma.nguoiDung.update({
      where: { tai_khoan: Number(tai_khoan) },
      data: { isDeleted: true },
    });
  },
};
