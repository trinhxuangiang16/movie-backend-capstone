import express from "express";
import { rapController } from "../controllers/rap.controller.js";

export const rapRouter = express.Router();

rapRouter.get("/LayThongTinHeThongRap", rapController.getHeThongRap);

rapRouter.get(
  "/LayThongTinCumRapTheoHeThong",
  rapController.getCumRapTheoHeThong,
);

rapRouter.get(
  "/LayThongTinLichChieuHeThongRap",
  rapController.getLichChieuHeThongRap,
);

rapRouter.get("/LayThongTinLichChieuPhim", rapController.getLichChieuPhim);
