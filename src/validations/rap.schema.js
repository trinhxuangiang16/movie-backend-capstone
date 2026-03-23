import { z } from "zod";

export const maHeThongRapSchema = z.object({
  ma_he_thong_rap: z.coerce
    .number({ message: "Mã hệ thống rạp phải là số" })
    .int({ message: "Mã hệ thống rạp phải là số nguyên" })
    .positive({ message: "Mã hệ thống rạp phải là số dương" }),
});

export const giuChoTamThoiSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),

  ma_ghe: z.coerce
    .number({ message: "Mã ghế phải là số" })
    .int({ message: "Mã ghế phải là số nguyên" })
    .positive({
      message: "Mã ghế phải là số dương lớn hơn 0",
    }),
});
