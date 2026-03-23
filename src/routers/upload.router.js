import express from "express";
import { uploadMemory } from "../common/multer/memory.multer.js";
import { uploadController } from "../controllers/upload.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";

export const uploadRouter = express.Router();

/**
 * @swagger
 * /TaiAnhLen:
 *   post:
 *     summary: Upload ảnh (Cloudinary)
 *     description: Upload ảnh lên Cloudinary và trả về URL ảnh
 *     tags:
 *       - Upload
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Upload ảnh thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                 public_id:
 *                   type: string
 *       400:
 *         description: Không có file upload
 *       401:
 *         description: Chưa đăng nhập
 */

/**
 * @swagger
 * /XoaAnh:
 *   delete:
 *     summary: Xóa ảnh trên Cloudinary
 *     description: Xóa ảnh dựa vào public_id
 *     tags:
 *       - Upload
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: public_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Public ID của ảnh trên Cloudinary
 *     responses:
 *       200:
 *         description: Xóa ảnh thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   example: ok
 *       400:
 *         description: Thiếu public_id
 *       401:
 *         description: Chưa đăng nhập
 */

// UPLOAD ẢNH PHIM
uploadRouter.post(
  "/TaiAnhLen",
  protect,
  uploadMemory.single("file"),
  uploadController.taiAnhLenCloudinary,
);

//XÓA ẢNH TRƯỚC KHI CHỌN LẠI ẢNH KHÁC
uploadRouter.delete("/XoaAnh", protect, uploadController.xoaAnhCloudinary);
