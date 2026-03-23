import express from "express";

import { protect } from "../common/middleware/protect.middleware.js";
import { authController } from "../controllers/auth.controller.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "../validations/auth.schema.js";

const authRouter = express.Router();

/**
 * @swagger
 * /QuanLyNguoiDung/DangKy:
 *   post:
 *     summary: Đăng ký tài khoản
 *     tags:
 *       - QuanLyNguoiDung
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mat_khau
 *             properties:
 *               ho_ten:
 *                 type: string
 *               email:
 *                 type: string
 *               so_dt:
 *                 type: string
 *               mat_khau:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng ký thành công
 *       400:
 *         description: Email đã tồn tại
 */

/**
 * @swagger
 * /QuanLyNguoiDung/DangNhap:
 *   post:
 *     summary: Đăng nhập
 *     tags:
 *       - QuanLyNguoiDung
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mat_khau
 *             properties:
 *               email:
 *                 type: string
 *               mat_khau:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công, trả về accessToken và refreshToken
 *       401:
 *         description: Sai thông tin đăng nhập
 */

/**
 * @swagger
 * /QuanLyNguoiDung/ThongTinTaiKhoan:
 *   get:
 *     summary: Lấy thông tin tài khoản hiện tại
 *     description: Trả về thông tin người dùng dựa trên access token (cần đăng nhập)
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy thông tin tài khoản thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tai_khoan:
 *                   type: integer
 *                 ho_ten:
 *                   type: string
 *                 email:
 *                   type: string
 *                 so_dt:
 *                   type: string
 *                 loai_nguoi_dung:
 *                   type: string
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 */

/**
 * @swagger
 * /QuanLyNguoiDung/refresh-token:
 *   post:
 *     summary: Làm mới access token
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - accessToken
 *               - refreshToken
 *             properties:
 *               accessToken:
 *                 type: string
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tạo access token mới thành công
 */

authRouter.post(
  "/DangKy",
  validateAll({ body: registerSchema }),
  authController.register,
);
authRouter.post(
  "/DangNhap",
  validateAll({ body: loginSchema }),
  authController.login,
);

authRouter.get("/ThongTinTaiKhoan", protect, authController.getInfo);

authRouter.post(
  "/refresh-token",
  validateAll({ body: refreshTokenSchema }),
  authController.refreshToken,
);

export default authRouter;
