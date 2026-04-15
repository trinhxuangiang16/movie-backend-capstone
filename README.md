# Movie Booking Backend API

Backend REST API cho hệ thống đặt vé xem phim (movie booking). Mục tiêu dự án: mô phỏng bài toán backend thực tế gồm auth, quản lý phim/rạp/lịch chiếu, đặt vé chống trùng ghế, upload hình ảnh và tài liệu API.

## Tech Stack

- **Node.js** + **Express**
- **Prisma ORM** + **MariaDB adapter** (`@prisma/adapter-mariadb`)
- **Auth**: JWT (Access Token + Refresh Token), `passport-jwt`
- **Security**: `bcrypt`
- **Validation**: `zod`
- **API Docs**: Swagger (`swagger-jsdoc`, `swagger-ui-express`)
- **Logging/Tracing**: `winston`, request logging middleware + requestId
- **Upload**: `multer` + Cloudinary
- **Utilities**: `dotenv`, `cors`, `morgan`, `dayjs`

## Features / API Modules

- **Auth & Account**
  - Đăng ký / Đăng nhập
  - Lấy thông tin tài khoản (Bearer token)
  - Refresh access token
- **Users**
  - Các API quản lý người dùng (tùy scope)
- **Movies**
  - Danh sách/chi tiết phim, CRUD (tùy scope)
  - Upload hình ảnh phim (Cloudinary)
- **Cinemas & Showtimes**
  - Hệ thống rạp / cụm rạp / lịch chiếu (tùy scope)
- **Booking**
  - Đặt vé theo lịch chiếu + danh sách ghế
  - Xử lý conflict khi ghế đã đặt / đang được giữ chỗ (seat-hold theo `expire_at`)
  - Business logic tính giá vé theo loại ghế (ví dụ VIP)

## Highlights

- Tổ chức code theo mô hình **Router / Controller / Service**.
- Áp dụng **transaction** trong nghiệp vụ đặt vé để đảm bảo tính nhất quán dữ liệu và xử lý đồng thời.
- Chuẩn hóa validate request bằng **Zod** và error handling tập trung.
- Document API bằng **Swagger** + có sẵn **Postman collection** để test nhanh.

## Artifacts

- Postman collection: `MOVIE-BOOKING-BACKEND.postman_collection.json`

## Notes

- Repo public nhằm mục đích showcase **code & kỹ năng backend**. Không public cấu hình môi trường/credentials.
