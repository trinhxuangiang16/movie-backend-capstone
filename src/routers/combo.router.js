import express from "express";
import { comboController } from "../controllers/combo.controller.js";

export const comboRouter = express.Router();



comboRouter.get("/DanhSachCombo", comboController.getDanhSachCombo);
