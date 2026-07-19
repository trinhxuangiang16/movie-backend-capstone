import { PAYMENT_WEBHOOK_API_KEY } from "../constant/app.contant.js";
import { ghiLogWebhookSaiSecret } from "../../services/webhookThanhToan.service.js";

// Middleware xác thực webhook thanh toán kiểu SePay/Casso: header
// "Authorization: Apikey <PAYMENT_WEBHOOK_API_KEY>". Đây là endpoint public
// cho bên ngoài (ngân hàng/cổng trung gian) gọi vào nên KHÔNG dùng errorResponse/
// successResponse thông thường của app — trả JSON tối giản trực tiếp.
// Nếu sai secret vẫn phải ghi log vào GiaoDichWebhook trước khi trả 401
// (yêu cầu idempotency/log toàn bộ request, kể cả request bị từ chối).
export const webhookAuth = async (req, res, next) => {
  const authorization = req.headers.authorization || "";
  const [type, key] = authorization.split(" ");

  const hopLe =
    type === "Apikey" && key && PAYMENT_WEBHOOK_API_KEY && key === PAYMENT_WEBHOOK_API_KEY;

  if (!hopLe) {
    await ghiLogWebhookSaiSecret(req.body);
    return res.status(401).json({ success: false, message: "Sai apikey" });
  }

  next();
};
