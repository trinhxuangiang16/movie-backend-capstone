import { prisma } from "../common/prisma/contect.prisma.js";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { Prisma } from "../common/prisma/generated/prisma/index.js";

export const datVeService = {
  layTrangThaiGheTrongRap: async (ma_lich_chieu) => {
    if (!ma_lich_chieu) {
      throw new BadRequestException("Thiếu ma_lich_chieu");
    }

    // Lấy tất cả ghế của rạp trong suất chiếu này
    const seats = await prisma.ghe.findMany({
      where: {
        RapPhim: {
          LichChieu: {
            some: {
              ma_lich_chieu: Number(ma_lich_chieu),
            },
          },
        },
      },
    });

    // Lấy những ghế đã được đặt trong suất chiếu này
    const nhungGheDaDat = await prisma.datVe.findMany({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
      },
    });

    // Lấy những ghế đang được giữ chỗ trong suất chiếu này (expire_at > now)
    const nhungGheDaGiuCho = await prisma.giuCho.findMany({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
        expire_at: {
          gt: new Date(),
        },
      },
    });

    const bookedSet = new Set(nhungGheDaDat.map((s) => s.ma_ghe));
    const holdSet = new Set(nhungGheDaGiuCho.map((s) => s.ma_ghe));

    const result = {
      ma_lich_chieu: Number(ma_lich_chieu),
      danh_sach_ghe: seats.map((seat) => ({
        ma_ghe: seat.ma_ghe,
        ten_ghe: seat.ten_ghe,
        loai_ghe: seat.loai_ghe,
        da_dat: bookedSet.has(seat.ma_ghe),
        dang_giu_cho: holdSet.has(seat.ma_ghe),
      })),
    };

    return result;
  },

  taoLichChieu: async (data) => {
    const { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = data;

    // Validate tồn tại rạp
    const rap = await prisma.rapPhim.findUnique({
      where: { ma_rap: Number(ma_rap) },
    });

    if (!rap) {
      throw new NotFoundException("Rạp không tồn tại");
    }

    // Validate tồn tại phim
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!phim) {
      throw new NotFoundException("Phim không tồn tại");
    }

    const date = new Date(ngay_gio_chieu); // Chuyển đổi sang kiểu Date tức là định dạng ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)

    // Check trùng lịch trong cùng rạp
    const lichTrung = await prisma.lichChieu.findFirst({
      where: {
        ma_rap: Number(ma_rap),
        ngay_gio_chieu: date,
      },
    });

    if (lichTrung) {
      throw new ConflictException("Lịch chiếu đã tồn tại trong rạp này");
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
    if (!ma_lich_chieu) {
      throw new BadRequestException("Thiếu mã lịch chiếu");
    }

    const lichChieu = await prisma.lichChieu.findUnique({
      where: { ma_lich_chieu: Number(ma_lich_chieu) },
      select: {
        ma_lich_chieu: true,
        ngay_gio_chieu: true,
        gia_ve: true,
        RapPhim: {
          select: {
            ma_rap: true,
            ten_rap: true,
            Ghe: {
              select: {
                ma_ghe: true,
                ten_ghe: true,
              },
            },
          },
        },
        DatVe: {
          select: {
            ma_ghe: true,
          },
        },
      },
    });

    if (!lichChieu) {
      throw new NotFoundException("Không tìm thấy lịch chiếu");
    }

    return lichChieu;
  },

  datVe: async (req) => {
    const { ma_lich_chieu, danh_sach_ve } = req.validated.body;

    const tai_khoan = req?.user?.tai_khoan; // Lấy userId từ token đã giải mã
    if (!tai_khoan)
      throw new UnauthorizedException("Người dùng chưa đăng nhập");

    if (
      !ma_lich_chieu ||
      !Array.isArray(danh_sach_ve) ||
      danh_sach_ve.length === 0
    ) {
      throw new BadRequestException("Thiếu thông tin đặt vé");
    }

    return await prisma.$transaction(async (tx) => {
      //Kiểm tra lịch chiếu tồn tại
      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: Number(ma_lich_chieu) },
      });

      if (!lichChieu) {
        throw new NotFoundException("Lịch chiếu không tồn tại");
      }

      //Lấy tất cả ghế cần đặt
      const danhSachMaGhe = danh_sach_ve.map((ve) => Number(ve.ma_ghe));

      //Kiểm tra ghế thuộc đúng rạp
      const gheHopLe = await tx.ghe.findMany({
        where: {
          ma_ghe: { in: danhSachMaGhe }, //in là toán tử để tìm kiếm nhiều giá trị trong một trường, ở đây là ma_ghe
          ma_rap: lichChieu.ma_rap,
        },
      });

      if (gheHopLe.length !== danhSachMaGhe.length) {
        throw new NotFoundException("Có ghế không thuộc rạp của lịch chiếu");
      }

      //Kiểm tra ghế đã bị đặt chưa
      const gheDaDat = await tx.datVe.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
        },
      });

      if (gheDaDat.length > 0) {
        throw new ConflictException("Một hoặc nhiều ghế đã được đặt");
      }

      // Kiểm tra ghế đang được giữ bởi người khác
      const dangGiuCho = await tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          expire_at: {
            gt: new Date(),
          },
        },
      });

      // Lọc ra những ghế đang bị giữ bởi người khác
      const gheDangBiGiuBoiNguoiKhac = dangGiuCho.filter(
        (g) => g.tai_khoan !== tai_khoan,
      );

      // Nếu có ghế nào đang bị giữ bởi người khác trong danh sach ve gửi lên
      if (gheDangBiGiuBoiNguoiKhac.length > 0) {
        throw new ConflictException("Một hoặc nhiều ghế đang được giữ");
      }

      // Lấy giá vé cơ bản từ lịch chiếu
      const giaCoBan = lichChieu.gia_ve;

      // Tính giá vé cho từng ghế và chuẩn bị dữ liệu để insert
      const danhSachVeInsert = gheHopLe.map((ghe) => {
        let heSo = ghe.loai_ghe === "VIP" ? 1.2 : 1;

        return {
          tai_khoan: tai_khoan,
          ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
          ma_ghe: ghe.ma_ghe,
          gia_ve: giaCoBan * heSo,
        };
      });

      try {
        // Insert vé vào bảng datVe
        await tx.datVe.createMany({
          data: danhSachVeInsert,
        });

        // Sau khi tạo vé thành công, xóa các bản ghi giữ chỗ (nếu có) cho những ghế này để tránh tình trạng giữ chỗ nhưng đã được đặt
        await tx.giuCho.deleteMany({
          where: {
            ma_lich_chieu: Number(ma_lich_chieu),
            ma_ghe: { in: danhSachMaGhe },
          },
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new ConflictException(
            "Ghế vừa được người khác đặt, vui lòng chọn lại",
          );
        }
        throw error;
      }

      //Trả về thông tin ghế (có tên ghế)
      const gheDaDatThanhCong = gheHopLe.map((ghe) => {
        const ve = danhSachVeInsert.find((ve) => ve.ma_ghe === ghe.ma_ghe);

        return {
          ma_ghe: ghe.ma_ghe,
          ten_ghe: ghe.ten_ghe,
          loai_ghe: ghe.loai_ghe,
          gia_ve: ve?.gia_ve,
        };
      });

      return {
        so_luong_ve: danhSachMaGhe.length,
        tong_tien: gheDaDatThanhCong.reduce((sum, v) => sum + v.gia_ve, 0),
        danh_sach_ve: gheDaDatThanhCong,
      };
    });
  },

  getLichSuDatVe: async (tai_khoan) => {
    const tickets = await prisma.datVe.findMany({
      where: {
        tai_khoan: tai_khoan,
      },
      include: {
        Ghe: true,
        LichChieu: {
          include: {
            Phim: true,
            RapPhim: true,
          },
        },
      },
      orderBy: {
        ma_lich_chieu: "desc",
      },
    });

    const grouped = tickets.reduce((acc, ticket) => {
      const key = ticket.ma_lich_chieu;

      if (!acc[key]) {
        acc[key] = {
          ma_lich_chieu: ticket.ma_lich_chieu,
          ten_phim: ticket.LichChieu.Phim.ten_phim,
          ten_rap: ticket.LichChieu.RapPhim.ten_rap,
          ngay_gio_chieu: ticket.LichChieu.ngay_gio_chieu,
          ghe: [],
        };
      }

      acc[key].ghe.push({
        ten_ghe: ticket.Ghe.ten_ghe,
        ma_ghe: ticket.Ghe.ma_ghe,
        loai_ghe: ticket.Ghe.loai_ghe,
        gia_ve: ticket.gia_ve, //giá này đã được tính toán khi đặt vé, có thể khác với giá cơ bản của lịch chiếu nếu ghế là VIP
      });

      return acc;
    }, {});

    const result = Object.values(grouped).sort(
      (a, b) => b.ma_lich_chieu - a.ma_lich_chieu,
    );

    return result;
  },
};
