import cloudinary from "../common/cloudinary/cloudinary.js";
import streamifier from "streamifier";

export const uploadService = {
  taiAnhLenCloudinary: async (fileBuffer, folder) => {
    return await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: `movie-app/${folder}`,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );

      streamifier.createReadStream(fileBuffer).pipe(stream);
    });
  },
  xoaAnhCloudinary: async (publicId) => {
    return await cloudinary.uploader.destroy(publicId);
  },
};
