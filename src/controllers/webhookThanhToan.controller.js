import { xuLyWebhookThanhToan } from "../services/webhookThanhToan.service.js";
import { logger, serializeError } from "../common/logger/logger.js";

export const webhookThanhToanController = {
  xuLyWebhook: async (req, res) => {
    try {
      const result = await xuLyWebhookThanhToan(req);
      return res.status(200).json(result);
    } catch (err) {
      logger.error("[webhookThanhToan] Lỗi hạ tầng, yêu cầu retry", {
        requestId: req.requestId,
        error: serializeError(err),
      });
      return res.status(500).json({ success: false });
    }
  },
};
