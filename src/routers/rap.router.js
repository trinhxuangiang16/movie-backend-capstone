import express from "express";
import { rapController } from "../controllers/rap.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";

export const rapRouter = express.Router();

/**
 * @swagger
 * /QuanLyRap/LayThongTinHeThongRap:
 *   get:
 *     summary: Lấy thông tin hệ thống rạp
 *     tags:
 *       - QuanLyRap
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
 *     parameters:
 *       - in: query
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy lịch chiếu thành công
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinCumRapTheoHeThong:
 *   get:
 *     summary: Lấy thông tin cụm rạp theo hệ thống
 *     description: Trả về danh sách cụm rạp theo mã hệ thống rạp
 *     tags:
 *       - QuanLyRap
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ma_cum_rap:
 *                     type: integer
 *                   ten_cum_rap:
 *                     type: string
 *                   dia_chi:
 *                     type: string
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

rapRouter.get("/LayThongTinHeThongRap", protect, rapController.getHeThongRap);

rapRouter.get(
  "/LayThongTinCumRapTheoHeThong",
  protect,
  rapController.getCumRapTheoHeThong,
);

rapRouter.get(
  "/LayThongTinLichChieuHeThongRap",
  protect,
  rapController.getLichChieuHeThongRap,
);

rapRouter.get(
  "/LayThongTinLichChieuPhim",
  protect,
  rapController.getLichChieuPhim,
);
