import express from "express";

import { protect } from "../common/middleware/protect.middleware.js";
import { authController } from "../controllers/auth.controller.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import {
  authLimiter,
  dangKyLimiter,
} from "../common/middleware/rateLimit.middleware.js";
import {
  loginSchema,
  logoutSchema,
  refreshTokenSchema,
  registerSchema,
} from "../validations/auth.schema.js";

const authRouter = express.Router();




authRouter.post(
  "/DangKy",
  dangKyLimiter,
  validateAll({ body: registerSchema }),
  authController.register,
);
authRouter.post(
  "/DangNhap",
  authLimiter,
  validateAll({ body: loginSchema }),
  authController.login,
);

authRouter.post(
  "/DangXuat",
  validateAll({ body: logoutSchema }),
  authController.logout,
);

authRouter.get("/ThongTinTaiKhoan", protect, authController.getInfo);


authRouter.post(
  "/refresh-token",
  authLimiter,
  validateAll({ body: refreshTokenSchema }),
  authController.refreshToken,
);

export default authRouter;
