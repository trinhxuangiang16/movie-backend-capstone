import { prisma } from "../common/prisma/contect.prisma.js";

export const comboService = {
  getDanhSachCombo: async () => {
    return prisma.combo.findMany({
      where: { isDeleted: false },
      select: {
        ma_combo: true,
        ten_combo: true,
        mo_ta: true,
        gia: true,
        hinh_anh: true,
      },
      orderBy: { ma_combo: "asc" },
    });
  },
};
