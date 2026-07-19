import express from "express";
import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";
import { datVeController } from "../controllers/datVe.controller.js";

import {
  checkInVeSchema,
  datVeSchema,
  layDanhSachPhongVeSchema,
  layTrangThaiGheSchema,
  layTrangThaiHoaDonSchema,
  lichChieuSchema,
} from "../validations/datVe.schema.js";
import { validateAll } from "../common/middleware/validate.middleware.js";

export const datVeRouter = express.Router();

/**
 * @swagger
 * /QuanLyDatVe/LayTrangThaiGheTrongRap:
 *   get:
 *     summary: Lấy trạng thái ghế trong rạp
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_lich_chieu
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy trạng thái ghế thành công
 */

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
 *     summary: Tạo đơn chờ thanh toán (giữ ghế, trả QR VietQR) — vé thật chỉ được tạo sau khi webhook ngân hàng xác nhận đã thanh toán
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
 *               danh_sach_combo:
 *                 type: array
 *                 description: Combo bắp nước mua kèm (optional)
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_combo:
 *                       type: integer
 *                     so_luong:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Tạo đơn chờ thanh toán thành công
 *       400:
 *         description: Ghế đã được đặt
 */

/**
 * @swagger
 * /QuanLyDatVe/TrangThaiHoaDon:
 *   get:
 *     summary: Lấy trạng thái thanh toán của hóa đơn (FE polling khi chờ QR)
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_hoa_don
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy trạng thái hóa đơn thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/LichSuDatVe:
 *   get:
 *     summary: Lấy lịch sử đặt vé của người dùng
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy lịch sử đặt vé thành công
 */

datVeRouter.get(
  "/LayTrangThaiGheTrongRap",
  protect,
  validateAll({ query: layTrangThaiGheSchema }),
  datVeController.layTrangThaiGheTrongRap,
);

datVeRouter.post(
  "/TaoLichChieu",
  protect,
  validateAll({ body: lichChieuSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.taoLichChieu,
);

datVeRouter.get(
  "/LayDanhSachPhongVe",
  protect,

  validateAll({ query: layDanhSachPhongVeSchema }),
  datVeController.layDanhSachPhongVe,
);

// Route giữ nguyên tên /DatVe (không đổi để không vỡ FE hiện có) nhưng nay
// tạo đơn "chờ thanh toán" thay vì chốt vé ngay — luồng đặt vé cũ đã bị thay
// thế hoàn toàn, không còn nơi nào khác gọi datVeService.datVe (đã grep FE).
datVeRouter.post(
  "/DatVe",
  protect,

  validateAll({ body: datVeSchema }),
  datVeController.taoDonChoThanhToan,
);

datVeRouter.get(
  "/TrangThaiHoaDon",
  protect,
  validateAll({ query: layTrangThaiHoaDonSchema }),
  datVeController.layTrangThaiHoaDon,
);

datVeRouter.get("/LichSuDatVe", protect, datVeController.getLichSuDatVe);

/**
 * @swagger
 * /QuanLyDatVe/CheckIn:
 *   post:
 *     summary: Check-in vé bằng mã QR (ADMIN)
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
 *               - qr_token
 *             properties:
 *               qr_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Check-in thành công
 *       400:
 *         description: Mã QR không hợp lệ hoặc đã hết hạn
 *       404:
 *         description: Không tìm thấy vé
 *       409:
 *         description: Vé đã được check-in trước đó
 */

datVeRouter.post(
  "/CheckIn",
  protect,
  validateAll({ body: checkInVeSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.checkInVe,
);
