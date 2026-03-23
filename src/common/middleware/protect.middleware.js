import { tokenService } from "../../services/token.service.js";
import { errorResponse } from "../helpers/function.helper.js";
import { statusCodes } from "../helpers/status-code.helper.js";
import { prisma } from "../prisma/contect.prisma.js";

export const protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return errorResponse(
        res,
        "Không có authorization",
        statusCodes.UNAUTHORIZED,
        "UNAUTHORIZED",
      );
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      return errorResponse(
        res,
        "Token không phải Bearer",
        statusCodes.UNAUTHORIZED,
        "UNAUTHORIZED",
      );
    }

    if (!token) {
      return errorResponse(
        res,
        "Không có token",
        statusCodes.UNAUTHORIZED,
        "UNAUTHORIZED",
      );
    }

    const { userId } = tokenService.verifyAccessToken(token);

    const userExist = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: userId },
    });

    if (!userExist) {
      return errorResponse(
        res,
        "Không tìm thấy user",
        statusCodes.UNAUTHORIZED,
        "UNAUTHORIZED",
      );
    }

    req.user = userExist;

    next();
  } catch (err) {
    return errorResponse(
      res,
      "Token không hợp lệ hoặc hết hạn",
      statusCodes.UNAUTHORIZED,
      "UNAUTHORIZED",
    );
  }
};

export const mustBeAdmin = (...roles) => {
  return (req, res, next) => {
    //kiểm tra được loai_nguoi_dung của user có nằm trong roles hay không là do req.user đã được gán ở middleware protect rồi. Nếu chưa có req.user thì sẽ bị lỗi ở middleware protect trước khi đến đây
    if (!roles.includes(req.user.loai_nguoi_dung)) {
      return errorResponse(
        res,
        "Không có quyền truy cập",
        statusCodes.FORBIDDEN,
        "FORBIDDEN",
      );
    }
    next();
  };
};
