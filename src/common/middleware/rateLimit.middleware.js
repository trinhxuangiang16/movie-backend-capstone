import rateLimit from "express-rate-limit";
import { errorResponse } from "../helpers/function.helper.js";
import { statusCodes } from "../helpers/status-code.helper.js";

const taoHandler = (message) => (req, res) =>
  errorResponse(res, message, statusCodes.TOO_MANY_REQUESTS, "RATE_LIMIT");

const CAU_HINH_CHUNG = {
  standardHeaders: true,
  legacyHeaders: false,
};

export const authLimiter = rateLimit({
  ...CAU_HINH_CHUNG,
  windowMs: 15 * 60 * 1000,
  limit: 5,
  skipSuccessfulRequests: true,
  handler: taoHandler(
    "Bạn đã thử đăng nhập quá nhiều lần. Vui lòng đợi 15 phút rồi thử lại.",
  ),
});

export const dangKyLimiter = rateLimit({
  ...CAU_HINH_CHUNG,
  windowMs: 24 * 60 * 60 * 1000,
  limit: 5,
  handler: taoHandler("Bạn đã tạo quá nhiều tài khoản. Vui lòng thử lại sau."),
});

export const giuGheLimiter = rateLimit({
  ...CAU_HINH_CHUNG,
  windowMs: 60 * 1000,
  limit: 60,
  handler: taoHandler("Bạn thao tác quá nhanh. Vui lòng chậm lại một chút."),
});

export const webhookLimiter = rateLimit({
  ...CAU_HINH_CHUNG,
  windowMs: 60 * 1000,
  limit: 120,
  handler: taoHandler("Quá nhiều request."),
});
