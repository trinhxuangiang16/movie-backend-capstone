import jsonWebToken from "jsonwebtoken";
import { randomUUID } from "crypto";

import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  TOKEN_QR_SECRET,
} from "../common/constant/app.contant.js";

export const tokenService = {
  createTokens(userId) {
    const accessToken = jsonWebToken.sign(
      { userId: userId, jti: randomUUID() },
      ACCESS_TOKEN_SECRET,
      {
        expiresIn: "7d",
      },
    );

    const refreshToken = jsonWebToken.sign(
      { userId: userId, jti: randomUUID() },
      REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken(accessToken, option) {
    const decode = jsonWebToken.verify(
      accessToken,
      ACCESS_TOKEN_SECRET,
      option,
    );

    return decode;
  },

  verifyRefreshToken(refreshToken) {
    const decode = jsonWebToken.verify(refreshToken, REFRESH_TOKEN_SECRET);

    return decode;
  },

  createQrTicketToken(ma_hoa_don, tai_khoan, ngay_gio_chieu) {
    const expBuffer = 3 * 60 * 60;
    const expiresInSec =
      Math.floor(new Date(ngay_gio_chieu).getTime() / 1000) +
      expBuffer -
      Math.floor(Date.now() / 1000);

    if (expiresInSec <= 0) return null;

    return jsonWebToken.sign({ ma_hoa_don, tai_khoan }, TOKEN_QR_SECRET, {
      expiresIn: expiresInSec,
    });
  },

  verifyQrTicketToken(qrToken) {
    return jsonWebToken.verify(qrToken, TOKEN_QR_SECRET);
  },
};
