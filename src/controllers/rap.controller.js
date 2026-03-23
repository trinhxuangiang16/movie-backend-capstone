import { successResponse } from "../common/helpers/function.helper.js";
import { rapService } from "../services/rap.service.js";

export const rapController = {
  getHeThongRap: async (req, res, next) => {
    try {
      const result = await rapService.getHeThongRap();
      return successResponse(
        res,
        result,
        "Lấy thông tin hệ thống rạp thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getCumRapTheoHeThong: async (req, res, next) => {
    try {
      const { ma_he_thong_rap } = req.query;
      const result = await rapService.getCumRapTheoHeThong(ma_he_thong_rap);
      return successResponse(
        res,
        result,
        "Lấy cụm rạp theo hệ thống thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getLichChieuHeThongRap: async (req, res, next) => {
    try {
      const { ma_he_thong_rap } = req.query;
      const result = await rapService.getLichChieuHeThongRap(ma_he_thong_rap);
      return successResponse(
        res,
        result,
        "Lấy lịch chiếu theo hệ thống rạp thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getLichChieuPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.query;
      const result = await rapService.getLichChieuPhim(ma_phim);
      return successResponse(res, result, "Lấy lịch chiếu phim thành công");
    } catch (err) {
      next(err);
    }
  },

  giuChoTamThoi: async (req, res, next) => {
    try {
      const result = await rapService.giuChoTamThoi(req);

      return successResponse(res, result, "Giữ chỗ tạm thời thành công");
    } catch (err) {
      next(err);
    }
  },
};
