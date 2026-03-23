import { successResponse } from "../common/helpers/function.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  async register(req, res, next) {
    try {
      const result = await authService.register(req);
      return successResponse(res, result, "Đăng ký thành công");
    } catch (err) {
      next(err);
    }
  },
  async login(req, res, next) {
    try {
      const result = await authService.login(req);
      return successResponse(res, result, "Đăng nhập thành công");
    } catch (err) {
      next(err);
    }
  },

  async getInfo(req, res, next) {
    try {
      console.log("getinfo", req.user);
      const result = await authService.getInfo(req);
      return successResponse(
        res,
        result,
        "Lấy thông tin người dùng thành công",
      );
    } catch (err) {
      next(err);
    }
  },
  // đây là callback sau khi google auth xong. Trên FE chia 2 phân. 1 phân lây token, 1 phân lây thống tin user. Trên FE chia 2 phân. 1 phân lây token, 1 phân lây thống tin user
  async googleCallback(req, res, next) {
    try {
      const result = await authService.googleCallback(req);

      res.redirect(result);
    } catch (err) {
      next(err);
    }
  },

  async refreshToken(req, res, next) {
    try {
      const result = await authService.refreshToken(req);
      return successResponse(res, result, "Refresh token thành công");
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const result = await authService.create(req);
      return successResponse(res, result, "Tạo người dùng thành công");
    } catch (err) {
      next(err);
    }
  },

  async findAll(req, res, next) {
    try {
      const result = await authService.findAll(req);
      return successResponse(res, result, "Lấy tất cả người dùng thành công");
    } catch (err) {
      next(err);
    }
  },

  async findOne(req, res, next) {
    try {
      const result = await authService.findOne(req);
      return successResponse(
        res,
        result,
        `Lấy thông tin người dùng  thành công`,
      );
    } catch (err) {
      next(err);
    }
  },

  async findOne(req, res, next) {
    try {
      const result = await authService.findOne(req);
      const response = responseSuccess(
        result,
        `Lấy thông tin người dùng thành công`,
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await authService.remove(req);
      return successResponse(res, result, `Xóa người dùng thành công`);
    } catch (err) {
      next(err);
    }
  },
};
