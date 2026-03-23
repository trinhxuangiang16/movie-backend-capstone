import { statusCodes } from "./status-code.helper.js";

export class BadRequestException extends Error {
  constructor(message = "Bad Request") {
    super(message);
    this.statusCode = statusCodes.BAD_REQUEST;
    this.code = "BAD_REQUEST";
  }
}

//401: yều cầu FE logout
export class UnauthorizedException extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.statusCode = statusCodes.UNAUTHORIZED;
    this.code = "UNAUTHORIZED";
  }
}

//404: không tìm thấy
export class NotFoundException extends Error {
  constructor(message = "Not Found") {
    super(message);
    this.statusCode = statusCodes.NOT_FOUND;
    this.code = "NOT_FOUND";
  }
}

//403: FE yêu cầu làm mới accessToken
export class ForbiddenException extends Error {
  constructor(message = "Forbidden") {
    super(message);
    this.statusCode = statusCodes.FORBIDDEN;
    this.code = "FORBIDDEN";
  }
}

export class InternalServerErrorException extends Error {
  constructor(message = "Internal Server Error") {
    super(message);
    this.statusCode = statusCodes.INTERNAL_SERVER_ERROR;
    this.code = "INTERNAL_SERVER_ERROR";
  }
}

export class ConflictException extends Error {
  constructor(message = "Conflict") {
    super(message);
    this.statusCode = statusCodes.CONFLICT;
    this.code = "CONFLICT";
  }
}
