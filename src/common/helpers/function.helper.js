export const successResponse = (
  res,
  data,
  message = "Success",
  statusCode = 200,
  meta = null,
) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
    ...(meta && { meta }),
  });
};

export const errorResponse = (
  res,
  message = "Internal Server Error",
  statusCode = 500,
  code = "INTERNAL_ERROR",
  errors = null,
) => {
  return res.status(statusCode).json({
    status: "error",
    message,
    code,
    ...(errors && { errors }),
  });
};
