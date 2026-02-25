import express from "express";
import { uploadMemory } from "../common/multer/memory.multer.js";
import { uploadController } from "../controllers/upload.controller.js";

export const uploadRouter = express.Router();

// UPLOAD ẢNH PHIM
uploadRouter.post(
  "/upload",
  uploadMemory.single("file"),
  uploadController.uploadImage,
);

uploadRouter.delete("/upload", uploadController.deleteImage);
