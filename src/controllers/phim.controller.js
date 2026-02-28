import { responseSuccess } from "../common/helpers/function.helper.js";
import { phimService } from "../services/phim.service.js";

export const phimController = {
  // GET LayDanhSachPhim
  getLayDanhSachPhim: async (req, res, next) => {
    try {
      const result = await phimService.getLayDanhSachPhim();
      const response = responseSuccess(result, `Lấy danh sách phim thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // GET LayDanhSachPhimPhanTrang
  getLayDanhSachPhimPhanTrang: async (req, res, next) => {
    try {
      const result = await phimService.getLayDanhSachPhimPhanTrang(req.query);
      const response = responseSuccess(
        result,
        `Lấy danh sách phim phân trang thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // GET LayThongTinPhim/:ma_phim
  getLayThongTinPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.params;
      const result = await phimService.getLayThongTinPhim(ma_phim);

      if (!result) {
        return res.status(404).json({ message: "Không tìm thấy phim" });
      }

      const response = responseSuccess(result, `Lấy thông tin phim thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // GET LayDanhSachPhimTheoNgay
  getLayDanhSachPhimTheoNgay: async (req, res, next) => {
    try {
      const { ngay } = req.query;

      const result = await phimService.getLayDanhSachPhimTheoNgay(ngay);

      const response = responseSuccess(
        result,
        `Lấy danh sách phim theo ngày thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // POST QuanLyPhim (ADMIN)
  themPhim: async (req, res, next) => {
    try {
      const result = await phimService.themPhim(req.body);
      const response = responseSuccess(result, `Tạo phim thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // DELETE XoaPhim/:ma_phim (ADMIN)
  delete: async (req, res, next) => {
    try {
      const { ma_phim } = req.params;

      const result = await phimService.delete(ma_phim);
      const response = responseSuccess(result, `Xóa phim thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // PUT CapNhatPhim/:ma_phim (ADMIN)
  capNhatPhim: async (req, res, next) => {
    try {
      const { ma_phim } = req.params;

      const result = await phimService.capNhatPhim(ma_phim, req.body);

      res.json({
        message: "Cập nhật phim thành công",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};
