import express from "express";
import {
  mustBeAdmin,
  protect,
  protectAllowBodyToken,
} from "../common/middleware/protect.middleware.js";
import { datVeController } from "../controllers/datVe.controller.js";
import { giuGheController } from "../controllers/giuGhe.controller.js";
import { giuGheSchema, nhaGheSchema } from "../validations/giuGhe.schema.js";

import {
  checkInVeSchema,
  capVeTrucTiepSchema,
  datVeSchema,
  huyGiaoDichSchema,
  layDanhSachPhongVeSchema,
  layTrangThaiGheSchema,
  layTrangThaiHoaDonSchema,
  lichChieuSchema,
} from "../validations/datVe.schema.js";
import { validateAll } from "../common/middleware/validate.middleware.js";
import { giuGheLimiter } from "../common/middleware/rateLimit.middleware.js";

export const datVeRouter = express.Router();



datVeRouter.get(
  "/LayTrangThaiGheTrongRap",
  protect,
  validateAll({ query: layTrangThaiGheSchema }),
  datVeController.layTrangThaiGheTrongRap,
);

datVeRouter.post(
  "/TaoLichChieu",
  protect,
  validateAll({ body: lichChieuSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.taoLichChieu,
);

datVeRouter.get(
  "/LayDanhSachPhongVe",
  protect,

  validateAll({ query: layDanhSachPhongVeSchema }),
  datVeController.layDanhSachPhongVe,
);


datVeRouter.post(
  "/DatVe",
  protect,

  validateAll({ body: datVeSchema }),
  datVeController.taoDonChoThanhToan,
);

datVeRouter.get(
  "/TrangThaiHoaDon",
  protect,
  validateAll({ query: layTrangThaiHoaDonSchema }),
  datVeController.layTrangThaiHoaDon,
);


datVeRouter.post(
  "/HuyGiaoDich",
  protect,
  validateAll({ body: huyGiaoDichSchema }),
  datVeController.huyGiaoDich,
);



datVeRouter.post(
  "/CapVeTrucTiep",
  protect,
  validateAll({ body: capVeTrucTiepSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.capVeTrucTiep,
);

datVeRouter.get("/LichSuDatVe", protect, datVeController.getLichSuDatVe);


datVeRouter.post(
  "/CheckIn",
  protect,
  validateAll({ body: checkInVeSchema }),
  mustBeAdmin("ADMIN"),
  datVeController.checkInVe,
);


datVeRouter.post(
  "/GiuGhe",
  giuGheLimiter,
  protect,
  validateAll({ body: giuGheSchema }),
  giuGheController.giuGhe,
);


datVeRouter.post(
  "/GiaHanGiuGhe",
  giuGheLimiter,
  protect,
  validateAll({ body: giuGheSchema }),
  giuGheController.giaHanGiuGhe,
);

datVeRouter.post(
  "/NhaGhe",
  giuGheLimiter,
  protectAllowBodyToken,
  validateAll({ body: nhaGheSchema }),
  giuGheController.nhaGhe,
);
