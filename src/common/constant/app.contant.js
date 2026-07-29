import "dotenv/config";

export const DATABASE_URL = process.env.DATABASE_URL;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

export const SERVER_SWAGGER = process.env.SERVER_SWAGGER;

export const BANK_BIN = process.env.BANK_BIN;
export const BANK_ACCOUNT_NO = process.env.BANK_ACCOUNT_NO;
export const BANK_ACCOUNT_NAME = process.env.BANK_ACCOUNT_NAME;
export const TOKEN_QR_SECRET = process.env.TOKEN_QR_SECRET;

export const PAYMENT_WEBHOOK_API_KEY = process.env.PAYMENT_WEBHOOK_API_KEY;
export const PAYMENT_ORDER_EXPIRE_MINUTES = Number(
  process.env.PAYMENT_ORDER_EXPIRE_MINUTES || 5,
);

export const SEAT_HOLD_EXPIRE_SECONDS = Number(
  process.env.SEAT_HOLD_EXPIRE_SECONDS || 300,
);

export const MAX_SEATS_PER_HOLD = Number(process.env.MAX_SEATS_PER_HOLD || 8);
