import morgan from "morgan";
import { logger } from "../../common/logger/logger.js";

morgan.token("user", (req) => {
  return req.user?.tai_khoan || "guest";
});

morgan.token("response-time-ms", (req, res) => {
  return `${morgan["response-time"](req, res)}ms`;
});

morgan.token("reqId", (req) => req.requestId);

//stream này sẽ được morgan sử dụng để ghi log, mỗi khi có một request đến, morgan sẽ gọi stream.write với message log đã được format theo định dạng đã chỉ định ở dưới, sau đó logger.info sẽ ghi log đó vào hệ thống log của ứng dụng (có thể là console hoặc file tùy cấu hình của logger).
const stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

export const requestLogger = morgan(
  "[reqId::reqId] :method :url :status :response-time-ms :remote-addr user::user",
  {
    stream,
  },
);
