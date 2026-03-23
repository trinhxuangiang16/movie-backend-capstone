import swaggerJsdoc from "swagger-jsdoc";
import { SERVER_SWAGGER } from "../common/constant/app.contant.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Booking Backedend API",
      version: "2.1.0",
      description: "Tài liệu API cho dự án đặt vé xem phim",
    },
    servers: [
      {
        url: SERVER_SWAGGER,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routers/*.js"], // QUÉT FILE ROUTES
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
