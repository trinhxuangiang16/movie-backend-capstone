import bcrypt from "bcrypt";
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/contect.prisma.js";
import { tokenService } from "./token.service.js";

export const authService = {
  register: async (req) => {
    const { email, mat_khau, ho_ten, so_dt } = req.validated.body;

    const userExist = await prisma.nguoiDung.findUnique({
      where: { email },
    });

    if (userExist) {
      throw new ConflictException("Email đã tồn tại");
    }

    const hashPassword = bcrypt.hashSync(mat_khau, 10);

    return prisma.nguoiDung.create({
      data: {
        email,
        mat_khau: hashPassword,
        ho_ten,
        so_dt,
        loai_nguoi_dung: "USER",
      },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  async login(req) {
    const { email, mat_khau } = req.validated.body;

    const userExist = await prisma.nguoiDung.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExist) {
      throw new UnauthorizedException("Email hoặc mật khẩu không đúng");
    }

    if (!userExist.mat_khau) {
      throw new InternalServerErrorException("Tài khoản lỗi dữ liệu");
    }

    const isPassword = bcrypt.compareSync(mat_khau, userExist.mat_khau);

    if (!isPassword) {
      throw new UnauthorizedException("Email hoặc mật khẩu không đúng");
    }

    // Loại bỏ trường mật khẩu trước khi trả về thông tin người dùng
    const { mat_khau: _, ...userWithoutPassword } = userExist;

    const tokens = tokenService.createTokens(userExist.tai_khoan);

    return { user: userWithoutPassword, token: tokens };
  },

  async getInfo(req) {
    const { mat_khau, ...userWithoutPassword } = req.user;
    if (!userWithoutPassword) {
      throw new NotFoundException("Không tìm thấy người dùng");
    }
    return userWithoutPassword;
  },

  async refreshToken(req) {
    const { accessToken, refreshToken } = req.validated.body;

    if (!accessToken || !refreshToken) {
      throw new BadRequestException("Thiếu accessToken hoặc refreshToken");
    }

    const decodeAccessToken = tokenService.verifyAccessToken(accessToken, {
      ignoreExpiration: true,
    });

    const decodeRefreshToken = tokenService.verifyRefreshToken(refreshToken);

    if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
      throw new UnauthorizedException("Làm mới token không thành công");
    }

    const userExist = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: decodeRefreshToken.userId },
    });

    if (!userExist) {
      throw new UnauthorizedException("Không tìm thấy người dùng");
    }

    const tokens = tokenService.createTokens(userExist.tai_khoan);

    return tokens;
  },
};
