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

  // 5. Giữ chỗ tạm thời
  giuChoTamThoi: async (req) => {
    const { ma_lich_chieu, ma_ghe } = req.body || {};
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
      // Dọn giữ chỗ hết hạn để tránh xung đột unique
      await tx.giuCho.deleteMany({
        where: {
          ma_lich_chieu: maLichChieu,
          ma_ghe: maGhe,
          expire_at: { lte: now },
        },
      });

      // Kiểm tra lịch chiếu tồn tại
      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: maLichChieu },
      });
      if (!lichChieu) throw new Error("Lịch chiếu không tồn tại");

      // Kiểm tra ghế thuộc rạp của lịch chiếu
      const gheHopLe = await tx.ghe.findFirst({
        where: {
          ma_ghe: maGhe,
          ma_rap: lichChieu.ma_rap,
        },
      });
      if (!gheHopLe) throw new Error("Ghế không thuộc rạp của lịch chiếu");

      // Kiểm tra ghế đã được đặt bởi người khác
      const daDat = await tx.datVe.findFirst({
        where: { ma_lich_chieu: maLichChieu, ma_ghe: maGhe },
      });
      if (daDat) throw new Error("Ghế đã được đặt");

      // Kiểm tra ghế đang được giữ bởi người khác
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

      // Nếu đang giữ bởi chính người dùng, cập nhật lại thời gian hết hạn
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
