import express from "express";
import { uploadMemory } from "../common/multer/memory.multer.js";
import { uploadController } from "../controllers/upload.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";

export const uploadRouter = express.Router();

// UPLOAD ẢNH PHIM
uploadRouter.post(
  "/upload",
  protect,
  uploadMemory.single("file"),
  uploadController.uploadImage,
);

uploadRouter.delete("/upload", protect, uploadController.deleteImage);
