import express from "express";
import { webhookThanhToanController } from "../controllers/webhookThanhToan.controller.js";
import { webhookAuth } from "../common/middleware/webhookAuth.middleware.js";

export const thanhToanRouter = express.Router();

/**
 * @swagger
 * /ThanhToan/Webhook:
 *   post:
 *     summary: Webhook nhận xác nhận thanh toán từ ngân hàng (SePay/Casso)
 *     tags:
 *       - ThanhToan
 *     security:
 *       - apiKeyHeader: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               transferType:
 *                 type: string
 *               transferAmount:
 *                 type: integer
 *               referenceCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đã nhận webhook (luôn trả success để tránh ngân hàng retry vô ích)
 *       401:
 *         description: Sai apikey
 */

// PUBLIC endpoint — không dùng protect (JWT user), xác thực bằng apikey riêng
// của webhookAuth vì bên gọi là ngân hàng/cổng trung gian, không có cookie/JWT.
// Không dùng validateAll ở đây: payload phải được ghi log vào GiaoDichWebhook
// dù thiếu/sai field (idempotency yêu cầu log MỌI request), nên validate được
// làm permissive ngay trong xuLyWebhookThanhToan thay vì chặn ở middleware.
thanhToanRouter.post(
  "/Webhook",
  webhookAuth,
  webhookThanhToanController.xuLyWebhook,
);
