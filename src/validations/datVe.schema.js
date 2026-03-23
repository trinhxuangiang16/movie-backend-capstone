import { z } from "zod";

export const lichChieuSchema = z.object({
  ma_rap: z
    .number({ message: "Mã rạp phải là số" })
    .int({ message: "Mã rạp phải là số nguyên" })
    .positive({ message: "Mã rạp phải là số dương" }),
  ma_phim: z
    .number({ message: "Mã phim phải là số" })
    .int({ message: "Mã phim phải là số nguyên" })
    .positive({ message: "Mã phim phải là số dương" }),
  ngay_gio_chieu: z.coerce
    .date({
      message: "Ngày giờ không hợp lệ",
    })
    .refine((date) => !isNaN(date.getTime()), {
      message: "Ngày giờ không hợp lệ",
    })
    .refine((date) => date > new Date(), {
      message: "Ngày chiếu phải ở tương lai",
    }),
  gia_ve: z
    .number({ message: "Giá vé phải là số" })
    .int({ message: "Giá vé phải là số nguyên" })
    .positive({ message: "Giá vé phải là số dương" }),
});

export const datVeSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
  danh_sach_ve: z
    .array(
      z.object({
        ma_ghe: z.coerce
          .number({ message: "Mã ghế phải là số" })
          .int({ message: "Mã ghế phải là số nguyên" })

          .positive({
            message: "Mã ghế phải là số dương lớn hơn 0",
          }),
      }),
    )
    .min(1, "Danh sách vé không được rỗng"),
});

export const layDanhSachPhongVeSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
});

export const layTrangThaiGheSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
});
