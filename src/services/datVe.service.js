import { prisma } from "../common/prisma/contect.prisma.js";

export const datVeService = {
  taoLichChieu: async (data) => {
    const { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = data;

    // Validate tồn tại rạp
    const rap = await prisma.rapPhim.findUnique({
      where: { ma_rap: Number(ma_rap) },
    });

    if (!rap) {
      throw new Error("Rạp không tồn tại");
    }

    // Validate tồn tại phim
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!phim) {
      throw new Error("Phim không tồn tại");
    }

    const date = new Date(ngay_gio_chieu);

    // Check trùng lịch trong cùng rạp
    const lichTrung = await prisma.lichChieu.findFirst({
      where: {
        ma_rap: Number(ma_rap),
        ngay_gio_chieu: date,
      },
    });

    if (lichTrung) {
      throw new Error("Lịch chiếu đã tồn tại trong rạp này");
    }

    return prisma.lichChieu.create({
      data: {
        ma_rap: Number(ma_rap),
        ma_phim: Number(ma_phim),
        ngay_gio_chieu: date,
        gia_ve: Number(gia_ve),
      },
    });
  },
  layDanhSachPhongVe: async (ma_lich_chieu) => {
    const lichChieu = await prisma.lichChieu.findUnique({
      where: { ma_lich_chieu: Number(ma_lich_chieu) },
      include: {
        RapPhim: {
          include: {
            Ghe: true,
          },
        },
        DatVe: true,
      },
    });

    if (!lichChieu) {
      throw new Error("Không tìm thấy lịch chiếu");
    }

    return lichChieu;
  },
  datVe: async (userId, data) => {
    const { ma_lich_chieu, danh_sach_ve } = data;

    if (
      !ma_lich_chieu ||
      !Array.isArray(danh_sach_ve) ||
      danh_sach_ve.length === 0
    ) {
      throw new Error("Thiếu thông tin đặt vé");
    }

    return await prisma.$transaction(async (tx) => {
      //Kiểm tra lịch chiếu tồn tại
      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: Number(ma_lich_chieu) },
      });

      if (!lichChieu) {
        throw new Error("Lịch chiếu không tồn tại");
      }

      //Lấy tất cả ghế cần đặt
      const danhSachMaGhe = danh_sach_ve.map((ve) => Number(ve.ma_ghe));

      //Kiểm tra ghế thuộc đúng rạp
      const gheHopLe = await tx.ghe.findMany({
        where: {
          ma_ghe: { in: danhSachMaGhe },
          ma_rap: lichChieu.ma_rap,
        },
      });

      if (gheHopLe.length !== danhSachMaGhe.length) {
        throw new Error("Có ghế không thuộc rạp của lịch chiếu");
      }

      //Kiểm tra ghế đã bị đặt chưa
      const gheDaDat = await tx.datVe.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
        },
      });

      if (gheDaDat.length > 0) {
        throw new Error("Một hoặc nhiều ghế đã được đặt");
      }

      //  Insert tất cả vé
      await tx.datVe.createMany({
        data: danhSachMaGhe.map((ma_ghe) => ({
          tai_khoan: userId, //userId này là từ token giải mã ra, đảm bảo người dùng chỉ đặt vé cho chính mình
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: ma_ghe,
        })),
      });

      // 6️⃣ Trả về thông tin ghế (có tên ghế)
      const gheDaDatThanhCong = await tx.ghe.findMany({
        where: {
          ma_ghe: { in: danhSachMaGhe },
        },
        select: {
          ma_ghe: true,
          ten_ghe: true,
          loai_ghe: true,
        },
      });

      return {
        so_luong_ve: danhSachMaGhe.length,
        danh_sach_ve: gheDaDatThanhCong,
      };
    });
  },
};
