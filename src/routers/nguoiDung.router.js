import express from "express";
import { nguoiDungController } from "../controllers/nguoiDung.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";

export const nguoiDungRouter = express.Router();

/**
 * @swagger
 * /QuanLyNguoiDung/LayDanhSachNguoiDung:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách người dùng thành công
 */

/**
 * @swagger
 * /QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang:
 *   get:
 *     summary: Lấy danh sách người dùng phân trang
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy danh sách phân trang thành công
 */

/**
 * @swagger
 * /QuanLyNguoiDung/CapNhatThongTinNguoiDung/{tai_khoan}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     description: API dùng để cập nhật thông tin người dùng theo tai_khoan
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tai_khoan
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID tài khoản cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ho_ten:
 *                 type: string
 *               email:
 *                 type: string
 *               so_dt:
 *                 type: string
 *               mat_khau:
 *                 type: string
 *               loai_nguoi_dung:
 *                 type: string
 *               mat_khau_cu:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Không tìm thấy người dùng
 */

/**
 * @swagger
 * /QuanLyNguoiDung/XoaNguoiDung/{tai_khoan}:
 *   delete:
 *     summary: Xóa người dùng
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tai_khoan
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa người dùng thành công
 */

/**
 * @swagger
 * /QuanLyNguoiDung/TimKiemNguoiDung:
 *   get:
 *     summary: Tìm kiếm người dùng
 *     description: Tìm kiếm người dùng theo tên hoặc email
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: Từ khóa tìm kiếm (tên hoặc email)
 *     responses:
 *       200:
 *         description: Tìm kiếm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   tai_khoan:
 *                     type: integer
 *                   ho_ten:
 *                     type: string
 *                   email:
 *                     type: string
 *                   so_dt:
 *                     type: string
 *                   loai_nguoi_dung:
 *                     type: string
 *       400:
 *         description: Thiếu từ khóa tìm kiếm
 */

nguoiDungRouter.get(
  "/LayDanhSachNguoiDung",
  protect,
  nguoiDungController.getLayDanhSachNguoiDung,
);

nguoiDungRouter.get(
  "/LayDanhSachNguoiDungPhanTrang",
  protect,
  nguoiDungController.getLayDanhSachNguoiDungPhanTrang,
);

nguoiDungRouter.get(
  "/TimKiemNguoiDung",
  protect,
  nguoiDungController.timKiemNguoiDung,
);

nguoiDungRouter.put(
  "/CapNhatThongTinNguoiDung/:tai_khoan",
  protect,
  nguoiDungController.capNhatNguoiDung,
);

nguoiDungRouter.delete(
  "/XoaNguoiDung/:tai_khoan",
  protect,
  nguoiDungController.xoaNguoiDung,
);
