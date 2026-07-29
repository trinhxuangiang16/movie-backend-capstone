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

const defaultOrigins = [
  "https://trinhxuangiang.me",
  "https://www.trinhxuangiang.me",
  "http://localhost:3000",
  "http://104.46.219.122:3000",
];

const envOrigins = process.env.FE_ORIGIN?.split(",").map((o) => o.trim()) || [];
const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        allowedOrigins.includes("*") ||
        origin.endsWith("trinhxuangiang.me") ||
        origin.includes("localhost")
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
  customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css",
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.js",
  ],
};

app.use(
  ["/api-docs", "/api/api-docs"],
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerOptions),
);

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
