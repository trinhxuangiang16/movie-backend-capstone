import "dotenv/config";
//dotenv đã đc cài sẵn trong prisma

export const DATABASE_URL = process.env.DATABASE_URL;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

export const SERVER_SWAGGER = process.env.SERVER_SWAGGER;

export const FOLDER_IMAGE = "public/images";
export const FOLDER_AVATAR = "public/avatars";

// VietQR — nhận thanh toán đặt vé
export const BANK_BIN = process.env.BANK_BIN;
export const BANK_ACCOUNT_NO = process.env.BANK_ACCOUNT_NO;
export const BANK_ACCOUNT_NAME = process.env.BANK_ACCOUNT_NAME;

// Webhook thanh toán (SePay/Casso gọi vào với header Authorization: Apikey <key>)
export const PAYMENT_WEBHOOK_API_KEY = process.env.PAYMENT_WEBHOOK_API_KEY;
export const PAYMENT_ORDER_EXPIRE_MINUTES = Number(
  process.env.PAYMENT_ORDER_EXPIRE_MINUTES || 5,
);

console.log(
  "\n",
  {
    DATABASE_URL: DATABASE_URL,
    ACCESS_TOKEN_SECRET: ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: REFRESH_TOKEN_SECRET,
    CLOUDINARY_NAME: CLOUDINARY_NAME,
    CLOUDINARY_KEY: CLOUDINARY_KEY,
    CLOUDINARY_SECRET: CLOUDINARY_SECRET,
    FOLDER_IMAGE: FOLDER_IMAGE,
    FOLDER_AVATAR: FOLDER_AVATAR,
    SERVER_SWAGGER: SERVER_SWAGGER,
    ADMIN_PASSWORD: ADMIN_PASSWORD,
  },
  "\n",
);
