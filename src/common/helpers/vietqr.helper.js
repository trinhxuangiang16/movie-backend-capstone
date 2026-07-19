import {
  BANK_ACCOUNT_NAME,
  BANK_ACCOUNT_NO,
  BANK_BIN,
} from "../constant/app.contant.js";

// Build URL ảnh QR VietQR (dịch vụ công khai img.vietqr.io, không cần API key).
// Chỉ ghép string, không gọi ra ngoài từ BE.
export const buildVietQrImageUrl = (soTien, noiDung) => {
  const params = new URLSearchParams({
    amount: String(soTien),
    addInfo: noiDung,
    accountName: BANK_ACCOUNT_NAME,
  });

  return `https://img.vietqr.io/image/${BANK_BIN}-${BANK_ACCOUNT_NO}-compact2.png?${params.toString()}`;
};

// Nội dung chuyển khoản chuẩn để đối chiếu webhook: DH{ma_hoa_don}
export const buildNoiDungChuyenKhoan = (maHoaDon) => `DH${maHoaDon}`;
