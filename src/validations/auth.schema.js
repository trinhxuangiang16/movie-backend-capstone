import { z } from "zod";

export const registerSchema = z.object({
  mat_khau: z.string().trim().min(6, "Mật khẩu tối thiểu 6 ký tự"),

  email: z.string().trim().email("Email không hợp lệ"),

  so_dt: z
    .string()
    .trim()
    .regex(/^[0-9]{9,11}$/, "Số điện thoại không hợp lệ"),

  ho_ten: z.string().trim().min(2, "Họ tên không hợp lệ"),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Email không hợp lệ"),
  mat_khau: z.string().trim().min(1, "Mật khẩu không được trống"),
});

export const refreshTokenSchema = z.object({
  accessToken: z.string().trim().min(1, "Access token không được để trống"),

  refreshToken: z.string().trim().min(1, "Refresh token không được để trống"),
});
