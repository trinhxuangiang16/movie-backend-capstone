import express from "express";
import {
  mustBeAdmin,
  protect,
  protectAllowBodyToken,
} from "../common/middleware/protect.middleware.js";
import { datVeController } from "../controllers/datVe.controller.js";
import { giuGheController } from "../controllers/giuGhe.controller.js";
import { giuGheSchema, nhaGheSchema } from "../validations/giuGhe.schema.js";

import {
  checkInVeSchema,
  capVeTrucTiepSchema,
  datVeSchema,
  huyGiaoDichSchema,
  layDanhSachPhongVeSchema,
  layTrangThaiGheSchema,
  layTrangThaiHoaDonSchema,
  lichChieuSchema,
} from "../validations/datVe.schema.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import { giuGheLimiter } from "../common/middleware/rateLimit.middleware.js";

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

/**
 * @swagger
 * /QuanLyDatVe/HuyGiaoDich:
 *   post:
 *     summary: User chủ động hủy đơn đang chờ thanh toán — nhả ghế ngay lập tức
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
 *               - ma_hoa_don
 *             properties:
 *               ma_hoa_don:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hủy giao dịch thành công (idempotent - gọi lại vẫn trả 200)
 *       404:
 *         description: Không tìm thấy hóa đơn hoặc hóa đơn không thuộc về bạn
 *       409:
 *         description: Đơn đã thanh toán hoặc đã hết hạn, không thể hủy
 */

/**
 * @swagger
 * /QuanLyDatVe/CapVeTrucTiep:
 *   post:
 *     summary: (ADMIN) Cấp vé trực tiếp không qua thanh toán — cho khách CK muộn hoặc vé marketing
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
 *               - ma_lich_chieu
 *               - danh_sach_ve
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
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_combo:
 *                       type: integer
 *                     so_luong:
 *                       type: integer
 *               email_khach:
 *                 type: string
 *                 description: Email tài khoản khách nhận vé; bỏ trống = cấp cho chính admin
 *               ly_do:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cấp vé thành công
 *       403:
 *         description: Không có quyền (chỉ ADMIN)
 *       404:
 *         description: Không tìm thấy lịch chiếu / ghế / tài khoản khách
 *       409:
 *         description: Ghế đã được bán hoặc đang giữ chỗ
 */

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

/**
 * @swagger
 * /QuanLyDatVe/GiuGhe:
 *   post:
 *     summary: Giữ ghế tạm khi user click chọn ghế (chưa tạo hóa đơn)
 *     description: >
 *       Idempotent — click lại ghế mình đang giữ vẫn trả 200 kèm
 *       da_giu_truoc_do=true và thời hạn còn lại, KHÔNG gia hạn.
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
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Giữ ghế thành công (hoặc ghế đã được bạn giữ trước đó)
 *       409:
 *         description: Ghế đã được người khác chọn hoặc đã bán
 */

/**
 * @swagger
 * /QuanLyDatVe/GiaHanGiuGhe:
 *   post:
 *     summary: Gia hạn giữ ghế tạm (heartbeat khi user còn ở màn chọn ghế)
 *     description: >
 *       Chỉ gia hạn bản ghi loai=tam còn hạn. Ghế đã gắn hóa đơn có expire_at
 *       khóa theo HoaDon.het_han_luc nên không gia hạn riêng được.
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
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Gia hạn thành công
 *       404:
 *         description: Không còn ghế nào đang được bạn giữ
 */

/**
 * @swagger
 * /QuanLyDatVe/NhaGhe:
 *   post:
 *     summary: Nhả ghế tạm khi user bỏ chọn hoặc rời trang
 *     description: >
 *       Chỉ là tối ưu trả ghế sớm — KHÔNG phải cơ chế giải phóng chính.
 *       Nguồn sự thật là expire_at + job dọn nền. Idempotent.
 *       Chấp nhận access_token trong body (dành cho navigator.sendBeacon lúc
 *       đóng tab, vì beacon không set được header Authorization).
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
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *               access_token:
 *                 type: string
 *                 description: Chỉ dùng khi gọi bằng sendBeacon (không có header Authorization)
 *     responses:
 *       200:
 *         description: Nhả ghế thành công
 *       401:
 *         description: Thiếu token ở cả header lẫn body, hoặc token không hợp lệ
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


datVeRouter.post(
  "/HuyGiaoDich",
  protect,
  validateAll({ body: huyGiaoDichSchema }),
  datVeController.huyGiaoDich,
);



datVeRouter.post(
  "/CapVeTrucTiep",
  protect,
  validateAll({ body: capVeTrucTiepSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.capVeTrucTiep,
);

datVeRouter.get("/LichSuDatVe", protect, datVeController.getLichSuDatVe);


datVeRouter.post(
  "/CheckIn",
  protect,
  validateAll({ body: checkInVeSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.checkInVe,
);


datVeRouter.post(
  "/GiuGhe",
  giuGheLimiter,
  protect,
  validateAll({ body: giuGheSchema }),
  giuGheController.giuGhe,
);


datVeRouter.post(
  "/GiaHanGiuGhe",
  giuGheLimiter,
  protect,
  validateAll({ body: giuGheSchema }),
  giuGheController.giaHanGiuGhe,
);

datVeRouter.post(
  "/NhaGhe",
  giuGheLimiter,
  protectAllowBodyToken,
  validateAll({ body: nhaGheSchema }),
  giuGheController.nhaGhe,
);
