import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Booking Backedend API",
      version: "1.0.0",
      description: "Tài liệu API cho dự án đặt vé xem phim",
    },
    servers: [
      {
        url: "http://localhost:3069/api",
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
