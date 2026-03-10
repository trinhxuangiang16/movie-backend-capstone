import { tokenService } from "../../services/token.service.js";
import { UnauthorizedException } from "../helpers/exception.helper.js";
import { prisma } from "../prisma/contect.prisma.js";

export const protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({ message: "Không có authorization" });
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      return res.status(401).json({ message: "Token không phải Bearer" });
    }

    if (!token) {
      return res.status(401).json({ message: "Không có token" });
    }

    const { userId } = tokenService.verifyAccessToken(token);

    const userExist = await prisma.nguoiDung.findUnique({
      where: { tai_khoan: userId },
    });

    if (!userExist) {
      return res.status(401).json({ message: "Không tìm thấy user" });
    }

    req.user = userExist;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token không hợp lệ hoặc hết hạn" });
  }
};

export const mustBeAdmin = (...roles) => {
  return (req, res, next) => {
    //kiểm tra được loai_nguoi_dung của user có nằm trong roles hay không là do req.user đã được gán ở middleware protect rồi. Nếu chưa có req.user thì sẽ bị lỗi ở middleware protect trước khi đến đây
    if (!roles.includes(req.user.loai_nguoi_dung)) {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }
    next();
  };
};
