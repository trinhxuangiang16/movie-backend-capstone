# Movie Booking Backend API

RESTful API backend service for the Movie Booking platform built with Node.js, Express.js, and Prisma ORM.

## Live API Documentation

Swagger UI: https://api-movie.trinhxuangiang.me/api-docs

## Feature Overview & API Modules

### 1. Authentication & User Management (/api/QuanLyNguoiDung)
- User registration, login, and JWT access token / refresh token management.
- User profile retrieval and profile update APIs.
- Admin user management with search, pagination, and role assignment (Admin / User).

### 2. Movie Catalog Management (/api/QuanLyPhim)
- Full CRUD operations for movies (title, trailer, description, release date, rating, status).
- Media asset uploads for movie posters and banners via Multer / Cloudinary integration.
- Pagination and filter endpoints (Now Showing, Coming Soon, Search by name).

### 3. Cinema Systems & Showtimes (/api/QuanLyRap)
- Hierarchy management: Cinema System -> Cinema Cluster -> Theater Rooms -> Seats.
- Showtime creation, scheduling, and query APIs by movie or cinema cluster.
- Real-time seat layout retrieval per showtime.

### 4. Ticket Booking Engine (/api/QuanLyDatVe)
- Real-time seat availability check and seat hold mechanism with expiration timer.
- Concurrent booking protection preventing double-booking of seats.
- Booking confirmation and ticket generation.
- User booking history retrieval APIs.

### 5. Combos & Snacks (/api/Combo)
- Food and beverage combo catalog management.
- Attachment of combos to ticket booking orders.

### 6. Payment & Automated Cleanup (/api/ThanhToan)
- Order checkout and payment integration.
- Background worker job (expireHoaDon) for automatically releasing unpaid expired seat holds and orders.

## Tech Stack

- Runtime: Node.js
- Framework: Express.js v5
- ORM: Prisma ORM (MariaDB / MySQL adapter)
- Authentication: Passport.js, JWT, bcrypt
- Validation: Zod
- Documentation: Swagger (swagger-jsdoc, swagger-ui-express)
- Utility: Helmet, Cors, Winston logger, Multer, Express Rate Limit

## Local Development Setup

Prerequisites:
- Node.js 18 or higher
- MariaDB or MySQL database

Steps:

1. Install dependencies:
   npm install

2. Create a .env file from .env.example:
   cp .env.example .env

3. Configure environment variables in .env:
   DATABASE_URL=mysql://user:password@localhost:3306/movie_db
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   TOKEN_QR_SECRET=your_qr_secret
   FE_ORIGIN=http://localhost:3000

4. Run database setup & migrations:
   npm run prisma

5. Seed initial data:
   npm run seed

6. Start development server:
   npm run dev

Server will run at http://localhost:3069 (or configured PORT).
Swagger documentation will be available at http://localhost:3069/api-docs.

## Scripts

- npm run dev: Start server with nodemon
- npm run start: Start server in production mode
- npm run prisma: Push schema changes and generate Prisma Client
- npm run seed: Seed database with initial data
- npm run seed:accounts: Seed test account data
