import express from "express";
import { nguoiDungController } from "../controllers/nguoiDung.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import { updateUserSchema } from "../validations/nguoiDung.schema.js";
import { queryPaginationSchema } from "../validations/pagination.schema.js";
import {
  timKiemNguoiDungSchema,
  xoaNguoiDungSchema,
} from "../validations/nguoiDung.schema.js";

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 pageSize:
 *                   type: integer
 */

/**
 * @swagger
 * /QuanLyNguoiDung/CapNhatThongTinNguoiDung:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     description: API dùng để cập nhật thông tin người dùng theo tai_khoan
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
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
 *     summary: Xóa người dùng (soft delete)
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
 *       404:
 *         description: Tài khoản không tồn tại hoặc đã bị xóa
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
 *       404:
 *         description: Không tìm thấy người dùng
 */

nguoiDungRouter.get(
  "/LayDanhSachNguoiDung",
  protect,
  nguoiDungController.getLayDanhSachNguoiDung,
);

nguoiDungRouter.get(
  "/LayDanhSachNguoiDungPhanTrang",
  protect,
  validateAll({ query: queryPaginationSchema }),
  nguoiDungController.getLayDanhSachNguoiDungPhanTrang,
);

nguoiDungRouter.get(
  "/TimKiemNguoiDung",
  protect,
  validateAll({ query: timKiemNguoiDungSchema }),
  nguoiDungController.timKiemNguoiDung,
);

//Tự Xóa
nguoiDungRouter.delete(
  "/XoaNguoiDung/:tai_khoan",
  protect,
  validateAll({ params: xoaNguoiDungSchema }),
  nguoiDungController.xoaNguoiDung,
);

nguoiDungRouter.put(
  "/CapNhatThongTinNguoiDung",
  protect,
  validateAll({ body: updateUserSchema }),
  nguoiDungController.capNhatNguoiDung,
);
