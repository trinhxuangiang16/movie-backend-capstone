import express from "express";
import authRouter from "./auth.router.js";

import { nguoiDungRouter } from "./nguoiDung.router.js";
import { phimRouter } from "./phim.router.js";
import { rapRouter } from "./rap.router.js";
import { datVeRouter } from "./datVe.router.js";
import { uploadRouter } from "./upload.router.js";

const rootRouter = express.Router();

rootRouter.use("/QuanLyNguoiDung", authRouter);
rootRouter.use("/QuanLyNguoiDung", nguoiDungRouter);

rootRouter.use("/QuanLyPhim", phimRouter);
rootRouter.use("/QuanLyPhim", uploadRouter);

rootRouter.use("/QuanLyRap", rapRouter);
rootRouter.use("/QuanLyDatVe", datVeRouter);
export default rootRouter;
