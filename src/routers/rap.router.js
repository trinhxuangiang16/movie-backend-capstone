import express from "express";
import { rapController } from "../controllers/rap.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import {
  giuChoTamThoiSchema,
  maHeThongRapSchema,
  maLichChieuSchema,
} from "../validations/rap.schema.js";
import { movieIdSchema } from "../validations/phim.schema.js";

export const rapRouter = express.Router();



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

rapRouter.get(
  "/LayLichChieuPhimDuaVaoMaVaThoiGian",
  protect,
  validateAll({ query: maLichChieuSchema }),
  rapController.getLichChieuPhimDuaVaoMaVaThoiGian,
);

rapRouter.post(
  "/GiuChoTamThoi",
  protect,
  validateAll({ body: giuChoTamThoiSchema }),
  rapController.giuChoTamThoi,
);
