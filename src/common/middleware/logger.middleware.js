import morgan from "morgan";
import { logger } from "../../common/logger/logger.js";

morgan.token("user", (req) => {
  return req.user?.tai_khoan || "guest";
});

morgan.token("response-time-ms", (req, res) => {
  return `${morgan["response-time"](req, res)}ms`;
});

morgan.token("reqId", (req) => req.requestId);

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
