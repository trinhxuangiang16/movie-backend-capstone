import { successResponse } from "../common/helpers/function.helper.js";
import { datVeService } from "../services/datVe.service.js";

export const datVeController = {
  layTrangThaiGheTrongRap: async (req, res, next) => {
    try {
      const { ma_lich_chieu } = req.validated.body;

      const result = await datVeService.layTrangThaiGheTrongRap(ma_lich_chieu);

      return successResponse(res, result, "Lấy trạng thái ghế thành công");
    } catch (err) {
      next(err);
    }
  },

  taoLichChieu: async (req, res, next) => {
    try {
      const result = await datVeService.taoLichChieu(req.validated.body);

      return successResponse(res, result, "Tạo lịch chiếu thành công");
    } catch (err) {
      next(err);
    }
  },

  layDanhSachPhongVe: async (req, res, next) => {
    try {
      const { ma_lich_chieu } = req.validated.query;

      const result = await datVeService.layDanhSachPhongVe(ma_lich_chieu);

      return successResponse(res, result, "Lấy danh sách phòng vé thành công");
    } catch (err) {
      next(err);
    }
  },
  datVe: async (req, res, next) => {
    try {
      const result = await datVeService.datVe(req);

      return successResponse(res, result, "Đặt vé thành công");
    } catch (err) {
      next(err);
    }
  },

  getLichSuDatVe: async (req, res, next) => {
    try {
      const tai_khoan = req.user.tai_khoan;

      const result = await datVeService.getLichSuDatVe(tai_khoan);

      return successResponse(res, result, "Lấy lịch sử đặt vé thành công");
    } catch (err) {
      next(err);
    }
  },
};
