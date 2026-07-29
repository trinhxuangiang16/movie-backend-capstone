import { successResponse } from "../common/helpers/function.helper.js";
import { datVeService } from "../services/datVe.service.js";

export const datVeController = {
  layTrangThaiGheTrongRap: async (req, res, next) => {
    try {
      const { ma_lich_chieu } = req.validated.query;


      const result = await datVeService.layTrangThaiGheTrongRap(
        ma_lich_chieu,
        req.user?.tai_khoan,
      );

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
  taoDonChoThanhToan: async (req, res, next) => {
    try {
      const result = await datVeService.taoDonChoThanhToan(req);

      return successResponse(
        res,
        result,
        "Tạo đơn chờ thanh toán thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  layTrangThaiHoaDon: async (req, res, next) => {
    try {
      const { ma_hoa_don } = req.validated.query;
      const tai_khoan = req.user.tai_khoan;

      const result = await datVeService.layTrangThaiHoaDon(
        ma_hoa_don,
        tai_khoan,
      );

      return successResponse(res, result, "Lấy trạng thái hóa đơn thành công");
    } catch (err) {
      next(err);
    }
  },

  capVeTrucTiep: async (req, res, next) => {
    try {
      const result = await datVeService.capVeTrucTiep(req);

      return successResponse(res, result, "Cấp vé trực tiếp thành công");
    } catch (err) {
      next(err);
    }
  },

  huyGiaoDich: async (req, res, next) => {
    try {
      const { ma_hoa_don } = req.validated.body;
      const tai_khoan = req.user.tai_khoan;

      const result = await datVeService.huyGiaoDich(ma_hoa_don, tai_khoan);

      return successResponse(res, result, "Hủy giao dịch thành công");
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

  checkInVe: async (req, res, next) => {
    try {
      const { qr_token } = req.validated.body;

      const result = await datVeService.checkInVe(qr_token);

      return successResponse(res, result, "Check-in vé thành công");
    } catch (err) {
      next(err);
    }
  },
};
