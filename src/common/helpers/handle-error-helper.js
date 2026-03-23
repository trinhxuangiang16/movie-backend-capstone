import jwt from "jsonwebtoken";
import { errorResponse } from "../helpers/function.helper.js";
import { statusCodes } from "./status-code.helper.js";
import { logger } from "../logger/logger.js";

export const appError = (err, req, res, next) => {
  //Ghi log lỗi với thông tin requestId, method, originalUrl và message lỗi. Điều này giúp dễ dàng theo dõi và debug lỗi trong hệ thống log của ứng dụng.
  logger.error(
    `[reqId:${req.requestId}] ${req.method} ${req.originalUrl} - ${err.message}`,
  );

  // Multer
  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return errorResponse(
      res,
      "Unexpected field",
      statusCodes.BAD_REQUEST,
      "INVALID_FILE",
    );
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return errorResponse(
      res,
      "File too large",
      statusCodes.BAD_REQUEST,
      "FILE_TOO_LARGE",
    );
  }

  //Do err luôn luôn là class. nên lỗi jwt.JsonWebTokenError được quăng ra cũng là class và jwt.JsonWebTokenError đóng vai trò là 1 instance của err nên:

  // JWT
  if (err instanceof jwt.JsonWebTokenError) {
    return errorResponse(
      res,
      "Invalid token",
      statusCodes.UNAUTHORIZED,
      "INVALID_TOKEN",
    ); //401 => FE logout ng dùng
    //Đây là nhóm lỗi về token jwt.JsonWebTokenError
  }
  if (err instanceof jwt.TokenExpiredError) {
    return errorResponse(
      res,
      "Token expired",
      statusCodes.FORBIDDEN,
      "TOKEN_EXPIRED",
    ); //403 => FE sẽ họi api/auth/refresh-token
  }

  //Kiểm tra xem code có undefine không. Nếu ko có thì giá trị statusCode sẽ về mặc định là 500
  console.log("code", err.code);

  const statusCode = err.statusCode || statusCodes.INTERNAL_SERVER_ERROR;

  return errorResponse(
    res,
    err.message || "Internal Server Error",
    statusCode,
    err.code || "INTERNAL_ERROR",
  );
};
