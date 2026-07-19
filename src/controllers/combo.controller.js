import { successResponse } from "../common/helpers/function.helper.js";
import { comboService } from "../services/combo.service.js";

export const comboController = {
  getDanhSachCombo: async (req, res, next) => {
    try {
      const result = await comboService.getDanhSachCombo();

      return successResponse(res, result, "Lấy danh sách combo thành công");
    } catch (err) {
      next(err);
    }
  },
};
