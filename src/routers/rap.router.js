import express from "express";
import { rapController } from "../controllers/rap.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import {
  giuChoTamThoiSchema,
  maHeThongRapSchema,
} from "../validations/rap.schema.js";
import { movieIdSchema } from "../validations/phim.schema.js";

export const rapRouter = express.Router();

/**
 * @swagger
 * /QuanLyRap/LayThongTinHeThongRap:
 *   get:
 *     summary: Lấy thông tin hệ thống rạp
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy hệ thống rạp thành công
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinLichChieuPhim:
 *   get:
 *     summary: Lấy lịch chiếu phim theo mã phim
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Lấy lịch chiếu thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinCumRapTheoHeThong:
 *   get:
 *     summary: Lấy thông tin cụm rạp theo hệ thống
 *     description: Trả về thông tin hệ thống rạp và danh sách cụm rạp theo mã hệ thống rạp
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_he_thong_rap
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã hệ thống rạp
 *     responses:
 *       200:
 *         description: Lấy cụm rạp thành công
 *       404:
 *         description: Không tìm thấy hệ thống rạp
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinLichChieuHeThongRap:
 *   get:
 *     summary: Lấy thông tin lịch chiếu theo hệ thống rạp
 *     description: Trả về danh sách hệ thống rạp kèm cụm rạp, rạp phim và lịch chiếu
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_he_thong_rap
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã hệ thống rạp cần lấy lịch chiếu
 *     responses:
 *       200:
 *         description: Lấy thông tin lịch chiếu thành công
 *       400:
 *         description: Thiếu mã hệ thống rạp
 */

/**
 * @swagger
 * /QuanLyRap/GiuChoTamThoi:
 *   post:
 *     summary: Giữ chỗ tạm thời cho ghế
 *     description: Giữ ghế trong 5 phút cho người dùng đang đăng nhập
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - ma_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               ma_ghe:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Giữ ghế thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 expire_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Mã lịch chiếu hoặc mã ghế không hợp lệ
 *       401:
 *         description: Người dùng chưa đăng nhập
 */

rapRouter.get("/LayThongTinHeThongRap", protect, rapController.getHeThongRap);

rapRouter.get(
  "/LayThongTinCumRapTheoHeThong",
  protect,
  validateAll({ query: maHeThongRapSchema }),
  rapController.getCumRapTheoHeThong,
);

rapRouter.get(
  "/LayThongTinLichChieuHeThongRap",
  protect,

  validateAll({ query: maHeThongRapSchema }),
  rapController.getLichChieuHeThongRap,
);

rapRouter.get(
  "/LayThongTinLichChieuPhim",
  protect,
  validateAll({ query: movieIdSchema }),
  rapController.getLichChieuPhim,
);

rapRouter.post(
  "/GiuChoTamThoi",
  protect,
  validateAll({ body: giuChoTamThoiSchema }),
  rapController.giuChoTamThoi,
);
