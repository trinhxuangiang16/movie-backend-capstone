import { prisma } from "../common/prisma/contect.prisma.js";
import bcrypt from "bcrypt";
import { buildQueryPrisma } from "../utils/buildQueryPrisma.js";
import {
  BadRequestException,
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

    // const finalWhere = {
    //   ...where,
    //   isDeleted: false,
    // };

    const data = await prisma.nguoiDung.findMany({
      skip,
      take: pageSize,
      where,
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
        //đây là điều kiện tìm kiếm "OR" với hai trường email và ho_ten, sử dụng "contains" để tìm kiếm chuỗi con và "mode: insensitive" để không phân biệt chữ hoa thường. or tức là 1
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
      const { mat_khau, ...rest } = u; //loại bỏ trường mat_khau khỏi đối tượng người dùng
      return rest; //trả về đối tượng người dùng mới không có trường mat_khau
    });

    return userWithoutPassword;
  },

  capNhatNguoiDung: async (tai_khoan, data) => {
    console.log("🚀 ~ KIỂM TRA ~ tai_khoan:", tai_khoan);

    const user = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: Number(tai_khoan) },
    });

    if (!user) {
      throw new NotFoundException("Tài khoản không tồn tại");
    }

    // nếu update email, check trùng
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

    // Không cho phép update những field này

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
    return prisma.nguoiDung.delete({
      where: { tai_khoan: Number(tai_khoan) },
    });
  },
};
