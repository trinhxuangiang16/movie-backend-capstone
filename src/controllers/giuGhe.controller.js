import { successResponse } from "../common/helpers/function.helper.js";
import { giuGheService } from "../services/giuGhe.service.js";

export const giuGheController = {
  giuGhe: async (req, res, next) => {
    try {
      const result = await giuGheService.giuGhe(req);

      return successResponse(
        res,
        result,
        result.da_giu_truoc_do
          ? "Ghế đã được bạn giữ trước đó"
          : "Giữ ghế thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  giaHanGiuGhe: async (req, res, next) => {
    try {
      const result = await giuGheService.giaHan(req);

      return successResponse(res, result, "Gia hạn giữ ghế thành công");
    } catch (err) {
      next(err);
    }
  },

  nhaGhe: async (req, res, next) => {
    try {
      const result = await giuGheService.nhaGhe(req);

      return successResponse(res, result, "Nhả ghế thành công");
    } catch (err) {
      next(err);
    }
  },
};
