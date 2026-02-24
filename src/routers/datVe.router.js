import express from "express";
import {
  mustBeAdmin,
  protect,
} from "../common/middleware/protect.middleware.js";
import { datVeController } from "../controllers/datVe.controller.js";

export const datVeRouter = express.Router();

datVeRouter.post(
  "/TaoLichChieu",
  protect,
  mustBeAdmin("ADMIN"),
  datVeController.taoLichChieu,
);

datVeRouter.get(
  "/LayDanhSachPhongVe",
  protect,
  datVeController.layDanhSachPhongVe,
);

datVeRouter.post("/DatVe", protect, datVeController.datVe);
