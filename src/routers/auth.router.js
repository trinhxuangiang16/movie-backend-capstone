import express from "express";

import { protect } from "../common/middleware/protect.middleware.js";
import { authController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/DangKy", authController.register);
authRouter.post("/DangNhap", authController.login);

authRouter.get("/ThongTinTaiKhoan", protect, authController.getInfo);

authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
