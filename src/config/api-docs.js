// ============================================================================
// 1. QUẢN LÝ NGƯỜI DÙNG & AUTH ROUTE (QuanLyNguoiDung)
// ============================================================================

/**
 * @swagger
 * /QuanLyNguoiDung/DangKy:
 *   post:
 *     summary: Đăng ký tài khoản
 *     tags:
 *       - QuanLyNguoiDung
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mat_khau
 *             properties:
 *               ho_ten:
 *                 type: string
 *               email:
 *                 type: string
 *               so_dt:
 *                 type: string
 *               mat_khau:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng ký thành công
 *       400:
 *         description: Email đã tồn tại
 */

/**
 * @swagger
 * /QuanLyNguoiDung/DangNhap:
 *   post:
 *     summary: Đăng nhập
 *     tags:
 *       - QuanLyNguoiDung
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mat_khau
 *             properties:
 *               email:
 *                 type: string
 *               mat_khau:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công, trả về accessToken và refreshToken
 *       401:
 *         description: Sai thông tin đăng nhập
 */

/**
 * @swagger
 * /QuanLyNguoiDung/DangXuat:
 *   post:
 *     summary: Đăng xuất tài khoản
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 *       401:
 *         description: Chưa đăng nhập hoặc token không hợp lệ
 */

/**
 * @swagger
 * /QuanLyNguoiDung/ThongTinTaiKhoan:
 *   get:
 *     summary: Lấy thông tin tài khoản hiện tại
 *     description: Trả về thông tin người dùng dựa trên access token (cần đăng nhập)
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy thông tin tài khoản thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tai_khoan:
 *                   type: integer
 *                 ho_ten:
 *                   type: string
 *                 email:
 *                   type: string
 *                 so_dt:
 *                   type: string
 *                 loai_nguoi_dung:
 *                   type: string
 *       401:
 *         description: Không có token hoặc token không hợp lệ
 */

/**
 * @swagger
 * /QuanLyNguoiDung/refresh-token:
 *   post:
 *     summary: Làm mới access token
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - accessToken
 *               - refreshToken
 *             properties:
 *               accessToken:
 *                 type: string
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tạo access token mới thành công
 */

/**
 * @swagger
 * /QuanLyNguoiDung/LayDanhSachNguoiDung:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách người dùng thành công
 */

/**
 * @swagger
 * /QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang:
 *   get:
 *     summary: Lấy danh sách người dùng phân trang
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy danh sách phân trang thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 pageSize:
 *                   type: integer
 */

/**
 * @swagger
 * /QuanLyNguoiDung/TimKiemNguoiDung:
 *   get:
 *     summary: Tìm kiếm người dùng
 *     description: Tìm kiếm người dùng theo tên hoặc email
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: Từ khóa tìm kiếm (tên hoặc email)
 *     responses:
 *       200:
 *         description: Tìm kiếm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   tai_khoan:
 *                     type: integer
 *                   ho_ten:
 *                     type: string
 *                   email:
 *                     type: string
 *                   so_dt:
 *                     type: string
 *                   loai_nguoi_dung:
 *                     type: string
 *       400:
 *         description: Thiếu từ khóa tìm kiếm
 *       404:
 *         description: Không tìm thấy người dùng
 */

/**
 * @swagger
 * /QuanLyNguoiDung/CapNhatThongTinNguoiDung:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     description: API dùng để cập nhật thông tin người dùng theo tai_khoan
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ho_ten:
 *                 type: string
 *               email:
 *                 type: string
 *               so_dt:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Không tìm thấy người dùng
 */

/**
 * @swagger
 * /QuanLyNguoiDung/XoaNguoiDung/{tai_khoan}:
 *   delete:
 *     summary: Xóa người dùng (soft delete)
 *     tags:
 *       - QuanLyNguoiDung
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tai_khoan
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa người dùng thành công
 *       404:
 *         description: Tài khoản không tồn tại hoặc đã bị xóa
 */


// ============================================================================
// 2. QUẢN LÝ PHIM ROUTE (QuanLyPhim)
// ============================================================================

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhim:
 *   get:
 *     summary: Lấy danh sách phim
 *     description: Trả về toàn bộ phim chưa bị xóa (isDeleted = false)
 *     tags:
 *       - QuanLyPhim
 *     responses:
 *       200:
 *         description: Lấy danh sách phim thành công
 */

/**
 * @swagger
 * /QuanLyPhim/PhimDangChieu:
 *   get:
 *     summary: Lấy danh sách phim đang chiếu
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách phim đang chiếu thành công
 */

/**
 * @swagger
 * /QuanLyPhim/PhimSapChieu:
 *   get:
 *     summary: Lấy danh sách phim sắp chiếu
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách phim sắp chiếu thành công
 */

/**
 * @swagger
 * /QuanLyPhim/PhimHot:
 *   get:
 *     summary: Lấy danh sách phim hot
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách phim hot thành công
 */

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhimPhanTrang:
 *   get:
 *     summary: Lấy danh sách phim phân trang
 *     description: Hỗ trợ phân trang và filter
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Trang hiện tại
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: Số lượng phim mỗi trang
 *     responses:
 *       200:
 *         description: Lấy danh sách phim phân trang thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ma_phim:
 *                         type: integer
 *                       ten_phim:
 *                         type: string
 *                       trailer:
 *                         type: string
 *                       hinh_anh:
 *                         type: string
 *                       mo_ta:
 *                         type: string
 *                       ngay_khoi_chieu:
 *                         type: string
 *                         format: date-time
 *                       danh_gia:
 *                         type: integer
 *                       hot:
 *                         type: boolean
 *                       dang_chieu:
 *                         type: boolean
 *                       sap_chieu:
 *                         type: boolean
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 pageSize:
 *                   type: integer
 */

/**
 * @swagger
 * /QuanLyPhim/LayThongTinPhim/{ma_phim}:
 *   get:
 *     summary: Lấy thông tin chi tiết phim
 *     tags:
 *       - QuanLyPhim
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Lấy thông tin phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyPhim/LayDanhSachPhimTheoNgay:
 *   get:
 *     summary: Lấy danh sách phim theo ngày khởi chiếu
 *     tags:
 *       - QuanLyPhim
 *     parameters:
 *       - in: query
 *         name: ngay
 *         required: true
 *         schema:
 *           type: string
 *         description: Ngày theo định dạng dd/mm/yyyy
 *     responses:
 *       200:
 *         description: Lấy danh sách phim theo ngày thành công
 *       400:
 *         description: Sai định dạng ngày
 */

/**
 * @swagger
 * /QuanLyPhim/Banner/{ma_phim}:
 *   get:
 *     summary: Lấy banner theo mã phim
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *         example: 123
 *     responses:
 *       200:
 *         description: Lấy banner thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     ma_phim:
 *                       type: integer
 *                       example: 123
 *                     banner:
 *                       type: string
 *                       example: https://example.com/banner.jpg
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyPhim:
 *   post:
 *     summary: Thêm phim mới (ADMIN)
 *     description: API dùng để thêm phim mới vào hệ thống (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ten_phim
 *               - ngay_khoi_chieu
 *             properties:
 *               ten_phim:
 *                 type: string
 *               trailer:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               ngay_khoi_chieu:
 *                 type: string
 *                 example: "2025-10-01"
 *               danh_gia:
 *                 type: integer
 *               hot:
 *                 type: boolean
 *               dang_chieu:
 *                 type: boolean
 *               sap_chieu:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Thêm phim thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

/**
 * @swagger
 * /QuanLyPhim/CapNhatPhim/{ma_phim}:
 *   put:
 *     summary: Cập nhật thông tin phim (ADMIN)
 *     description: Cập nhật thông tin phim theo mã phim (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_phim:
 *                 type: string
 *               trailer:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               ngay_khoi_chieu:
 *                 type: string
 *               danh_gia:
 *                 type: integer
 *               hot:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cập nhật phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyPhim/XoaPhim/{ma_phim}:
 *   delete:
 *     summary: Xóa phim (Soft Delete - ADMIN)
 *     description: Chuyển trạng thái isDeleted thành true (chỉ ADMIN)
 *     tags:
 *       - QuanLyPhim
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Xóa phim thành công
 *       404:
 *         description: Không tìm thấy phim
 */


// ============================================================================
// 3. QUẢN LÝ RẠP ROUTE (QuanLyRap)
// ============================================================================

/**
 * @swagger
 * /QuanLyRap/LayThongTinHeThongRap:
 *   get:
 *     summary: Lấy thông tin hệ thống rạp
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy hệ thống rạp thành công
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinCumRapTheoHeThong:
 *   get:
 *     summary: Lấy thông tin cụm rạp theo hệ thống
 *     description: Trả về thông tin hệ thống rạp và danh sách cụm rạp theo mã hệ thống rạp
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_he_thong_rap
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã hệ thống rạp
 *     responses:
 *       200:
 *         description: Lấy cụm rạp thành công
 *       404:
 *         description: Không tìm thấy hệ thống rạp
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinLichChieuHeThongRap:
 *   get:
 *     summary: Lấy thông tin lịch chiếu theo hệ thống rạp
 *     description: Trả về danh sách hệ thống rạp kèm cụm rạp, rạp phim và lịch chiếu
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_he_thong_rap
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã hệ thống rạp cần lấy lịch chiếu
 *     responses:
 *       200:
 *         description: Lấy thông tin lịch chiếu thành công
 *       400:
 *         description: Thiếu mã hệ thống rạp
 */

/**
 * @swagger
 * /QuanLyRap/LayThongTinLichChieuPhim:
 *   get:
 *     summary: Lấy lịch chiếu phim theo mã phim
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_phim
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã phim
 *     responses:
 *       200:
 *         description: Lấy lịch chiếu thành công
 *       404:
 *         description: Không tìm thấy phim
 */

/**
 * @swagger
 * /QuanLyRap/LayLichChieuPhimDuaVaMaVaThoiGian:
 *   get:
 *     summary: Lấy lịch chiếu phim theo mã lịch chiếu
 *     description: Trả về chi tiết 1 lịch chiếu (phim, rạp, cụm rạp, hệ thống rạp, thời gian chiếu) theo mã lịch chiếu
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_lich_chieu
 *         required: true
 *         schema:
 *           type: integer
 *         description: Mã lịch chiếu
 *     responses:
 *       200:
 *         description: Lấy lịch chiếu thành công
 *       404:
 *         description: Không tìm thấy lịch chiếu
 */

/**
 * @swagger
 * /QuanLyRap/GiuChoTamThoi:
 *   post:
 *     summary: Giữ chỗ tạm thời cho ghế
 *     description: Giữ ghế trong 5 phút cho người dùng đang đăng nhập
 *     tags:
 *       - QuanLyRap
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - ma_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               ma_ghe:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Giữ ghế thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 expire_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Mã lịch chiếu hoặc mã ghế không hợp lệ
 *       401:
 *         description: Người dùng chưa đăng nhập
 */


// ============================================================================
// 4. QUẢN LÝ ĐẶT VÉ ROUTE (QuanLyDatVe)
// ============================================================================

/**
 * @swagger
 * /QuanLyDatVe/LayTrangThaiGheTrongRap:
 *   get:
 *     summary: Lấy trạng thái ghế trong rạp
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_lich_chieu
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy trạng thái ghế thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/LayDanhSachPhongVe:
 *   get:
 *     summary: Lấy danh sách ghế và trạng thái ghế
 *     tags:
 *       - QuanLyDatVe
 *     parameters:
 *       - in: query
 *         name: ma_lich_chieu
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy danh sách phòng vé thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/TaoLichChieu:
 *   post:
 *     summary: Tạo lịch chiếu (ADMIN)
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_rap
 *               - ma_phim
 *               - ngay_gio_chieu
 *               - gia_ve
 *             properties:
 *               ma_rap:
 *                 type: integer
 *               ma_phim:
 *                 type: integer
 *               ngay_gio_chieu:
 *                 type: string
 *                 example: "2025-10-01 09:00:00"
 *               gia_ve:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tạo lịch chiếu thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/DatVe:
 *   post:
 *     summary: Tạo đơn chờ thanh toán (giữ ghế, trả QR VietQR) — vé thật chỉ được tạo sau khi webhook ngân hàng xác nhận đã thanh toán
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ve:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_ghe:
 *                       type: integer
 *               danh_sach_combo:
 *                 type: array
 *                 description: Combo bắp nước mua kèm (optional)
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_combo:
 *                       type: integer
 *                     so_luong:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Tạo đơn chờ thanh toán thành công
 *       400:
 *         description: Ghế đã được đặt
 */

/**
 * @swagger
 * /QuanLyDatVe/TrangThaiHoaDon:
 *   get:
 *     summary: Lấy trạng thái thanh toán của hóa đơn (FE polling khi chờ QR)
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ma_hoa_don
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy trạng thái hóa đơn thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/LichSuDatVe:
 *   get:
 *     summary: Lấy lịch sử đặt vé của người dùng
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy lịch sử đặt vé thành công
 */

/**
 * @swagger
 * /QuanLyDatVe/HuyGiaoDich:
 *   post:
 *     summary: User chủ động hủy đơn đang chờ thanh toán — nhả ghế ngay lập tức
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_hoa_don
 *             properties:
 *               ma_hoa_don:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hủy giao dịch thành công (idempotent - gọi lại vẫn trả 200)
 *       404:
 *         description: Không tìm thấy hóa đơn hoặc hóa đơn không thuộc về bạn
 *       409:
 *         description: Đơn đã thanh toán hoặc đã hết hạn, không thể hủy
 */

/**
 * @swagger
 * /QuanLyDatVe/CapVeTrucTiep:
 *   post:
 *     summary: (ADMIN) Cấp vé trực tiếp không qua thanh toán — cho khách CK muộn hoặc vé marketing
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - danh_sach_ve
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ve:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_ghe:
 *                       type: integer
 *               danh_sach_combo:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ma_combo:
 *                       type: integer
 *                     so_luong:
 *                       type: integer
 *               email_khach:
 *                 type: string
 *                 description: Email tài khoản khách nhận vé; bỏ trống = cấp cho chính admin
 *               ly_do:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cấp vé thành công
 *       403:
 *         description: Không có quyền (chỉ ADMIN)
 *       404:
 *         description: Không tìm thấy lịch chiếu / ghế / tài khoản khách
 *       409:
 *         description: Ghế đã được bán hoặc đang giữ chỗ
 */

/**
 * @swagger
 * /QuanLyDatVe/CheckIn:
 *   post:
 *     summary: Check-in vé bằng mã QR (ADMIN)
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - qr_token
 *             properties:
 *               qr_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Check-in thành công
 *       400:
 *         description: Mã QR không hợp lệ hoặc đã hết hạn
 *       404:
 *         description: Không tìm thấy vé
 *       409:
 *         description: Vé đã được check-in trước đó
 */

/**
 * @swagger
 * /QuanLyDatVe/GiuGhe:
 *   post:
 *     summary: Giữ ghế tạm khi user click chọn ghế (chưa tạo hóa đơn)
 *     description: >
 *       Idempotent — click lại ghế mình đang giữ vẫn trả 200 kèm
 *       da_giu_truoc_do=true và thời hạn còn lại, KHÔNG gia hạn.
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Giữ ghế thành công (hoặc ghế đã được bạn giữ trước đó)
 *       409:
 *         description: Ghế đã được người khác chọn hoặc đã bán
 */

/**
 * @swagger
 * /QuanLyDatVe/GiaHanGiuGhe:
 *   post:
 *     summary: Gia hạn giữ ghế tạm (heartbeat khi user còn ở màn chọn ghế)
 *     description: >
 *       Chỉ gia hạn bản ghi loai=tam còn hạn. Ghế đã gắn hóa đơn có expire_at
 *       khóa theo HoaDon.het_han_luc nên không gia hạn riêng được.
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Gia hạn thành công
 *       404:
 *         description: Không còn ghế nào đang được bạn giữ
 */

/**
 * @swagger
 * /QuanLyDatVe/NhaGhe:
 *   post:
 *     summary: Nhả ghế tạm khi user bỏ chọn hoặc rời trang
 *     description: >
 *       Chỉ là tối ưu trả ghế sớm — KHÔNG phải cơ chế giải phóng chính.
 *       Nguồn sự thật là expire_at + job dọn nền. Idempotent.
 *       Chấp nhận access_token trong body (dành cho navigator.sendBeacon lúc
 *       đóng tab, vì beacon không set được header Authorization).
 *     tags:
 *       - QuanLyDatVe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ma_lich_chieu
 *               - danh_sach_ghe
 *             properties:
 *               ma_lich_chieu:
 *                 type: integer
 *               danh_sach_ghe:
 *                 type: array
 *                 items:
 *                   type: integer
 *               access_token:
 *                 type: string
 *                 description: Chỉ dùng khi gọi bằng sendBeacon (không có header Authorization)
 *     responses:
 *       200:
 *         description: Nhả ghế thành công
 *       401:
 *         description: Thiếu token ở cả header lẫn body, hoặc token không hợp lệ
 */


// ============================================================================
// 5. COMBO ROUTE (Combo)
// ============================================================================

/**
 * @swagger
 * /Combo/DanhSachCombo:
 *   get:
 *     summary: Lấy danh sách combo bắp nước đang bán (public)
 *     tags:
 *       - Combo
 *     responses:
 *       200:
 *         description: Lấy danh sách combo thành công
 */


// ============================================================================
// 6. THANH TOÁN WEBHOOK ROUTE (ThanhToan)
// ============================================================================

/**
 * @swagger
 * /ThanhToan/Webhook:
 *   post:
 *     summary: Webhook nhận xác nhận thanh toán từ ngân hàng (SePay/Casso)
 *     tags:
 *       - ThanhToan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               transferType:
 *                 type: string
 *               transferAmount:
 *                 type: integer
 *               referenceCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đã nhận webhook (luôn trả success để tránh ngân hàng retry vô ích)
 *       401:
 *         description: Sai apikey
 */