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
  danh_sach_combo: z
    .array(
      z.object({
        ma_combo: z.coerce
          .number({ message: "Mã combo phải là số" })
          .int({ message: "Mã combo phải là số nguyên" })
          .positive({ message: "Mã combo phải là số dương" }),
        so_luong: z.coerce
          .number({ message: "Số lượng phải là số" })
          .int({ message: "Số lượng phải là số nguyên" })
          .positive({ message: "Số lượng phải là số dương" }),
      }),
    )
    .optional(),
});

export const layDanhSachPhongVeSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
});

export const checkInVeSchema = z.object({
  qr_token: z.string({ message: "Thiếu mã QR" }).min(1, "Thiếu mã QR"),
});

export const layTrangThaiGheSchema = z.object({
  ma_lich_chieu: z.coerce
    .number({ message: "Mã lịch chiếu phải là số" })
    .int({ message: "Mã lịch chiếu phải là số nguyên" })
    .positive({ message: "Mã lịch chiếu phải là số dương" }),
});

// Đơn chờ thanh toán dùng chung payload với đặt vé cũ (ghế + combo)
export const taoDonChoThanhToanSchema = datVeSchema;

export const layTrangThaiHoaDonSchema = z.object({
  ma_hoa_don: z.coerce
    .number({ message: "Mã hóa đơn phải là số" })
    .int({ message: "Mã hóa đơn phải là số nguyên" })
    .positive({ message: "Mã hóa đơn phải là số dương" }),
});

// Payload webhook kiểu SePay/Casso — permissive, phần lớn field optional vì
// đây là log linh hoạt, ngân hàng/cổng trung gian có thể thay đổi field.
export const webhookThanhToanSchema = z.object({
  id: z.union([z.number(), z.string()]).optional(),
  gateway: z.string().optional(),
  transactionDate: z.string().optional(),
  accountNumber: z.string().optional(),
  content: z.string().optional(),
  transferType: z.string().optional(),
  transferAmount: z.coerce.number().optional(),
  referenceCode: z.coerce.string().optional(),
  description: z.string().optional(),
});
