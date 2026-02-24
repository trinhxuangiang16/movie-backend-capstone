import express from "express";
import { phimController } from "../controllers/phim.controller.js";

import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";

export const phimRouter = express.Router();

// Public APIs
phimRouter.get("/LayDanhSachPhim", phimController.getLayDanhSachPhim);

phimRouter.get(
  "/LayDanhSachPhimPhanTrang",
  phimController.getLayDanhSachPhimPhanTrang,
);

phimRouter.get("/LayThongTinPhim/:ma_phim", phimController.getLayThongTinPhim);

phimRouter.get(
  "/LayDanhSachPhimTheoNgay",
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
