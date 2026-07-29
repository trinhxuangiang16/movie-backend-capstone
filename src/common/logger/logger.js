import { createLogger, format, transports as transports } from "winston";

export const maskEmail = (email) => {
  if (!email || typeof email !== "string") return null;

  const [name, domain] = email.split("@");
  if (!name || !domain) return "[invalid-email]";

  const visible = name.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(name.length - 2, 3))}@${domain}`;
};

export const serializeError = (error) => {
  if (!error) return null;

  return {
    name: error.name,
    message: error.message,
    code: error.code,
  };
};

//tạo logger với cấu hình cơ bản, sẽ ghi log vào file error.log nếu level là error, và ghi tất cả log vào combined.log
export const logger = createLogger({
  level: "info",

  format: format.json(),

  // defaultMeta: { service: "movie-backend" },

  transports: [
    new transports.File({
      filename: "./src/common/logger/error.log",
      level: "error",
    }),

    new transports.File({
      filename: "./src/common/logger/combined.log",
    }),
    new transports.Console(),
  ],
});

//nếu đang chạy ở môi trường development, sẽ thêm transport để ghi log ra console với định dạng đơn giản
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}
