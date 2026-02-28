import express from "express";
import { phimController } from "../controllers/phim.controller.js";

import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";

export const phimRouter = express.Router();

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhim:
 *   get:
 *     summary: Lấy danh sách phim
 *     description: Trả về toàn bộ phim chưa bị xóa (isDeleted = false)
 *     tags:
 *       - QuanLyPhim
 *     responses:
 *       200:
 *         description: Lấy danh sách phim thành công
 */

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhimPhanTrang:
 *   get:
 *     summary: Lấy danh sách phim phân trang
 *     description: Hỗ trợ phân trang và filter
 *     tags:
 *       - QuanLyPhim
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Trang hiện tại
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: Số lượng phim mỗi trang
 *     responses:
 *       200:
 *         description: Lấy danh sách phim phân trang thành công
 */

/**
 * @swagger
 * /QuanLyPhim/LayThongTinPhim/{ma_phim}:
 *   get:
 *     summary: Lấy thông tin chi tiết phim
 *     tags:
 *       - QuanLyPhim
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Lấy thông tin phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhimTheoNgay:
 *   get:
 *     summary: Lấy danh sách phim theo ngày khởi chiếu
 *     tags:
 *       - QuanLyPhim
 *     parameters:
 *       - in: query
 *         name: ngay
 *         required: true
 *         schema:
 *           type: string
 *         description: Ngày theo định dạng dd/mm/yyyy
 *     responses:
 *       200:
 *         description: Lấy danh sách phim theo ngày thành công
 *       400:
 *         description: Sai định dạng ngày
 */

/**
 * @swagger
 * /QuanLyPhim:
 *   post:
 *     summary: Thêm phim mới
 *     description: API dùng để thêm phim mới vào hệ thống (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ten_phim
 *             properties:
 *               ten_phim:
 *                 type: string
 *               trailer:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               ngay_khoi_chieu:
 *                 type: string
 *                 example: "2025-10-01"
 *               danh_gia:
 *                 type: integer
 *               hot:
 *                 type: boolean
 *               dang_chieu:
 *                 type: boolean
 *               sap_chieu:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Thêm phim thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

/**
 * @swagger
 * /QuanLyPhim/CapNhatPhim/{ma_phim}:
 *   put:
 *     summary: Cập nhật thông tin phim
 *     description: Cập nhật thông tin phim theo mã phim (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_phim:
 *                 type: string
 *               trailer:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               ngay_khoi_chieu:
 *                 type: string
 *               danh_gia:
 *                 type: integer
 *               hot:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cập nhật phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyPhim/XoaPhim/{ma_phim}:
 *   delete:
 *     summary: Xóa phim (Soft Delete)
 *     description: Chuyển trạng thái isDeleted thành true (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Xóa phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */

// Public APIs
phimRouter.get("/LayDanhSachPhim", protect, phimController.getLayDanhSachPhim);

phimRouter.get(
  "/LayDanhSachPhimPhanTrang",
  protect,
  phimController.getLayDanhSachPhimPhanTrang,
);

phimRouter.get(
  "/LayThongTinPhim/:ma_phim",
  protect,
  phimController.getLayThongTinPhim,
);

phimRouter.get(
  "/LayDanhSachPhimTheoNgay",
  protect,
  phimController.getLayDanhSachPhimTheoNgay,
);

// ADMIN APIs
phimRouter.post("/", protect, mustBeAdmin("ADMIN"), phimController.themPhim);

phimRouter.delete(
  "/XoaPhim/:ma_phim",
  protect,
  mustBeAdmin("ADMIN"),
  phimController.delete,
);

phimRouter.put(
  "/CapNhatPhim/:ma_phim",
  protect,
  mustBeAdmin("ADMIN"),
  phimController.capNhatPhim,
);
