const HE_SO_LOAI_GHE = {
  VIP: 1.2,
};

const HE_SO_MAC_DINH = 1;

export const tinhGiaVe = (giaCoBan, loaiGhe) => {
  const heSo = HE_SO_LOAI_GHE[loaiGhe] ?? HE_SO_MAC_DINH;
  return Math.round(Number(giaCoBan ?? 0) * heSo);
};
