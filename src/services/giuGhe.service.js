import { prisma } from "../common/prisma/contect.prisma.js";
import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { Prisma } from "../common/prisma/generated/prisma/index.js";
import {
  MAX_SEATS_PER_HOLD,
  SEAT_HOLD_EXPIRE_SECONDS,
} from "../common/constant/app.contant.js";

const tinhHetHan = () =>
  new Date(Date.now() + SEAT_HOLD_EXPIRE_SECONDS * 1000);


const conLaiGiay = (expireAt) =>
  Math.max(0, Math.ceil((expireAt.getTime() - Date.now()) / 1000));

const mapGhe = (gc) => ({
  ma_ghe: gc.ma_ghe,
  loai: gc.loai,
  expire_at: gc.expire_at,
  con_lai_giay: conLaiGiay(gc.expire_at),
});

export const giuGheService = {

  giuGhe: async (req) => {
    const { ma_lich_chieu, danh_sach_ghe } = req.validated.body;
    const tai_khoan = req?.user?.tai_khoan;

    if (!tai_khoan) {
      throw new UnauthorizedException("Người dùng chưa đăng nhập");
    }

    const danhSachMaGhe = [...new Set(danh_sach_ghe.map((g) => Number(g)))];

    return await prisma.$transaction(async (tx) => {
      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: Number(ma_lich_chieu) },
      });

      if (!lichChieu) {
        throw new NotFoundException("Lịch chiếu không tồn tại");
      }

      const gheHopLe = await tx.ghe.findMany({
        where: { ma_ghe: { in: danhSachMaGhe }, ma_rap: lichChieu.ma_rap },
      });

      if (gheHopLe.length !== danhSachMaGhe.length) {
        throw new NotFoundException("Có ghế không thuộc rạp của lịch chiếu");
      }

      const gheDaDat = await tx.datVe.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
        },
        select: { ma_ghe: true },
      });

      if (gheDaDat.length > 0) {
        throw new ConflictException("Một hoặc nhiều ghế đã được đặt");
      }


      await tx.giuCho.deleteMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          expire_at: { lte: new Date() },
        },
      });


      await tx.giuCho.deleteMany({
        where: { tai_khoan: tai_khoan, expire_at: { lte: new Date() } },
      });


      const giuOSuatKhac = await tx.giuCho.findFirst({
        where: {
          tai_khoan: tai_khoan,
          ma_lich_chieu: { not: Number(ma_lich_chieu) },
        },
        include: { LichChieu: { include: { Phim: true } } },
      });

      if (giuOSuatKhac) {
        const tenPhim = giuOSuatKhac.LichChieu?.Phim?.ten_phim;
        throw new ConflictException(
          `Bạn đang giữ ghế ở một suất chiếu khác${tenPhim ? ` (${tenPhim})` : ""
          }. Vui lòng hoàn tất hoặc hủy trước khi chọn suất mới.`,
        );
      }


      const dangGiuTrongSuat = await tx.giuCho.findMany({
        where: {
          tai_khoan: tai_khoan,
          ma_lich_chieu: Number(ma_lich_chieu),
        },
        select: { ma_ghe: true },
      });

      const setDangGiuTrongSuat = new Set(
        dangGiuTrongSuat.map((g) => g.ma_ghe),
      );
      const soGheThemMoi = danhSachMaGhe.filter(
        (m) => !setDangGiuTrongSuat.has(m),
      ).length;
      const tongSauKhiThem = setDangGiuTrongSuat.size + soGheThemMoi;

      if (tongSauKhiThem > MAX_SEATS_PER_HOLD) {
        throw new ConflictException(
          `Mỗi lượt đặt chỉ được giữ tối đa ${MAX_SEATS_PER_HOLD} ghế ` +
          `(bạn đang giữ ${setDangGiuTrongSuat.size} ghế).`,
        );
      }

      const dangGiu = await tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
        },
      });

      const cuaNguoiKhac = dangGiu.filter((g) => g.tai_khoan !== tai_khoan);
      if (cuaNguoiKhac.length > 0) {
        const tenGhe = gheHopLe
          .filter((g) => cuaNguoiKhac.some((k) => k.ma_ghe === g.ma_ghe))
          .map((g) => g.ten_ghe)
          .join(", ");
        throw new ConflictException(
          `Ghế ${tenGhe} đã được người khác chọn, vui lòng chọn ghế khác`,
        );
      }

      const daGiuTruocDo = dangGiu.filter((g) => g.tai_khoan === tai_khoan);
      const setDaGiu = new Set(daGiuTruocDo.map((g) => g.ma_ghe));
      const gheCanTao = danhSachMaGhe.filter((m) => !setDaGiu.has(m));

      const hetHanMoi = tinhHetHan();

      if (gheCanTao.length > 0) {
        try {
          await tx.giuCho.createMany({
            data: gheCanTao.map((maGhe) => ({
              tai_khoan: tai_khoan,
              ma_lich_chieu: Number(ma_lich_chieu),
              ma_ghe: maGhe,
              loai: "tam",
              expire_at: hetHanMoi,
            })),
          });
        } catch (error) {

          if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
          ) {
            throw new ConflictException(
              "Ghế vừa được người khác chọn, vui lòng chọn lại",
            );
          }
          throw error;
        }
      }

      const ketQua = await tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          tai_khoan: tai_khoan,
        },
      });

      return {
        ma_lich_chieu: Number(ma_lich_chieu),
        da_giu_truoc_do: daGiuTruocDo.length > 0,
        danh_sach_ghe: ketQua.map(mapGhe),
      };
    });
  },


  giaHan: async (req) => {
    const { ma_lich_chieu, danh_sach_ghe } = req.validated.body;
    const tai_khoan = req?.user?.tai_khoan;

    if (!tai_khoan) {
      throw new UnauthorizedException("Người dùng chưa đăng nhập");
    }

    const danhSachMaGhe = [...new Set(danh_sach_ghe.map((g) => Number(g)))];
    const hetHanMoi = tinhHetHan();

    const ketQua = await prisma.$transaction(async (tx) => {
      const capNhat = await tx.giuCho.updateMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          tai_khoan: tai_khoan,
          loai: "tam",

          expire_at: { gt: new Date() },
        },
        data: { expire_at: hetHanMoi },
      });

      if (capNhat.count === 0) {
        throw new NotFoundException(
          "Không còn ghế nào đang được bạn giữ, vui lòng chọn lại",
        );
      }

      return tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          tai_khoan: tai_khoan,
        },
      });
    });

    return {
      ma_lich_chieu: Number(ma_lich_chieu),
      danh_sach_ghe: ketQua.map(mapGhe),
    };
  },


  nhaGhe: async (req) => {
    const { ma_lich_chieu, danh_sach_ghe } = req.validated.body;
    const tai_khoan = req?.user?.tai_khoan;

    if (!tai_khoan) {
      throw new UnauthorizedException("Người dùng chưa đăng nhập");
    }

    const danhSachMaGhe = [...new Set(danh_sach_ghe.map((g) => Number(g)))];


    const daXoa = await prisma.giuCho.deleteMany({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
        ma_ghe: { in: danhSachMaGhe },
        tai_khoan: tai_khoan,
        loai: "tam",
      },
    });

    return {
      ma_lich_chieu: Number(ma_lich_chieu),
      so_ghe_da_nha: daXoa.count,
    };
  },
};
