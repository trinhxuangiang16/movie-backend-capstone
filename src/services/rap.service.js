import { prisma } from "../common/prisma/contect.prisma.js";

export const rapService = {
  getHeThongRap: async () => {
    return prisma.heThongRap.findMany();
  },

  getCumRapTheoHeThong: async (ma_he_thong_rap) => {
    return prisma.heThongRap.findUnique({
      where: { ma_he_thong_rap: Number(ma_he_thong_rap) },
      select: {
        ma_he_thong_rap: true,
        ten_he_thong_rap: true,
        CumRap: {
          select: {
            ma_cum_rap: true,
            ten_cum_rap: true,
            RapPhim: {
              select: {
                ma_rap: true,
                ten_rap: true,
              },
            },
          },
        },
      },
    });
  },

  getLichChieuHeThongRap: async (ma_he_thong_rap) => {
    return prisma.heThongRap.findUnique({
      where: { ma_he_thong_rap: Number(ma_he_thong_rap) },
      select: {
        ma_he_thong_rap: true,
        ten_he_thong_rap: true,
        CumRap: {
          select: {
            ma_cum_rap: true,
            ten_cum_rap: true,
            dia_chi: true,
            RapPhim: {
              select: {
                ma_rap: true,
                ten_rap: true,
                LichChieu: {
                  select: {
                    ma_lich_chieu: true,
                    ngay_gio_chieu: true,
                    gia_ve: true,
                    Phim: {
                      select: {
                        ma_phim: true,
                        ten_phim: true,
                        hinh_anh: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  },

  getLichChieuPhim: async (ma_phim) => {
    return prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
      select: {
        ma_phim: true,
        ten_phim: true,

        LichChieu: {
          select: {
            ma_lich_chieu: true,
            ngay_gio_chieu: true,
            gia_ve: true,

            RapPhim: {
              select: {
                ma_rap: true,
                ten_rap: true,

                CumRap: {
                  select: {
                    ma_cum_rap: true,
                    ten_cum_rap: true,

                    HeThongRap: {
                      select: {
                        ma_he_thong_rap: true,
                        ten_he_thong_rap: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  },

  getLichChieuPhimDuaVaoMaVaThoiGian: async (ma_lich_chieu) => {
    return prisma.lichChieu.findUnique({
      where: { ma_lich_chieu: Number(ma_lich_chieu) },
      select: {
        ma_lich_chieu: true,
        ngay_gio_chieu: true,
        gia_ve: true,
        Phim: {
          select: {
            ma_phim: true,
            ten_phim: true,
            hinh_anh: true,
          },
        },
        RapPhim: {
          select: {
            ma_rap: true,
            ten_rap: true,
            CumRap: {
              select: {
                ma_cum_rap: true,
                ten_cum_rap: true,
                dia_chi: true,
                HeThongRap: {
                  select: {
                    ma_he_thong_rap: true,
                    ten_he_thong_rap: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },

  giuChoTamThoi: async (req) => {
    const { ma_lich_chieu, ma_ghe } = req.validated.body || {};
    const userId = req?.user?.tai_khoan;

    if (!userId) throw new Error("Người dùng chưa đăng nhập");

    const maLichChieu = Number(ma_lich_chieu);
    const maGhe = Number(ma_ghe);

    if (!Number.isInteger(maLichChieu) || !Number.isInteger(maGhe)) {
      throw new Error("Mã lịch chiếu hoặc mã ghế không hợp lệ");
    }

    const now = new Date();
    const expireAt = new Date(now.getTime() + 5 * 60 * 1000);

    return await prisma.$transaction(async (tx) => {
      await tx.giuCho.deleteMany({
        where: {
          ma_lich_chieu: maLichChieu,
          ma_ghe: maGhe,
          expire_at: { lte: now },
        },
      });

      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: maLichChieu },
      });
      if (!lichChieu) throw new Error("Lịch chiếu không tồn tại");

      const gheHopLe = await tx.ghe.findFirst({
        where: {
          ma_ghe: maGhe,
          ma_rap: lichChieu.ma_rap,
        },
      });
      if (!gheHopLe) throw new Error("Ghế không thuộc rạp của lịch chiếu");

      const daDat = await tx.datVe.findFirst({
        where: { ma_lich_chieu: maLichChieu, ma_ghe: maGhe },
      });
      if (daDat) throw new Error("Ghế đã được đặt");

      const dangGiuCho = await tx.giuCho.findFirst({
        where: {
          ma_lich_chieu: maLichChieu,
          ma_ghe: maGhe,
          expire_at: { gt: now },
        },
      });

      if (dangGiuCho && dangGiuCho.tai_khoan !== userId) {
        throw new Error("Ghế đang được giữ");
      }

      if (dangGiuCho && dangGiuCho.tai_khoan === userId) {
        await tx.giuCho.update({
          where: { ma_giu_cho: dangGiuCho.ma_giu_cho },
          data: { expire_at: expireAt },
        });
      } else {
        await tx.giuCho.create({
          data: {
            tai_khoan: userId,
            ma_lich_chieu: maLichChieu,
            ma_ghe: maGhe,
            expire_at: expireAt,
          },
        });
      }

      return {
        message: `Giữ ghế thành công thời gian kéo dài 5 phút tính từ bây giờ`,
        expire_at: expireAt,
      };
    });
  },
};
