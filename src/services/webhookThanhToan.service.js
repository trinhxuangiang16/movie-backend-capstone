import { prisma } from "../common/prisma/contect.prisma.js";
import { logger, serializeError } from "../common/logger/logger.js";

const NGUON = "sepay";

const MA_HOA_DON_REGEX = /DH(\d+)/i;

const KET_QUA_DA_CHOT_DON = ["OK", "OK_THUA_TIEN"];

class KhongConGheDeCapError extends Error {
  constructor() {
    super("Hóa đơn không còn ghế giữ chỗ để cấp vé");
    this.name = "KhongConGheDeCapError";
  }
}

const parseMaHoaDon = (content) => {
  if (!content || typeof content !== "string") return null;
  const match = content.match(MA_HOA_DON_REGEX);
  if (!match) return null;
  const so = Number(match[1]);
  return Number.isInteger(so) && so > 0 ? so : null;
};

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

  }
};


export const xuLyWebhookThanhToan = async (req) => {
  const payload = req.body ?? {};
  const { content, transferType, transferAmount, referenceCode } = payload;

  const maHoaDonParse = parseMaHoaDon(content);

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


  if (referenceCode) {
    const daXuLyOk = await prisma.giaoDichWebhook.findFirst({
      where: {
        ma_giao_dich_ngan_hang: referenceCode,
        ket_qua_xu_ly: { in: KET_QUA_DA_CHOT_DON },
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


  const tienThua = soTien - hoaDon.tong_tien;


  try {
    await prisma.$transaction(async (tx) => {

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
        return;
      }

      const dsGiuCho = await tx.giuCho.findMany({
        where: { ma_hoa_don: hoaDon.ma_hoa_don },
      });

      if (dsGiuCho.length === 0) {
        throw new KhongConGheDeCapError();
      }

      await tx.datVe.createMany({
        data: dsGiuCho.map((gc) => ({
          tai_khoan: gc.tai_khoan,
          ma_lich_chieu: gc.ma_lich_chieu,
          ma_ghe: gc.ma_ghe,
          ma_hoa_don: hoaDon.ma_hoa_don,
          gia_ve: gc.gia_ve,
        })),
      });

      await tx.giuCho.deleteMany({
        where: { ma_hoa_don: hoaDon.ma_hoa_don },
      });
    });
  } catch (error) {

    const laLoiNghiepVu = error instanceof KhongConGheDeCapError;

    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: laLoiNghiepVu ? "DA_NHAN_TIEN_NHUNG_HET_GHE" : "LOI_HE_THONG",
      ghiChu: `CẦN XỬ LÝ TAY — đã nhận ${soTien} cho hóa đơn #${maHoaDonParse} nhưng không cấp được vé: ${String(
        error?.message ?? error,
      )}`,
    });

    logger.error("[webhookThanhToan] Cần xử lý tay sau khi đã nhận tiền", {
      maHoaDon: maHoaDonParse,
      soTien,
      referenceCode: referenceCode ?? null,
      ketQua: laLoiNghiepVu ? "DA_NHAN_TIEN_NHUNG_HET_GHE" : "LOI_HE_THONG",
      error: serializeError(error),
    });


    if (!laLoiNghiepVu) {
      throw error;
    }

    return { success: true };
  }


  if (tienThua > 0) {
    await ghiLogGiaoDich({
      rawPayload: payload,
      maGiaoDichNganHang: referenceCode,
      soTien: transferAmount,
      noiDung: content,
      maHoaDonParse,
      ketQua: "OK_THUA_TIEN",
      ghiChu:
        `Đã chốt hóa đơn #${maHoaDonParse} | CẦN HOÀN ${tienThua} cho khách ` +
        `(nhận ${soTien}, đơn ${hoaDon.tong_tien})`,
    });

    logger.warn("[webhookThanhToan] Hóa đơn nhận thừa tiền", {
      maHoaDon: maHoaDonParse,
      tienThua,
      soTien,
      tongTienHoaDon: hoaDon.tong_tien,
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
