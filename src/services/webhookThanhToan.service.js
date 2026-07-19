import { prisma } from "../common/prisma/contect.prisma.js";

const NGUON = "sepay";

// Regex khớp "DH<số>" dù nằm giữa chuỗi dài kiểu ngân hàng hay thêm ký tự
// thừa quanh nội dung CK (vd: "NGUYEN VAN A chuyen tien DH1023 CT tu...").
const MA_HOA_DON_REGEX = /DH(\d+)/i;

const parseMaHoaDon = (content) => {
  if (!content || typeof content !== "string") return null;
  const match = content.match(MA_HOA_DON_REGEX);
  if (!match) return null;
  const so = Number(match[1]);
  return Number.isInteger(so) && so > 0 ? so : null;
};

// Ghi 1 dòng vào GiaoDichWebhook — dùng cho mọi nhánh xử lý (idempotency log).
const ghiLogGiaoDich = async ({
  rawPayload,
  maGiaoDichNganHang,
  soTien,
  noiDung,
  maHoaDonParse,
  ketQua,
  ghiChu,
}) => {
  return prisma.giaoDichWebhook.create({
    data: {
      nguon: NGUON,
      raw_payload: JSON.stringify(rawPayload ?? {}),
      ma_giao_dich_ngan_hang: maGiaoDichNganHang ?? null,
      so_tien: soTien ?? null,
      noi_dung: noiDung ?? null,
      ma_hoa_don_parse: maHoaDonParse ?? null,
      ket_qua_xu_ly: ketQua,
      ghi_chu: ghiChu ?? null,
    },
  });
};

// Gọi từ webhookAuth.middleware khi sai secret — vẫn phải log lại request.
export const ghiLogWebhookSaiSecret = async (rawPayload) => {
  try {
    const content = rawPayload?.content;
    const referenceCode = rawPayload?.referenceCode;
    const transferAmount = rawPayload?.transferAmount;

    await ghiLogGiaoDich({
      rawPayload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse: parseMaHoaDon(content),
      ketQua: "SAI_SECRET",
      ghiChu: "Header Authorization không hợp lệ hoặc sai apikey",
    });
  } catch {
    // Không để lỗi ghi log làm vỡ luồng trả 401 cho ngân hàng
  }
};

// Xử lý webhook thanh toán kiểu SePay/Casso. Luôn ghi log GiaoDichWebhook cho
// mọi nhánh (parse fail, không khớp đơn, sai số tiền, đã xử lý trước, OK...).
// Luôn trả { success: true } (200) trừ khi lỗi hệ thống thật sự — để ngân hàng
// không retry vô ích với các lỗi nghiệp vụ (đơn hết hạn/không tồn tại/...).
export const xuLyWebhookThanhToan = async (req) => {
  const payload = req.body ?? {};
  const {
    content,
    transferType,
    transferAmount,
    referenceCode,
  } = payload;

  const maHoaDonParse = parseMaHoaDon(content);

  // Chỉ xử lý giao dịch tiền vào; các loại khác (out, hoặc thiếu field) chỉ log lại
  if (transferType !== "in") {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "BO_QUA_KHONG_PHAI_TIEN_VAO",
      ghiChu: `transferType nhận được: ${transferType ?? "(không có)"}`,
    });
    return { success: true };
  }

  // Idempotency: nếu referenceCode này đã từng xử lý OK trước đó thì trả về
  // luôn, không xử lý lại (ngân hàng có thể gửi lại webhook nhiều lần)
  if (referenceCode) {
    const daXuLyOk = await prisma.giaoDichWebhook.findFirst({
      where: {
        ma_giao_dich_ngan_hang: referenceCode,
        ket_qua_xu_ly: "OK",
      },
    });

    if (daXuLyOk) {
      await ghiLogGiaoDich({
        rawPayload: payload,
        maGiaoDichNganHang: referenceCode,
        soTien: transferAmount,
        noiDung: content,
        maHoaDonParse,
        ketQua: "DA_XU_LY_TRUOC",
        ghiChu: "referenceCode đã được xử lý OK trước đó, bỏ qua",
      });
      return { success: true };
    }
  }

  if (!maHoaDonParse) {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse: null,
      ketQua: "KHONG_KHOP_MA_DON",
      ghiChu: "Không tìm thấy mẫu DH<số> trong nội dung chuyển khoản",
    });
    return { success: true };
  }

  const hoaDon = await prisma.hoaDon.findUnique({
    where: { ma_hoa_don: maHoaDonParse },
  });

  if (!hoaDon) {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "KHONG_KHOP_MA_DON",
      ghiChu: `Không tìm thấy hóa đơn #${maHoaDonParse}`,
    });
    return { success: true };
  }

  if (hoaDon.trang_thai_thanh_toan !== "cho_thanh_toan") {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "HOA_DON_KHONG_O_TRANG_THAI_CHO",
      ghiChu: `Hóa đơn #${maHoaDonParse} đang ở trạng thái ${hoaDon.trang_thai_thanh_toan}`,
    });
    return { success: true };
  }

  const soTien = Number(transferAmount) || 0;
  if (soTien < hoaDon.tong_tien) {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "SAI_SO_TIEN",
      ghiChu: `Nhận ${soTien}, cần tối thiểu ${hoaDon.tong_tien}`,
    });
    return { success: true };
  }

  // Đủ điều kiện chốt đơn: chuyển da_thanh_toan, tạo DatVe thật cho các ghế
  // đang giữ, xóa GiuCho — toàn bộ trong 1 transaction.
  try {
    await prisma.$transaction(async (tx) => {
      // Lock lại trạng thái bằng cách update có điều kiện (tránh race nếu 2
      // webhook trùng thời điểm cùng xử lý 1 hóa đơn)
      const updateResult = await tx.hoaDon.updateMany({
        where: {
          ma_hoa_don: hoaDon.ma_hoa_don,
          trang_thai_thanh_toan: "cho_thanh_toan",
        },
        data: {
          trang_thai_thanh_toan: "da_thanh_toan",
          phuong_thuc_thanh_toan: payload.gateway ?? NGUON,
          ma_giao_dich_ngan_hang: referenceCode ?? null,
          so_tien_da_nhan: soTien,
          thanh_toan_luc: new Date(),
        },
      });

      if (updateResult.count === 0) {
        // Đơn đã bị nhánh khác xử lý trước (race) — không làm gì thêm
        return;
      }

      const dsGiuCho = await tx.giuCho.findMany({
        where: { ma_hoa_don: hoaDon.ma_hoa_don },
        include: { Ghe: true },
      });

      if (dsGiuCho.length > 0) {
        const lichChieu = await tx.lichChieu.findUnique({
          where: { ma_lich_chieu: hoaDon.ma_lich_chieu },
        });
        const giaCoBan = lichChieu?.gia_ve ?? 0;

        // Tính lại giá vé từng ghế y hệt công thức lúc tạo đơn (VIP x1.2) —
        // GiuCho không lưu giá snapshot nên phải tái tính tại đây.
        await tx.datVe.createMany({
          data: dsGiuCho.map((gc) => {
            const heSo = gc.Ghe?.loai_ghe === "VIP" ? 1.2 : 1;
            return {
              tai_khoan: gc.tai_khoan,
              ma_lich_chieu: gc.ma_lich_chieu,
              ma_ghe: gc.ma_ghe,
              ma_hoa_don: hoaDon.ma_hoa_don,
              gia_ve: giaCoBan * heSo,
            };
          }),
        });

        await tx.giuCho.deleteMany({
          where: { ma_hoa_don: hoaDon.ma_hoa_don },
        });
      }
    });
  } catch (error) {
    // Lỗi hệ thống thật sự (DB down, v.v.) — log lại nhưng vẫn không throw để
    // không lộ stack trace ra response webhook; vẫn trả success:true theo yêu
    // cầu tránh ngân hàng retry vô ích, nhưng ghi rõ ghi_chu để debug.
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "LOI_HE_THONG",
      ghiChu: String(error?.message ?? error),
    });
    return { success: true };
  }

  await ghiLogGiaoDich({
    rawPayload: payload,
    maGiaoDichNganHang: referenceCode,
    soTien: transferAmount,
    noiDung: content,
    maHoaDonParse,
    ketQua: "OK",
    ghiChu: `Đã chốt hóa đơn #${maHoaDonParse}`,
  });

  return { success: true };
};
