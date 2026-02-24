import { prisma } from "../common/prisma/contect.prisma.js";

export const rapService = {
  // 1. Lấy hệ thống rạp
  getHeThongRap: async () => {
    return prisma.heThongRap.findMany();
  },

  // 2. Lấy cụm rạp theo hệ thống
  getCumRapTheoHeThong: async (ma_he_thong_rap) => {
    return prisma.heThongRap.findUnique({
      where: { ma_he_thong_rap: Number(ma_he_thong_rap) },
      include: {
        CumRap: {
          include: {
            RapPhim: true,
          },
        },
      },
    });
  },

  // 3. Lấy lịch chiếu theo hệ thống rạp
  getLichChieuHeThongRap: async (ma_he_thong_rap) => {
    return prisma.heThongRap.findUnique({
      where: { ma_he_thong_rap: Number(ma_he_thong_rap) },
      include: {
        CumRap: {
          include: {
            RapPhim: {
              include: {
                LichChieu: {
                  include: {
                    Phim: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },

  // 4. Lấy lịch chiếu theo phim
  getLichChieuPhim: async (ma_phim) => {
    return prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
      include: {
        LichChieu: {
          include: {
            RapPhim: {
              include: {
                CumRap: {
                  include: {
                    HeThongRap: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },
};
