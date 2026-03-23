import { z } from "zod";
import { registerSchema } from "./auth.schema.js";

export const timKiemNguoiDungSchema = z.object({
  keyword: z.string().trim().min(1, "Từ khóa tìm kiếm không được trống"),
});

export const xoaNguoiDungSchema = z.object({
  tai_khoan: z.coerce
    .number({ message: "Tài khoản phải là số" })
    .int({ message: "Tài khoản phải là số nguyên" })
    .positive({ message: "Tài khoản phải là số dương" }),
});

export const updateUserSchema = registerSchema
  .omit({ mat_khau: true })
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Phải có ít nhất 1 trường để cập nhật",
  });
