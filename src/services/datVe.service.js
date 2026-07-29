import { prisma } from "../common/prisma/contect.prisma.js";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { Prisma } from "../common/prisma/generated/prisma/index.js";
import { tokenService } from "./token.service.js";
import {
  MAX_SEATS_PER_HOLD,
  PAYMENT_ORDER_EXPIRE_MINUTES,
} from "../common/constant/app.contant.js";
import {
  buildNoiDungChuyenKhoan,
  buildVietQrImageUrl,
} from "../common/helpers/vietqr.helper.js";
import { tinhGiaVe } from "../common/helpers/giaVe.helper.js";
import { logger, maskEmail } from "../common/logger/logger.js";

export const datVeService = {

  layTrangThaiGheTrongRap: async (ma_lich_chieu, tai_khoan) => {
    if (!ma_lich_chieu) {
      throw new BadRequestException("Thiếu ma_lich_chieu");
    }

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

    const nhungGheDaDat = await prisma.datVe.findMany({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
      },
    });

    const nhungGheDaGiuCho = await prisma.giuCho.findMany({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
        expire_at: {
          gt: new Date(),
        },
      },
    });

    const bookedSet = new Set(nhungGheDaDat.map((s) => s.ma_ghe));


    const giuChoTheoGhe = new Map(nhungGheDaGiuCho.map((s) => [s.ma_ghe, s]));

    const result = {
      ma_lich_chieu: Number(ma_lich_chieu),
      danh_sach_ghe: seats.map((seat) => {
        const giuCho = giuChoTheoGhe.get(seat.ma_ghe);

        const laCuaToi = Boolean(
          giuCho && tai_khoan && giuCho.tai_khoan === tai_khoan,
        );

        return {
          ma_ghe: seat.ma_ghe,
          ten_ghe: seat.ten_ghe,
          loai_ghe: seat.loai_ghe,
          da_dat: bookedSet.has(seat.ma_ghe),
          dang_giu_cho: Boolean(giuCho),

          loai_giu_cho: giuCho?.loai ?? null,

          la_cua_toi: laCuaToi,
          giu_den: laCuaToi ? giuCho.expire_at : null,
        };
      }),
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
          ma_ghe: { in: danhSachMaGhe },
          ma_rap: lichChieu.ma_rap,
        },
      });

      if (gheHopLe.length !== danhSachMaGhe.length) {
        throw new NotFoundException("Có ghế không thuộc rạp của lịch chiếu");
      }

      // Giới hạn số ghế mỗi đơn — phải chặn ở CẢ ĐÂY chứ không chỉ ở giuGhe:
      // client có thể bấm thanh toán thẳng mà không qua /GiuGhe, bỏ qua lớp
      // kiểm tra bên đó.
      if (danhSachMaGhe.length > MAX_SEATS_PER_HOLD) {
        throw new ConflictException(
          `Mỗi lượt đặt chỉ được tối đa ${MAX_SEATS_PER_HOLD} ghế`,
        );
      }

      // Mỗi user chỉ được có 1 đơn chờ thanh toán tại một thời điểm.
      //
      // Không có chặn này thì double-click nút "Thanh toán" sinh ra 2 hóa đơn:
      // cả 2 request đều thấy ghế do CHÍNH user giữ nên không bên nào bị chặn,
      // rồi mỗi bên tạo 1 HoaDon riêng. Bên chạy sau chiếm GiuCho, bên chạy
      // trước còn lại 1 hóa đơn MỒ CÔI — có mã QR, có số tiền, nhưng không giữ
      // ghế nào. User quét nhầm QR đó là mất tiền mà không có vé.
      //
      // Đặt TRƯỚC hoaDon.create và nằm trong transaction nên request thứ hai
      // đọc được đơn của request thứ nhất.
      const donDangCho = await tx.hoaDon.findFirst({
        where: {
          tai_khoan: tai_khoan,
          trang_thai_thanh_toan: "cho_thanh_toan",
          het_han_luc: { gt: new Date() },
        },
        select: { ma_hoa_don: true },
      });

      if (donDangCho) {
        throw new ConflictException(
          `Bạn đang có đơn #${donDangCho.ma_hoa_don} chờ thanh toán. ` +
          `Vui lòng hoàn tất hoặc hủy đơn đó trước.`,
        );
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

      // Kiểm tra ghế đang được giữ chổ
      const dangGiuCho = await tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          expire_at: {
            gt: new Date(),
          },
        },
      });

      if (dangGiuCho.length > 0) {
        // Lọc ra những ghế đang bị giữ bởi người khác
        const gheDangBiGiuBoiNguoiKhac = dangGiuCho.filter(
          (g) => g.tai_khoan !== tai_khoan,
        );
        // Nếu có ghế nào đang bị giữ bởi người khác trong danh sach ve gửi lên
        if (gheDangBiGiuBoiNguoiKhac.length > 0) {
          throw new ConflictException("Một hoặc nhiều ghế đang được giữ");
        }
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
      const danhSachVeTinh = gheHopLe.map((ghe) => ({
        ma_ghe: ghe.ma_ghe,
        gia_ve: tinhGiaVe(giaCoBan, ghe.loai_ghe),
      }));

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
        // Dọn bản ghi giữ chỗ đang CHẶN unique([ma_lich_chieu, ma_ghe]) một cách
        // vô lý. Unique không lọc được theo expire_at (MySQL không có partial
        // index) nên phải xóa tay ở đây, nếu không ca sau sẽ bị P2002: ghế đã
        // quá expire_at nhưng expireHoaDon.job chưa quét tới (khe tối đa 1 phút)
        // — ghế thực chất đang trống.
        // KHÔNG xóa bản ghi còn hạn của chính user: nó được UPDATE ngay bên dưới
        // để ghế không rời tay user một khoảnh khắc nào (xóa-rồi-chèn sẽ mở ra
        // đúng khe TOCTOU mà unique constraint sinh ra để bịt).
        await tx.giuCho.deleteMany({
          where: {
            ma_lich_chieu: Number(ma_lich_chieu),
            ma_ghe: { in: danhSachMaGhe },
            expire_at: { lte: new Date() },
          },
        });

        // Chuyển giai đoạn tam -> da_tao_don cho ghế user ĐANG giữ. Đây là lý do
        // dùng 1 bảng: không xóa, không chèn, ghế được giữ liên tục.
        // expire_at nhận đúng het_han_luc của hóa đơn — một mốc thời gian duy
        // nhất cho cả ghế lẫn đơn, không cần FE gọi thêm API gia hạn.
        // gia_ve CHỐT tại đây, webhook chỉ copy sang DatVe: admin sửa giá lịch
        // chiếu giữa chừng cũng không làm lệch HoaDon.tong_tien.
        for (const ve of danhSachVeTinh) {
          const ketQua = await tx.giuCho.updateMany({
            where: {
              ma_lich_chieu: Number(ma_lich_chieu),
              ma_ghe: ve.ma_ghe,
              tai_khoan: tai_khoan,
              // Compare-and-swap: chỉ nhận ghế còn ở giai đoạn "tam". Nếu một
              // request song song (double-click "Thanh toán") vừa chuyển ghế
              // này sang da_tao_don thì count = 0 và ta bung transaction —
              // KHÔNG tạo hóa đơn thứ hai cho cùng bộ ghế.
              loai: "tam",
            },
            data: {
              loai: "da_tao_don",
              ma_hoa_don: hoaDon.ma_hoa_don,
              gia_ve: ve.gia_ve,
              expire_at: hetHanLuc,
            },
          });

          // count = 0 có 2 khả năng: (a) ghế đã bị request song song chiếm,
          // (b) ghế chưa từng qua /GiuGhe. Phân biệt bằng cách tra lại.
          if (ketQua.count === 0) {
            const banGhi = await tx.giuCho.findFirst({
              where: {
                ma_lich_chieu: Number(ma_lich_chieu),
                ma_ghe: ve.ma_ghe,
              },
              select: { loai: true, tai_khoan: true, ma_hoa_don: true },
            });

            // Có bản ghi da_tao_don của chính user = đơn vừa được tạo bởi
            // request song song → chặn, tránh sinh hóa đơn mồ côi.
            if (
              banGhi &&
              banGhi.loai === "da_tao_don" &&
              banGhi.tai_khoan === tai_khoan
            ) {
              throw new ConflictException(
                `Bạn vừa tạo đơn #${banGhi.ma_hoa_don} cho ghế này. ` +
                `Vui lòng hoàn tất hoặc hủy đơn đó trước.`,
              );
            }
            // Còn lại: ghế chưa qua /GiuGhe → createMany bên dưới lo
          }
        }

        // Ghế chưa từng qua /GiuGhe (user bấm thanh toán thẳng, hoặc bản ghi tạm
        // vừa hết hạn và bị dọn ở trên) — tạo mới ở trạng thái da_tao_don.
        // createMany bỏ qua ghế đã được UPDATE ở trên nhờ skipDuplicates=false:
        // ta lọc thủ công để P2002 vẫn nổ khi NGƯỜI KHÁC chen vào (race thật).
        const gheDaCoBanGhi = await tx.giuCho.findMany({
          where: {
            ma_lich_chieu: Number(ma_lich_chieu),
            ma_ghe: { in: danhSachMaGhe },
            ma_hoa_don: hoaDon.ma_hoa_don,
          },
          select: { ma_ghe: true },
        });
        const setDaCo = new Set(gheDaCoBanGhi.map((g) => g.ma_ghe));
        const veCanTao = danhSachVeTinh.filter((ve) => !setDaCo.has(ve.ma_ghe));

        if (veCanTao.length > 0) {
          await tx.giuCho.createMany({
            data: veCanTao.map((ve) => ({
              tai_khoan: tai_khoan,
              ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
              ma_ghe: ve.ma_ghe,
              loai: "da_tao_don",
              ma_hoa_don: hoaDon.ma_hoa_don,
              gia_ve: ve.gia_ve,
              expire_at: hetHanLuc,
            })),
          });
        }

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
        // P2002 = vỡ @@unique([ma_lich_chieu, ma_ghe]) trên GiuCho: một request
        // khác vừa chèn bản ghi giữ chỗ cho đúng ghế này giữa lúc ta check ở
        // trên và lúc insert. Check thường không đủ (TOCTOU) — unique mới là
        // thứ đảm bảo 2 người không cùng giữ 1 ghế rồi cùng chuyển khoản.
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

  // Admin cấp vé trực tiếp — KHÔNG qua thanh toán. Dùng khi khách chuyển khoản
  // muộn (sau khi đơn het_han + ghế đã nhả) và ghế vẫn còn trống, hoặc cấp vé
  // marketing tại quầy. Vì tái dùng luồng chọn ghế của client nên "chọn được
  // ghế" đã đồng nghĩa "ghế còn trống"; unique([ma_lich_chieu, ma_ghe]) trên
  // DatVe là chốt chặn cuối chống cấp trùng ghế.
  //
  // BẢO MẬT: hàm này bỏ qua bước thu tiền, nên PHẢI được gọi sau middleware
  // mustBeAdmin("ADMIN") ở router. Không tự kiểm tra role ở đây để giữ 1 nguồn
  // phân quyền duy nhất (router), nhưng tuyệt đối không mở route này cho USER.
  capVeTrucTiep: async (req) => {
    const { ma_lich_chieu, danh_sach_ve, danh_sach_combo, email_khach, ly_do } =
      req.validated.body;

    const admin = req?.user;
    if (!admin) throw new UnauthorizedException("Người dùng chưa đăng nhập");

    // Xác định tài khoản NHẬN vé: email_khach nếu có, ngược lại là chính admin
    let taiKhoanNhan = admin.tai_khoan;
    if (email_khach) {
      const khach = await prisma.nguoiDung.findUnique({
        where: { email: email_khach },
      });
      if (!khach) {
        throw new NotFoundException(
          `Không tìm thấy tài khoản khách với email ${email_khach}`,
        );
      }
      taiKhoanNhan = khach.tai_khoan;
    }

    return await prisma.$transaction(async (tx) => {
      const lichChieu = await tx.lichChieu.findUnique({
        where: { ma_lich_chieu: Number(ma_lich_chieu) },
      });
      if (!lichChieu) {
        throw new NotFoundException("Lịch chiếu không tồn tại");
      }

      const danhSachMaGhe = danh_sach_ve.map((ve) => Number(ve.ma_ghe));

      // Ghế phải thuộc đúng rạp của lịch chiếu
      const gheHopLe = await tx.ghe.findMany({
        where: { ma_ghe: { in: danhSachMaGhe }, ma_rap: lichChieu.ma_rap },
      });
      if (gheHopLe.length !== danhSachMaGhe.length) {
        throw new NotFoundException("Có ghế không thuộc rạp của lịch chiếu");
      }

      // Ghế đã có vé thật (đã bán) → không cấp được
      const gheDaDat = await tx.datVe.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
        },
      });
      if (gheDaDat.length > 0) {
        throw new ConflictException("Một hoặc nhiều ghế đã được bán");
      }

      // Ghế đang được người KHÁC giữ chỗ (đơn cho_thanh_toan chưa hết hạn) →
      // không cấp đè lên. Admin cấp trực tiếp không đi qua bước GiuCho nên
      // không có "giữ của chính mình" ở đây.
      const dangGiuCho = await tx.giuCho.findMany({
        where: {
          ma_lich_chieu: Number(ma_lich_chieu),
          ma_ghe: { in: danhSachMaGhe },
          expire_at: { gt: new Date() },
        },
      });
      if (dangGiuCho.length > 0) {
        throw new ConflictException(
          "Một hoặc nhiều ghế đang được người khác giữ chỗ",
        );
      }

      // Validate combo (nếu có) — chỉ chấp nhận combo còn bán
      const comboDat = danh_sach_combo ?? [];
      let comboHopLe = [];
      if (comboDat.length > 0) {
        const danhSachMaCombo = comboDat.map((c) => Number(c.ma_combo));
        comboHopLe = await tx.combo.findMany({
          where: { ma_combo: { in: danhSachMaCombo }, isDeleted: false },
        });
        if (comboHopLe.length !== new Set(danhSachMaCombo).size) {
          throw new NotFoundException("Có combo không tồn tại hoặc ngừng bán");
        }
      }

      // Tính giá y hệt taoDonChoThanhToan (dùng chung tinhGiaVe) để tong_tien
      // phản ánh giá trị vé được cấp, dù so_tien_da_nhan = 0.
      const giaCoBan = lichChieu.gia_ve;
      const danhSachVeTinh = gheHopLe.map((ghe) => ({
        ma_ghe: ghe.ma_ghe,
        gia_ve: tinhGiaVe(giaCoBan, ghe.loai_ghe),
      }));
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

      const tongTienVe = danhSachVeTinh.reduce((s, v) => s + v.gia_ve, 0);
      const tongTienCombo = danhSachComboInsert.reduce(
        (s, c) => s + c.don_gia * c.so_luong,
        0,
      );

      // Tạo hóa đơn CHỐT LUÔN (da_thanh_toan) — không có bước chờ webhook.
      // Audit tạm gắn vào phuong_thuc_thanh_toan: "admin_cap:<tai_khoan_admin>"
      // và so_tien_da_nhan=0 (chưa có cột cap_boi/ly_do riêng — migration sau).
      const hoaDon = await tx.hoaDon.create({
        data: {
          tai_khoan: taiKhoanNhan,
          ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
          tong_tien: tongTienVe + tongTienCombo,
          trang_thai_thanh_toan: "da_thanh_toan",
          phuong_thuc_thanh_toan: `admin_cap:${admin.tai_khoan}`,
          so_tien_da_nhan: 0,
          thanh_toan_luc: new Date(),
        },
      });

      try {
        await tx.datVe.createMany({
          data: danhSachVeTinh.map((ve) => ({
            tai_khoan: taiKhoanNhan,
            ma_lich_chieu: Number(lichChieu.ma_lich_chieu),
            ma_ghe: ve.ma_ghe,
            ma_hoa_don: hoaDon.ma_hoa_don,
            gia_ve: ve.gia_ve,
          })),
        });

        if (danhSachComboInsert.length > 0) {
          await tx.hoaDonCombo.createMany({
            data: danhSachComboInsert.map((c) => ({
              ...c,
              ma_hoa_don: hoaDon.ma_hoa_don,
            })),
          });
        }
      } catch (error) {
        // Ghế vừa bị chốt bởi luồng khác giữa lúc check và insert → unique vỡ
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new ConflictException(
            "Ghế vừa được bán/cấp cho người khác, vui lòng chọn lại",
          );
        }
        throw error;
      }

      logger.info("[capVeTrucTiep] Admin cấp vé trực tiếp", {
        adminId: admin.tai_khoan,
        adminEmail: maskEmail(admin.email),
        maHoaDon: hoaDon.ma_hoa_don,
        taiKhoanNhan,
        emailKhach: maskEmail(email_khach),
        soGhe: danhSachMaGhe.length,
        lyDo: ly_do ?? null,
      });

      return {
        ma_hoa_don: hoaDon.ma_hoa_don,
        tai_khoan_nhan: taiKhoanNhan,
        email_khach: email_khach ?? null,
        tong_tien: hoaDon.tong_tien,
        trang_thai_thanh_toan: hoaDon.trang_thai_thanh_toan,
        ma_lich_chieu: hoaDon.ma_lich_chieu,
        danh_sach_ghe: gheHopLe.map((ghe) => {
          const ve = danhSachVeTinh.find((v) => v.ma_ghe === ghe.ma_ghe);
          return {
            ma_ghe: ghe.ma_ghe,
            ten_ghe: ghe.ten_ghe,
            loai_ghe: ghe.loai_ghe,
            gia_ve: ve?.gia_ve,
          };
        }),
      };
    });
  },

  // User chủ động hủy đơn đang chờ thanh toán → nhả ghế NGAY thay vì đợi
  // expireHoaDon.job quét (tối đa 1 phút) hoặc đợi hết het_han_luc.
  //
  // Hủy = ĐỔI TRẠNG THÁI, không phải xóa dữ liệu:
  // - HoaDon: update thành "huy" (giữ lại để đối soát nếu user lỡ chuyển khoản
  //   sau khi hủy, và để về sau đếm số lần hủy phục vụ chống spam)
  // - GiuCho: xóa — đây là thứ duy nhất đang khóa tài nguyên chung (ghế)
  // - HoaDonCombo: giữ nguyên — không giữ chỗ vật lý, xóa đi chỉ mất snapshot giá
  huyGiaoDich: async (ma_hoa_don, tai_khoan) => {
    if (!ma_hoa_don) {
      throw new BadRequestException("Thiếu mã hóa đơn");
    }

    const hoaDon = await prisma.hoaDon.findUnique({
      where: { ma_hoa_don: Number(ma_hoa_don) },
    });

    if (!hoaDon) {
      throw new NotFoundException("Không tìm thấy hóa đơn");
    }

    // Đơn của người khác → trả 404 chứ không phải 401/403: 401 sẽ kích hoạt
    // luồng refresh-token của FE interceptor (api.ts) một cách vô nghĩa, còn
    // 404 đồng thời không tiết lộ hóa đơn đó có tồn tại hay không.
    if (hoaDon.tai_khoan !== tai_khoan) {
      throw new NotFoundException("Không tìm thấy hóa đơn");
    }

    // Idempotent: bấm hủy 2 lần (double-click / retry mạng) không nên báo lỗi
    if (hoaDon.trang_thai_thanh_toan === "huy") {
      return {
        ma_hoa_don: hoaDon.ma_hoa_don,
        trang_thai_thanh_toan: hoaDon.trang_thai_thanh_toan,
      };
    }

    if (hoaDon.trang_thai_thanh_toan !== "cho_thanh_toan") {
      throw new ConflictException(
        hoaDon.trang_thai_thanh_toan === "da_thanh_toan"
          ? "Đơn đã được thanh toán, không thể hủy"
          : "Đơn đã hết hạn, không cần hủy",
      );
    }

    const trangThaiSauKhiHuy = await prisma.$transaction(async (tx) => {
      // Compare-and-swap: điều kiện trang_thai nằm trong WHERE nên nếu webhook
      // vừa chốt đơn xong (cùng pattern ở webhookThanhToan.service.js) thì
      // count = 0 và ta KHÔNG ghi đè da_thanh_toan → user không mất tiền.
      const ketQua = await tx.hoaDon.updateMany({
        where: {
          ma_hoa_don: hoaDon.ma_hoa_don,
          trang_thai_thanh_toan: "cho_thanh_toan",
        },
        data: { trang_thai_thanh_toan: "huy" },
      });

      if (ketQua.count === 0) {
        throw new ConflictException(
          "Đơn vừa được thanh toán hoặc đã đổi trạng thái, không thể hủy",
        );
      }

      // Nhả ghế ngay
      await tx.giuCho.deleteMany({
        where: { ma_hoa_don: hoaDon.ma_hoa_don },
      });

      return "huy";
    });

    return {
      ma_hoa_don: hoaDon.ma_hoa_don,
      trang_thai_thanh_toan: trangThaiSauKhiHuy,
      ma_lich_chieu: hoaDon.ma_lich_chieu,
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
