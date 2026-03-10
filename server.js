import cors from "cors";
import express from "express";
import { NotFountException } from "./src/common/helpers/exception.helper.js";
import { appError } from "./src/common/helpers/handle-error-helper.js";
import rootRouter from "./src/routers/root.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";

const app = express();

//MIDDLEWARE
app.use(express.static("./public")); //này để phục vụ file tĩnh (như ảnh, css, js) từ thư mục public
app.use(express.json()); //này để parse JSON body của request

// Mở CORS cho tất cả (cho dễ deploy)
app.use(cors());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend API running",
  });
});

//API
app.use("/api", rootRouter);

//LOG + NOT FOUND
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl, req.ip);
  throw new NotFountException();
}); //nếu không có route nào khớp, sẽ ném lỗi NotFoundException để được xử lý bởi appError

//ERROR HANDLER
app.use(appError); //này để xử lý tất cả lỗi được ném ra trong các route hoặc middleware trước đó, sẽ trả về response lỗi phù hợp cho client

//PORT FOR DEPLOY
const PORT = process.env.PORT || 3069;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port:", PORT);
});
