import { randomUUID } from "crypto";

export const requestIdMiddleware = (req, res, next) => {
  req.requestId = randomUUID().slice(0, 8);

  next();
};
