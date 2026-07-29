import express from "express";
import { phimController } from "../controllers/phim.controller.js";

import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import {
  createMovieSchema,
  movieIdSchema,
  ngayChieuQuerySchema,
  updateMovieSchema,
} from "../validations/phim.schema.js";
import { queryPaginationSchema } from "../validations/pagination.schema.js";

export const phimRouter = express.Router();



phimRouter.get("/LayDanhSachPhim", protect, phimController.getLayDanhSachPhim);

phimRouter.get("/PhimDangChieu", protect, phimController.getPhimDangChieu);

phimRouter.get("/PhimSapChieu", protect, phimController.getPhimSapChieu);

phimRouter.get("/PhimHot", protect, phimController.getPhimHot);

phimRouter.get(
  "/LayDanhSachPhimPhanTrang",
  protect,
  validateAll({ query: queryPaginationSchema }),
  phimController.getLayDanhSachPhimPhanTrang,
);

phimRouter.get(
  "/LayThongTinPhim/:ma_phim",
  protect,
  validateAll({ params: movieIdSchema }),
  phimController.getLayThongTinPhim,
);

phimRouter.get(
  "/LayDanhSachPhimTheoNgay",
  protect,
  validateAll({ query: ngayChieuQuerySchema }),
  phimController.getLayDanhSachPhimTheoNgay,
);


phimRouter.post(
  "/",
  protect,
  mustBeAdmin("ADMIN"),
  validateAll({ body: createMovieSchema }),
  phimController.themPhim,
);

phimRouter.delete(
  "/XoaPhim/:ma_phim",
  protect,
  mustBeAdmin("ADMIN"),
  validateAll({ params: movieIdSchema }),
  phimController.delete,
);

phimRouter.put(
  "/CapNhatPhim/:ma_phim",
  protect,
  mustBeAdmin("ADMIN"),
  validateAll({ body: updateMovieSchema, params: movieIdSchema }),
  phimController.capNhatPhim,
);

phimRouter.get(
  "/Banner/:ma_phim",
  protect,
  validateAll({ params: movieIdSchema }),
  phimController.getBanner,
);
