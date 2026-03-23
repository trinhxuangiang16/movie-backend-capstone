import { z } from "zod";

export const createMovieSchema = z.object({
  ten_phim: z.string().trim().min(1, "Tên phim không được để trống"),

  trailer: z.string().url("Trailer phải là URL hợp lệ").optional(),

  mo_ta: z.string().trim().optional(),

  ngay_khoi_chieu: z
    .string()
    .trim()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Ngày phải theo định dạng dd/mm/yyyy",
    })
    .refine((date) => date > new Date(), {
      message: "Ngày chiếu phải ở tương lai",
    }),

  danh_gia: z.coerce
    .number()
    .min(0, "Đánh giá tối thiểu 0")
    .max(10, "Đánh giá tối đa 10"),

  hot: z.coerce.boolean().default(false),
  dang_chieu: z.coerce.boolean().default(false),
  sap_chieu: z.coerce.boolean().default(false),
});

export const updateMovieSchema = createMovieSchema
  .omit({ ngay_khoi_chieu: true })
  .partial()
  .extend({
    ngay_khoi_chieu: z.coerce
      .date({
        message: "Ngày giờ không hợp lệ",
      })
      .refine((date) => !isNaN(date.getTime()), {
        message: "Ngày giờ không hợp lệ",
      }),
  });

export const movieIdSchema = z.object({
  ma_phim: z.coerce
    .number({ message: "Mã phim phải là số" })
    .int({ message: "Mã phim phải là số nguyên" })
    .positive({ message: "Mã phim phải là số dương" }),
});

export const ngayChieuQuerySchema = z.object({
  ngay: z
    .string()
    .trim()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Ngày phải theo định dạng dd/mm/yyyy",
    }),
});
