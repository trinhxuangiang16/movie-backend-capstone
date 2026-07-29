import express from "express";
import { webhookThanhToanController } from "../controllers/webhookThanhToan.controller.js";
import { webhookAuth } from "../common/middleware/webhookAuth.middleware.js";
import { webhookLimiter } from "../common/middleware/rateLimit.middleware.js";

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


thanhToanRouter.post(
  "/Webhook",
  webhookLimiter,
  webhookAuth,
  webhookThanhToanController.xuLyWebhook,
);
