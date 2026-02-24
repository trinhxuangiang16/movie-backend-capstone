import express from "express";
import { nguoiDungController } from "../controllers/nguoiDung.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";

export const nguoiDungRouter = express.Router();

nguoiDungRouter.get(
  "/LayDanhSachNguoiDung",
  protect,
  nguoiDungController.getLayDanhSachNguoiDung,
);

nguoiDungRouter.get(
  "/LayDanhSachNguoiDungPhanTrang",
  protect,
  nguoiDungController.getLayDanhSachNguoiDungPhanTrang,
);

nguoiDungRouter.get(
  "/TimKiemNguoiDung",
  protect,
  nguoiDungController.timKiemNguoiDung,
);

nguoiDungRouter.put(
  "/CapNhatThongTinNguoiDung/:tai_khoan",
  protect,
  nguoiDungController.capNhatNguoiDung,
);

nguoiDungRouter.delete(
  "/XoaNguoiDung/:tai_khoan",
  protect,
  nguoiDungController.xoaNguoiDung,
);
