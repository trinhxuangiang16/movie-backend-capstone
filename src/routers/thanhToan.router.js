import express from "express";
import { webhookThanhToanController } from "../controllers/webhookThanhToan.controller.js";
import { webhookAuth } from "../common/middleware/webhookAuth.middleware.js";
import { webhookLimiter } from "../common/middleware/rateLimit.middleware.js";

export const thanhToanRouter = express.Router();




thanhToanRouter.post(
  "/Webhook",
  webhookLimiter,
  webhookAuth,
  webhookThanhToanController.xuLyWebhook,
);
