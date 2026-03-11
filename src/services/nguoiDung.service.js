import { prisma } from "../common/prisma/contect.prisma.js";
import bcrypt from "bcrypt";
import { buildQueryPrisma } from "../utils/buildQueryPrisma.js";

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
    return prisma.nguoiDung.findMany({
      where: {
        //đây là điều kiện tìm kiếm "OR" với hai trường email và ho_ten, sử dụng "contains" để tìm kiếm chuỗi con và "mode: insensitive" để không phân biệt chữ hoa thường. or tức là 1
        OR: [
          { email: { contains: keyword } },
          { ho_ten: { contains: keyword } },
        ],
      },
    });
  },

  capNhatNguoiDung: async (tai_khoan, data) => {
    const user = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: Number(tai_khoan) },
    });

    if (!user) {
      throw new Error("Tài khoản không tồn tại");
    }

    // Không cho phép update những field này
    const forbiddenFields = ["tai_khoan", "loai_nguoi_dung"];
    forbiddenFields.forEach((field) => delete data[field]); //

    const payload = { ...data }; //ko có tai_khoan và loai_nguoi_dung vì đã bị xóa ở trên

    // Nếu có password mới
    if (data.mat_khau) {
      if (!data.mat_khau_cu) {
        throw new Error("Vui lòng cung cấp mật khẩu cũ để đổi mật khẩu mới");
      }

      const isMatch = bcrypt.compareSync(data.mat_khau_cu, user.mat_khau);
      if (!isMatch) {
        throw new Error("Mật khẩu cũ không đúng");
      }

      payload.mat_khau = bcrypt.hashSync(data.mat_khau, 10);
      delete payload.mat_khau_cu;
    }

    return prisma.nguoiDung.update({
      where: { tai_khoan: Number(tai_khoan) },
      data: payload,
    });
  },

  xoaNguoiDung: async (tai_khoan) => {
    return prisma.nguoiDung.delete({
      where: { tai_khoan: Number(tai_khoan) },
    });
  },
};
