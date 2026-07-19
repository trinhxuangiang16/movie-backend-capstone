import { prisma } from "../common/prisma/contect.prisma.js";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { Prisma } from "../common/prisma/generated/prisma/index.js";
import { tokenService } from "./token.service.js";
import { PAYMENT_ORDER_EXPIRE_MINUTES } from "../common/constant/app.contant.js";
import {
  buildNoiDungChuyenKhoan,
  buildVietQrImageUrl,
} from "../common/helpers/vietqr.helper.js";

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

  // Tạo đơn "chờ thanh toán": giữ ghế bằng GiuCho gắn với hóa đơn, chưa tạo DatVe.
  // DatVe thật chỉ được tạo khi webhook ngân hàng xác nhận đã nhận tiền
  // (xem webhookThanhToan.service.js). Điều này thay thế hoàn toàn luồng datVe() cũ
  // (đặt xong là xong ngay) — route /DatVe cũ đã được trỏ sang hàm này.
  taoDonChoThanhToan: async (req) => {
    const { ma_lich_chieu, danh_sach_ve, danh_sach_combo } = req.validated.body;

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

      // Validate combo (nếu có) — chỉ chấp nhận combo còn bán
      const comboDat = danh_sach_combo ?? [];
      let comboHopLe = [];

      if (comboDat.length > 0) {
        const danhSachMaCombo = comboDat.map((c) => Number(c.ma_combo));

        comboHopLe = await tx.combo.findMany({
          where: {
            ma_combo: { in: danhSachMaCombo },
            isDeleted: false,
          },
        });

        if (comboHopLe.length !== new Set(danhSachMaCombo).size) {
          throw new NotFoundException("Có combo không tồn tại hoặc ngừng bán");
        }
      }

      // Lấy giá vé cơ bản từ lịch chiếu
      const giaCoBan = lichChieu.gia_ve;

      // Tính giá vé cho từng ghế
      const danhSachVeTinh = gheHopLe.map((ghe) => {
        let heSo = ghe.loai_ghe === "VIP" ? 1.2 : 1;

        return {
          ma_ghe: ghe.ma_ghe,
          gia_ve: giaCoBan * heSo,
        };
      });

      // Tính tiền combo với don_gia snapshot tại thời điểm mua
      const danhSachComboInsert = comboDat.map((c) => {
        const combo = comboHopLe.find(
          (ch) => ch.ma_combo === Number(c.ma_combo),
        );

        return {
          ma_combo: combo.ma_combo,
          so_luong: Number(c.so_luong),
          don_gia: combo.gia,
        };
      });

      const tongTienVe = danhSachVeTinh.reduce((sum, v) => sum + v.gia_ve, 0);
      const tongTienCombo = danhSachComboInsert.reduce(
        (sum, c) => sum + c.don_gia * c.so_luong,
        0,
      );

      const hetHanLuc = new Date(
        Date.now() + PAYMENT_ORDER_EXPIRE_MINUTES * 60 * 1000,
      );

      // Tạo hóa đơn ở trạng thái chờ thanh toán
      const hoaDon = await tx.hoaDon.create({
        data: {
          tai_khoan: tai_khoan,
          ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
          tong_tien: tongTienVe + tongTienCombo,
          trang_thai_thanh_toan: "cho_thanh_toan",
          het_han_luc: hetHanLuc,
        },
      });

      try {
        // Giữ ghế gắn với hóa đơn này — DatVe thật chỉ tạo khi webhook xác nhận
        await tx.giuCho.createMany({
          data: danhSachVeTinh.map((ve) => ({
            tai_khoan: tai_khoan,
            ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
            ma_ghe: ve.ma_ghe,
            ma_hoa_don: hoaDon.ma_hoa_don,
            expire_at: hetHanLuc,
          })),
        });

        // Combo tạo ngay (snapshot giá) — không giữ chỗ vật lý, chỉ có ý nghĩa
        // khi hóa đơn chuyển da_thanh_toan
        if (danhSachComboInsert.length > 0) {
          await tx.hoaDonCombo.createMany({
            data: danhSachComboInsert.map((c) => ({
              ...c,
              ma_hoa_don: hoaDon.ma_hoa_don,
            })),
          });
        }
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new ConflictException(
            "Ghế vừa được người khác giữ, vui lòng chọn lại",
          );
        }
        throw error;
      }

      const gheDangGiu = gheHopLe.map((ghe) => {
        const ve = danhSachVeTinh.find((v) => v.ma_ghe === ghe.ma_ghe);

        return {
          ma_ghe: ghe.ma_ghe,
          ten_ghe: ghe.ten_ghe,
          loai_ghe: ghe.loai_ghe,
          gia_ve: ve?.gia_ve,
        };
      });

      const noiDungChuyenKhoan = buildNoiDungChuyenKhoan(hoaDon.ma_hoa_don);

      return {
        ma_hoa_don: hoaDon.ma_hoa_don,
        tong_tien: hoaDon.tong_tien,
        noi_dung_chuyen_khoan: noiDungChuyenKhoan,
        het_han_luc: hoaDon.het_han_luc,
        qr_url: buildVietQrImageUrl(hoaDon.tong_tien, noiDungChuyenKhoan),
        danh_sach_ghe: gheDangGiu,
        danh_sach_combo: danhSachComboInsert.map((c) => ({
          ma_combo: c.ma_combo,
          ten_combo: comboHopLe.find((ch) => ch.ma_combo === c.ma_combo)
            ?.ten_combo,
          so_luong: c.so_luong,
          don_gia: c.don_gia,
        })),
      };
    });
  },

  // Cho FE polling trạng thái đơn trong lúc chờ webhook. Nếu đơn đã quá
  // het_han_luc mà vẫn ở cho_thanh_toan, tự chuyển het_han và giải phóng ghế
  // ngay tại đây (độc lập với job dọn dẹp nền chạy mỗi phút).
  layTrangThaiHoaDon: async (ma_hoa_don, tai_khoan) => {
    if (!ma_hoa_don) {
      throw new BadRequestException("Thiếu mã hóa đơn");
    }

    let hoaDon = await prisma.hoaDon.findUnique({
      where: { ma_hoa_don: Number(ma_hoa_don) },
    });

    if (!hoaDon) {
      throw new NotFoundException("Không tìm thấy hóa đơn");
    }

    if (hoaDon.tai_khoan !== tai_khoan) {
      throw new UnauthorizedException("Hóa đơn không thuộc về bạn");
    }

    if (
      hoaDon.trang_thai_thanh_toan === "cho_thanh_toan" &&
      hoaDon.het_han_luc &&
      hoaDon.het_han_luc < new Date()
    ) {
      hoaDon = await prisma.$transaction(async (tx) => {
        const updated = await tx.hoaDon.update({
          where: { ma_hoa_don: hoaDon.ma_hoa_don },
          data: { trang_thai_thanh_toan: "het_han" },
        });

        await tx.giuCho.deleteMany({
          where: { ma_hoa_don: hoaDon.ma_hoa_don },
        });

        return updated;
      });
    }

    return {
      ma_hoa_don: hoaDon.ma_hoa_don,
      trang_thai_thanh_toan: hoaDon.trang_thai_thanh_toan,
      tong_tien: hoaDon.tong_tien,
      het_han_luc: hoaDon.het_han_luc,
    };
  },

  getLichSuDatVe: async (tai_khoan) => {
    // Mỗi phần tử = 1 giao dịch (1 HoaDon); cùng suất chiếu đặt 2 lần → 2 phần tử.
    // Chỉ hiện đơn đã thanh toán thành công — đơn cho_thanh_toan/het_han/huy
    // không phải "vé" thật (chưa từng có DatVe được tạo cho các trạng thái này).
    const hoaDons = await prisma.hoaDon.findMany({
      where: {
        tai_khoan: tai_khoan,
        trang_thai_thanh_toan: "da_thanh_toan",
      },
      include: {
        DatVe: {
          include: {
            Ghe: true,
          },
        },
        HoaDonCombo: {
          include: {
            Combo: true,
          },
        },
        LichChieu: {
          include: {
            Phim: true,
            RapPhim: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return hoaDons.map((hd) => ({
      ma_hoa_don: hd.ma_hoa_don,
      created_at: hd.created_at,
      ma_lich_chieu: hd.ma_lich_chieu,
      ten_phim: hd.LichChieu.Phim?.ten_phim,
      ten_rap: hd.LichChieu.RapPhim?.ten_rap,
      ngay_gio_chieu: hd.LichChieu.ngay_gio_chieu,
      ghe: hd.DatVe.map((ve) => ({
        ma_ghe: ve.ma_ghe,
        ten_ghe: ve.Ghe.ten_ghe,
        loai_ghe: ve.Ghe.loai_ghe,
        gia_ve: ve.gia_ve, // giá snapshot lúc đặt, ghế VIP đã nhân hệ số
      })),
      combo: hd.HoaDonCombo.map((hdc) => ({
        ma_combo: hdc.ma_combo,
        ten_combo: hdc.Combo.ten_combo,
        so_luong: hdc.so_luong,
        don_gia: hdc.don_gia, // giá snapshot lúc mua
      })),
      tong_tien: hd.tong_tien,
      trang_thai_thanh_toan: hd.trang_thai_thanh_toan,
      checked_in_at: hd.checked_in_at,
      // Luôn sinh QR để user xem lại vé bất cứ lúc nào (kể cả đã check-in) —
      // chỉ null khi suất chiếu đã qua quá lâu. Việc chặn quét trùng nằm ở
      // checkInVe() (check checked_in_at), không phải ở việc ẩn mã QR.
      ma_ve_qr: tokenService.createQrTicketToken(
        hd.ma_hoa_don,
        hd.tai_khoan,
        hd.LichChieu.ngay_gio_chieu,
      ),
    }));
  },

  checkInVe: async (qrToken) => {
    if (!qrToken) {
      throw new BadRequestException("Thiếu mã QR");
    }

    let payload;
    try {
      payload = tokenService.verifyQrTicketToken(qrToken);
    } catch {
      throw new BadRequestException("Mã QR không hợp lệ hoặc đã hết hạn");
    }

    const hoaDon = await prisma.hoaDon.findUnique({
      where: { ma_hoa_don: payload.ma_hoa_don },
      include: {
        LichChieu: { include: { Phim: true, RapPhim: true } },
        NguoiDung: { select: { ho_ten: true, email: true } },
        DatVe: { include: { Ghe: true } },
      },
    });

    if (!hoaDon || hoaDon.tai_khoan !== payload.tai_khoan) {
      throw new NotFoundException("Không tìm thấy vé");
    }

    if (hoaDon.checked_in_at) {
      throw new ConflictException(
        `Vé đã được check-in lúc ${hoaDon.checked_in_at.toISOString()}`,
      );
    }

    const updated = await prisma.hoaDon.update({
      where: { ma_hoa_don: hoaDon.ma_hoa_don },
      data: { checked_in_at: new Date() },
    });

    return {
      ma_hoa_don: hoaDon.ma_hoa_don,
      checked_in_at: updated.checked_in_at,
      ten_phim: hoaDon.LichChieu.Phim?.ten_phim,
      ten_rap: hoaDon.LichChieu.RapPhim?.ten_rap,
      ngay_gio_chieu: hoaDon.LichChieu.ngay_gio_chieu,
      khach_hang: hoaDon.NguoiDung.ho_ten,
      ghe: hoaDon.DatVe.map((ve) => ve.Ghe.ten_ghe),
    };
  },
};
