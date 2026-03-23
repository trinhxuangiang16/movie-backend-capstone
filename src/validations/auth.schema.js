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

export const updateUserSchema = registerSchema
  .omit({ mat_khau: true })
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Phải có ít nhất 1 trường để cập nhật",
  });

// export const userParamSchema = z.object({
//   tai_khoan: z.coerce
//     .number({ message: "Tài khoản phải là số" })
//     .int({ message: "Tài khoản phải là số nguyên" })
//     .positive({ message: "Tài khoản phải là số dương" }),
// });
