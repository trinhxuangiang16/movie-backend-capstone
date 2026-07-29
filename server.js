import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { NotFoundException } from "./src/common/helpers/exception.helper.js";
import { appError } from "./src/common/helpers/handle-error-helper.js";
import rootRouter from "./src/routers/root.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";
import { requestLogger } from "./src/common/middleware/logger.middleware.js";
import { requestIdMiddleware } from "./src/common/middleware/requestId.middleware.js";
import { startExpireHoaDonJob } from "./src/jobs/expireHoaDon.job.js";
import { prisma } from "./src/common/prisma/contect.prisma.js";

const app = express();

const trustProxy = process.env.TRUST_PROXY;

if (trustProxy && trustProxy !== "false") {
  const hops = trustProxy === "true" ? 1 : Number.parseInt(trustProxy, 10);

  if (Number.isInteger(hops) && hops >= 1) {
    app.set("trust proxy", hops);
    console.log(`[server] trust proxy = ${hops} hop`);
  } else {
    console.warn(
      `[server] TRUST_PROXY="${trustProxy}" không hợp lệ (cần số nguyên >= 1) — bỏ qua.`,
    );
  }
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

app.use(
  cors({
    origin: process.env.FE_ORIGIN?.split(",").map((o) => o.trim()),
    credentials: true,
  }),
);

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(["/api-docs", "/api/api-docs"], swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//  Docker
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend API running",
  });
});

//  Docker
app.get("/health", async (req, res) => {
  try {

    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({
      status: "UP",
      database: "CONNECTED",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(503).json({
      status: "DOWN",
      database: "DISCONNECTED",
      error: error.message,
    });
  }
});

app.use(requestIdMiddleware);
app.use(requestLogger);

app.use("/api", rootRouter);

app.use((req, res, next) => {
  throw new NotFoundException();
});

app.use(appError);

const PORT = process.env.PORT || 3069;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port:", PORT);
  startExpireHoaDonJob();
});


//  Docker

const gracefulShutdown = (signal) => {
  console.log(`\n[server] Nhận tín hiệu ${signal}. Đang đóng HTTP Server...`);

  server.close(async () => {
    console.log("[server] Đã đóng HTTP Server (ngừng nhận request mới).");
    try {
      console.log("[server] Đang ngắt kết nối Prisma Database Pool...");
      await prisma.$disconnect();
      console.log("[server] Đã ngắt kết nối Database hoàn tất. Exit 0.");
      process.exit(0);
    } catch (err) {
      console.error("[server] Lỗi khi ngắt kết nối Database:", err);
      process.exit(1);
    }
  });

  //Docker
  setTimeout(() => {
    console.error("[server] Quá thời gian chờ (10s), cưỡng chế tắt tiến trình!");
    process.exit(1);
  }, 10000);
};

// Docker
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
