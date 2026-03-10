import jsonWebToken from "jsonwebtoken";

import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "../common/constant/app.contant.js";

//xử lý về token
export const tokenService = {
  // Tạo access token và refresh token
  createTokens(userId) {
    const accessToken = jsonWebToken.sign(
      { userId: userId },
      ACCESS_TOKEN_SECRET,
      {
        expiresIn: "10d",
      },
    ); //3 dự liệu trong sign: payload (thông tin userId), secret key (ACCESS_TOKEN_SECRET), options (expiresIn: thời gian hết hạn của token) dùng để tạo access token. Khi gọi hàm này sẽ trả về một access token đã được mã hóa chứa thông tin userId và có thời gian hết hạn là 10 ngày.

    const refreshToken = jsonWebToken.sign(
      { userId: userId },
      REFRESH_TOKEN_SECRET,
      {
        expiresIn: "11d",
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  // Xác minh access token
  verifyAccessToken(accessToken, option) {
    const decode = jsonWebToken.verify(
      accessToken,
      ACCESS_TOKEN_SECRET,
      option,
    ); //option: ignoreExpiration. Ngăn không kiểm tra hết hạn vì có thể đang làm mới token nên sẽ bỏ qua kiểm tra hết hạn.  Nhưng mình để "option," có nghĩa là sẽ truyền vào nếu có, nếu không có thì sẽ là undefined nên sẽ không ảnh hưởng gì đến việc xác minh token. Nếu có option thì sẽ sử dụng option đó, nếu không có thì sẽ sử dụng mặc định là không bỏ qua kiểm tra hết hạn.
    //decode là payload đã được giải mã từ token, trong đó sẽ có thông tin userId và các thông tin khác nếu có. Nếu token hợp lệ thì decode sẽ chứa thông tin userId, nếu token không hợp lệ hoặc đã hết hạn thì sẽ ném ra lỗi.
    console.log("🚀 ~ KIỂM TRA ~ decode:", decode);

    return decode;
  },

  // Xác minh refresh token
  verifyRefreshToken(refreshToken) {
    const decode = jsonWebToken.verify(refreshToken, REFRESH_TOKEN_SECRET);

    return decode;
  },
};
