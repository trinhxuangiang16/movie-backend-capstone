import express from "express";
import { nguoiDungController } from "../controllers/nguoiDung.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import { updateUserSchema } from "../validations/nguoiDung.schema.js";
import { queryPaginationSchema } from "../validations/pagination.schema.js";
import {
  timKiemNguoiDungSchema,
  xoaNguoiDungSchema,
} from "../validations/nguoiDung.schema.js";

export const nguoiDungRouter = express.Router();



nguoiDungRouter.get(
  "/LayDanhSachNguoiDung",
  protect,
  nguoiDungController.getLayDanhSachNguoiDung,
);

nguoiDungRouter.get(
  "/LayDanhSachNguoiDungPhanTrang",
  protect,
  validateAll({ query: queryPaginationSchema }),
  nguoiDungController.getLayDanhSachNguoiDungPhanTrang,
);

nguoiDungRouter.get(
  "/TimKiemNguoiDung",
  protect,
  validateAll({ query: timKiemNguoiDungSchema }),
  nguoiDungController.timKiemNguoiDung,
);


nguoiDungRouter.delete(
  "/XoaNguoiDung/:tai_khoan",
  protect,
  validateAll({ params: xoaNguoiDungSchema }),
  nguoiDungController.xoaNguoiDung,
);

nguoiDungRouter.put(
  "/CapNhatThongTinNguoiDung",
  protect,
  validateAll({ body: updateUserSchema }),
  nguoiDungController.capNhatNguoiDung,
);
