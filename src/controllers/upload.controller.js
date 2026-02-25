import {
  BadRequestException,
  InternalServerErrorException,
} from "../common/helpers/exception.helper.js";
import { uploadService } from "../services/upload.service.js";

export const uploadController = {
  uploadImage: async (req, res) => {
    try {
      if (!req.file) {
        throw new BadRequestException("Không có file nào được upload");
      }

      const folder = req.query.type || "common";

      const result = await uploadService.uploadImage(req.file.buffer, folder);

      res.json({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (err) {
      if (err.code) {
        throw err;
      }

      throw new InternalServerErrorException(
        "Lỗi khi upload ảnh: " + err.message,
      );
    }
  },

  deleteImage: async (req, res) => {
    try {
      const { public_id } = req.body;

      if (!public_id) {
        throw new BadRequestException("public_id là bắt buộc để xóa ảnh");
      }

      const result = await uploadService.deleteImage(public_id);

      res.json({
        message: "Xóa ảnh cũ thành công",
        result,
      });
    } catch (err) {
      if (err.code) {
        throw err;
      }

      throw new InternalServerErrorException("Lỗi khi xóa ảnh: " + err.message);
    }
  },
};
