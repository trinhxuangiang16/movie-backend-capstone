import { responseSuccess } from "../common/helpers/function.helper.js";
import { rapService } from "../services/rap.service.js";

export const rapController = {
  getHeThongRap: async (req, res, next) => {
    try {
      const result = await rapService.getHeThongRap();
      const response = responseSuccess(result, `Lấy hệ thống rạp thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getCumRapTheoHeThong: async (req, res, next) => {
    try {
      const { ma_he_thong_rap } = req.query;
      const result = await rapService.getCumRapTheoHeThong(ma_he_thong_rap);
      const response = responseSuccess(
        result,
        `Lấy cụm rạp theo hệ thống thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getLichChieuHeThongRap: async (req, res, next) => {
    try {
      const { ma_he_thong_rap } = req.query;
      const result = await rapService.getLichChieuHeThongRap(ma_he_thong_rap);
      const response = responseSuccess(
        result,
        `Lấy lịch chiếu theo hệ thống rạp thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getLichChieuPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.query;
      const result = await rapService.getLichChieuPhim(ma_phim);
      const response = responseSuccess(
        result,
        `Lấy lịch chiếu phim thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
