export function responseSuccess(data, message = "ok", statusCode = 200) {
  return {
    status: "Success",
    statusCode: statusCode,
    message: message,
    data: data,
    doc: "example.com",
  };
}
export function responseError(
  message = "Internal Server Error",
  statusCode = 500,
) {
  return {
    status: "error",
    statusCode: statusCode,
    message: message,
    doc: "example.com",
  };
}
