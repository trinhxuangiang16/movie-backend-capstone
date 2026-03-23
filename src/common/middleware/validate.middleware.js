import { ZodError } from "zod";
import { formatZodError } from "../helpers/zod.helper.js";
import { errorResponse } from "../helpers/function.helper.js";
import { statusCodes } from "../helpers/status-code.helper.js";

export const validateAll = (schemas) => {
  return (req, res, next) => {
    try {
      req.validated = req.validated || {};

      if (schemas.body) {
        req.validated.body = schemas.body.parse(req.body);
      }

      if (schemas.query) {
        req.validated.query = schemas.query.parse(req.query);
      }

      if (schemas.params) {
        req.validated.params = schemas.params.parse(req.params);
      }

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return errorResponse(
          res,
          "Dữ liệu không hợp lệ",
          statusCodes.BAD_REQUEST,
          "VALIDATION_ERROR",
          formatZodError(err),
        );
      }
      next(err);
    }
  };
};
