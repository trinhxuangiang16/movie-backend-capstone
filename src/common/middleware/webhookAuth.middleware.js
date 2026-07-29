import { PAYMENT_WEBHOOK_API_KEY } from "../constant/app.contant.js";
import { ghiLogWebhookSaiSecret } from "../../services/webhookThanhToan.service.js";

export const webhookAuth = async (req, res, next) => {
  const authorization = req.headers.authorization || "";
  const [type, key] = authorization.split(" ");

  const hopLe =
    type === "Apikey" && key && PAYMENT_WEBHOOK_API_KEY && key === PAYMENT_WEBHOOK_API_KEY;

  if (!hopLe) {
    await ghiLogWebhookSaiSecret(req.body);
    return res.status(401).json({ success: false, message: "Sai apikey" });
  }

  next();
};
