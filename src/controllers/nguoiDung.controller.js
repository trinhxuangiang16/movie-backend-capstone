import { successResponse } from "../common/helpers/function.helper.js";
import { nguoiDungService } from "../services/nguoiDung.service.js";

export const nguoiDungController = {
  getLayDanhSachNguoiDung: async (req, res, next) => {
    try {
      const result = await nguoiDungService.getLayDanhSachNguoiDung();
      return successResponse(
        res,
        result,
        "Lấy danh sách người dùng thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getLayDanhSachNguoiDungPhanTrang: async (req, res, next) => {
    try {
      const result = await nguoiDungService.getLayDanhSachNguoiDungPhanTrang(
        req.validated.query,
      );
      return successResponse(
        res,
        result,
        "Lấy danh sách người dùng phân trang thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  timKiemNguoiDung: async (req, res, next) => {
    try {
      const { keyword } = req.query;

      const result = await nguoiDungService.timKiemNguoiDung(keyword);

      return successResponse(res, result, "Tìm kiếm người dùng thành công");
    } catch (err) {
      next(err);
    }
  },

  capNhatNguoiDung: async (req, res, next) => {
    try {
      const result = await nguoiDungService.capNhatNguoiDung(
        req.user.tai_khoan,
        req.validated.body,
      );

      return successResponse(res, result, "Cập nhật người dùng thành công");
    } catch (err) {
      next(err);
    }
  },

  xoaNguoiDung: async (req, res, next) => {
    try {
      const { tai_khoan } = req.params;

      const result = await nguoiDungService.xoaNguoiDung(tai_khoan);

      return successResponse(res, result, "Xóa người dùng thành công");
    } catch (err) {
      next(err);
    }
  },
};
