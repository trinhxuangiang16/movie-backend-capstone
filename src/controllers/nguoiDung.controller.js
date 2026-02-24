import { responseSuccess } from "../common/helpers/function.helper.js";
import { nguoiDungService } from "../services/nguoiDung.service.js";

export const nguoiDungController = {
  getLayDanhSachNguoiDung: async (req, res, next) => {
    try {
      const result = await nguoiDungService.getLayDanhSachNguoiDung();
      const response = responseSuccess(
        result,
        `Lấy danh sách người dùng thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getLayDanhSachNguoiDungPhanTrang: async (req, res, next) => {
    try {
      const result = await nguoiDungService.getLayDanhSachNguoiDungPhanTrang(
        req.query,
      );
      const response = responseSuccess(
        result,
        `Lấy danh sách người dùng phân trang thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  timKiemNguoiDung: async (req, res, next) => {
    try {
      const { keyword } = req.query;
      const result = await nguoiDungService.timKiemNguoiDung(keyword);
      const response = responseSuccess(
        result,
        `Tìm kiếm người dùng thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  capNhatNguoiDung: async (req, res, next) => {
    try {
      const { tai_khoan } = req.params;
      const result = await nguoiDungService.capNhatNguoiDung(
        tai_khoan,
        req.body,
      );
      const response = responseSuccess(
        result,
        `Cập nhật người dùng thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  xoaNguoiDung: async (req, res, next) => {
    try {
      const { tai_khoan } = req.params;
      const result = await nguoiDungService.xoaNguoiDung(tai_khoan);
      const response = responseSuccess(result, `Xóa người dùng thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
