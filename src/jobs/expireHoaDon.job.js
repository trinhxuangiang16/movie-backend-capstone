import { prisma } from "../common/prisma/contect.prisma.js";

const INTERVAL_MS = 60 * 1000; // 1 phút

// Dọn dẹp nền: tự động hết hạn các hóa đơn cho_thanh_toan quá het_han_luc và
// giải phóng GiuCho liên quan. Độc lập với check hết hạn lúc FE polling
// (datVeService.layTrangThaiHoaDon) — job này đảm bảo ghế được giải phóng
// ngay cả khi không ai polling đơn đó nữa (vd user đóng tab).
const donDepHoaDonHetHan = async () => {
  try {
    const hoaDonHetHan = await prisma.hoaDon.findMany({
      where: {
        trang_thai_thanh_toan: "cho_thanh_toan",
        het_han_luc: { lt: new Date() },
      },
      select: { ma_hoa_don: true },
    });

    if (hoaDonHetHan.length === 0) return;

    const maHoaDons = hoaDonHetHan.map((h) => h.ma_hoa_don);

    await prisma.$transaction(async (tx) => {
      await tx.hoaDon.updateMany({
        where: { ma_hoa_don: { in: maHoaDons } },
        data: { trang_thai_thanh_toan: "het_han" },
      });

      await tx.giuCho.deleteMany({
        where: { ma_hoa_don: { in: maHoaDons } },
      });
    });

    console.log(
      `[expireHoaDon.job] Đã hết hạn ${maHoaDons.length} hóa đơn: ${maHoaDons.join(", ")}`,
    );
  } catch (error) {
    console.error("[expireHoaDon.job] Lỗi khi dọn dẹp hóa đơn hết hạn:", error);
  }
};

export const startExpireHoaDonJob = () => {
  setInterval(donDepHoaDonHetHan, INTERVAL_MS);
  console.log("[expireHoaDon.job] Job dọn dẹp hóa đơn hết hạn đã khởi động");
};
