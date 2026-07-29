import { prisma } from "../common/prisma/contect.prisma.js";

const INTERVAL_MS = 60 * 1000;
const INTERVAL_GIU_GHE_MS = 15 * 1000;

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

const donDepGiuGheTam = async () => {
  try {
    const daXoa = await prisma.giuCho.deleteMany({
      where: {
        loai: "tam",
        expire_at: { lt: new Date() },
      },
    });

    if (daXoa.count > 0) {
      console.log(
        `[expireHoaDon.job] Đã nhả ${daXoa.count} ghế giữ tạm hết hạn`,
      );
    }
  } catch (error) {
    console.error("[expireHoaDon.job] Lỗi khi dọn ghế giữ tạm:", error);
  }
};

export const startExpireHoaDonJob = () => {
  setInterval(donDepHoaDonHetHan, INTERVAL_MS);

  setInterval(donDepGiuGheTam, INTERVAL_GIU_GHE_MS);

  console.log("[expireHoaDon.job] Job dọn dẹp hóa đơn hết hạn đã khởi động");
};
