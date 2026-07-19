import express from "express";
import { comboController } from "../controllers/combo.controller.js";

export const comboRouter = express.Router();

/**
 * @swagger
 * /Combo/DanhSachCombo:
 *   get:
 *     summary: Lấy danh sách combo bắp nước đang bán (public)
 *     tags:
 *       - Combo
 *     responses:
 *       200:
 *         description: Lấy danh sách combo thành công
 */

comboRouter.get("/DanhSachCombo", comboController.getDanhSachCombo);
