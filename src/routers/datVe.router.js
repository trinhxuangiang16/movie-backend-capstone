import express from "express";
import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";
import { datVeController } from "../controllers/datVe.controller.js";

export const datVeRouter = express.Router();

/**
 * @swagger
 * /QuanLyDatVe/LayDanhSachPhongVe:
 *   get:
 *     summary: Lấy danh sách ghế và trạng thái ghế
 *     tags:
 *       - QuanLyDatVe
 *     parameters:
 *       - in: query
 *         name: ma_lich_chieu
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy danh sách phòng vé thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/TaoLichChieu:
 *   post:
 *     summary: Tạo lịch chiếu (ADMIN)
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_rap
 *               - ma_phim
 *               - ngay_gio_chieu
 *               - gia_ve
 *             properties:
 *               ma_rap:
 *                 type: integer
 *               ma_phim:
 *                 type: integer
 *               ngay_gio_chieu:
 *                 type: string
 *                 example: "2025-10-01 09:00:00"
 *               gia_ve:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tạo lịch chiếu thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/DatVe:
 *   post:
 *     summary: Đặt vé
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ve:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_ghe:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Đặt vé thành công
 *       400:
 *         description: Ghế đã được đặt
 */

datVeRouter.get(
  "/LayTrangThaiGheTrongRap",
  protect,
  datVeController.layTrangThaiGheTrongRap,
);

datVeRouter.post(
  "/TaoLichChieu",
  protect,
  mustBeAdmin("ADMIN"),
  datVeController.taoLichChieu,
);

datVeRouter.get(
  "/LayDanhSachPhongVe",
  protect,
  datVeController.layDanhSachPhongVe,
);

datVeRouter.post("/DatVe", protect, datVeController.datVe);

datVeRouter.get("/LichSuDatVe", protect, datVeController.getLichSuDatVe);
