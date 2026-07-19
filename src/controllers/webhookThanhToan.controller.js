import { xuLyWebhookThanhToan } from "../services/webhookThanhToan.service.js";

// Controller cho endpoint public bên ngoài (ngân hàng/SePay/Casso) gọi vào —
// KHÔNG dùng successResponse chuẩn của app, trả JSON tối giản trực tiếp.
// Không throw exception class thường: mọi lỗi nghiệp vụ đã được xử lý và log
// bên trong service, chỉ lỗi hệ thống thật sự (ngoài tầm kiểm soát) mới rơi
// vào catch này.
export const webhookThanhToanController = {
  xuLyWebhook: async (req, res) => {
    try {
      const result = await xuLyWebhookThanhToan(req);
      return res.status(200).json(result);
    } catch (err) {
      console.error("Webhook thanh toán lỗi ngoài dự kiến:", err);
      // Vẫn trả 200 để ngân hàng không retry vô ích, nhưng success:false để
      // phân biệt khi debug qua log server
      return res.status(200).json({ success: false });
    }
  },
};
