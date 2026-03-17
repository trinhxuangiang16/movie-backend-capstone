import { responseSuccess } from "../common/helpers/function.helper.js";
import { datVeService } from "../services/datVe.service.js";

export const datVeController = {
  layTrangThaiGheTrongRap: async (req, res, next) => {
    try {
      const { ma_lich_chieu } = req.body;
      const result = await datVeService.layTrangThaiGheTrongRap(ma_lich_chieu);

      const response = responseSuccess(
        result,
        `Lấy trạng thái ghế trong rạp thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  taoLichChieu: async (req, res, next) => {
    try {
      const result = await datVeService.taoLichChieu(req.body);
      const response = responseSuccess(result, `Tạo lịch chiếu thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  layDanhSachPhongVe: async (req, res, next) => {
    try {
      const { ma_lich_chieu } = req.query;

      const result = await datVeService.layDanhSachPhongVe(ma_lich_chieu);

      const response = responseSuccess(
        result,
        `Lấy danh sách phòng vé thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  datVe: async (req, res, next) => {
    try {
      const result = await datVeService.datVe(req);

      const response = responseSuccess(result, `Đặt vé thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getLichSuDatVe: async (req, res, next) => {
    try {
      const tai_khoan = req.user.tai_khoan;

      const result = await datVeService.getLichSuDatVe(tai_khoan);

      const response = responseSuccess(result, `Lấy lịch sử đặt vé thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
