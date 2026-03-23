import { randomUUID } from "crypto";

//Đây là middleware để gán một requestId duy nhất cho mỗi request, giúp dễ dàng theo dõi và debug trong log. Mỗi khi có một request đến, middleware này sẽ tạo ra một UUID mới và gán nó vào req.requestId, sau đó gọi next() để tiếp tục xử lý request.
export const requestIdMiddleware = (req, res, next) => {
  req.requestId = randomUUID().slice(0, 8);

  next();
};
