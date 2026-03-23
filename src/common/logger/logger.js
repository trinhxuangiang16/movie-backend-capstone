import { createLogger, format, transports as transports } from "winston";

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
