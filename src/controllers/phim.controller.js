import { successResponse } from "../common/helpers/function.helper.js";
import { phimService } from "../services/phim.service.js";

export const phimController = {
  getLayDanhSachPhim: async (req, res, next) => {
    try {
      const result = await phimService.getLayDanhSachPhim();
      return successResponse(res, result, "Lấy danh sách phim thành công");
    } catch (err) {
      next(err);
    }
  },

  getLayDanhSachPhimPhanTrang: async (req, res, next) => {
    try {
      const result = await phimService.getLayDanhSachPhimPhanTrang(
        req.validated.query,
      );
      return successResponse(
        res,
        result,
        "Lấy danh sách phim phân trang thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getLayThongTinPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.validated.params;
      const result = await phimService.getLayThongTinPhim(ma_phim);

      return successResponse(res, result, "Lấy thông tin phim thành công");
    } catch (err) {
      next(err);
    }
  },

  getLayDanhSachPhimTheoNgay: async (req, res, next) => {
    try {
      const { ngay } = req.validated.query;

      const result = await phimService.getLayDanhSachPhimTheoNgay(ngay);

      return successResponse(
        res,
        result,
        "Lấy danh sách phim theo ngày thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  themPhim: async (req, res, next) => {
    try {
      const result = await phimService.themPhim(req.validated.body);
      return successResponse(res, result, "Tạo phim thành công");
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { ma_phim } = req.validated.params;

      const result = await phimService.delete(ma_phim);
      return successResponse(res, result, "Xóa phim thành công");
    } catch (err) {
      next(err);
    }
  },

  capNhatPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.validated.params;

      const result = await phimService.capNhatPhim(ma_phim, req.validated.body);

      return successResponse(res, result, "Cập nhật phim thành công");
    } catch (err) {
      next(err);
    }
  },

  getPhimDangChieu: async (req, res, next) => {
    try {
      const result = await phimService.getPhimDangChieu();

      return successResponse(
        res,
        result,
        "Lấy danh sách phim đang chiếu thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getPhimSapChieu: async (req, res, next) => {
    try {
      const result = await phimService.getPhimSapChieu();

      return successResponse(
        res,
        result,
        "Lấy danh sách phim sắp chiếu thành công",
      );
    } catch (err) {
      next(err);
    }
  },

  getPhimHot: async (req, res, next) => {
    try {
      const result = await phimService.getPhimHot();

      return successResponse(res, result, "Lấy danh sách phim hot thành công");
    } catch (err) {
      next(err);
    }
  },

  getBanner: async (req, res, next) => {
    try {
      const { ma_phim } = req.validated.params;

      const result = await phimService.getBanner(ma_phim);

      return successResponse(res, result, "Lấy banner phim thành công");
    } catch (err) {
      next(err);
    }
  },
};
