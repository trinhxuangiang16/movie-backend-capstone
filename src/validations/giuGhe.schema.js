import { z } from "zod";


export const giuGheSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
  danh_sach_ghe: z
    .array(
      z.coerce
        .number({ message: "Mã ghế phải là số" })
        .int({ message: "Mã ghế phải là số nguyên" })
        .positive({ message: "Mã ghế phải là số dương lớn hơn 0" }),
      { message: "Danh sách ghế phải là mảng" },
    )
    .min(1, "Danh sách ghế không được rỗng"),
});


export const nhaGheSchema = giuGheSchema.extend({
  access_token: z.string().optional(),
});
