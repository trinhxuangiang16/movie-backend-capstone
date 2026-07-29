-- CreateTable
CREATE TABLE `Banner` (
    `ma_banner` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_phim` INTEGER NULL,
    `hinh_anh` VARCHAR(255) NULL,

    INDEX `ma_phim`(`ma_phim`),
    PRIMARY KEY (`ma_banner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CumRap` (
    `ma_cum_rap` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_cum_rap` VARCHAR(255) NULL,
    `dia_chi` VARCHAR(255) NULL,
    `ma_he_thong_rap` INTEGER NULL,
    `khu_vuc` VARCHAR(255) NULL,

    INDEX `ma_he_thong_rap`(`ma_he_thong_rap`),
    PRIMARY KEY (`ma_cum_rap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatVe` (
    `tai_khoan` INTEGER NOT NULL,
    `ma_lich_chieu` INTEGER NOT NULL,
    `ma_ghe` INTEGER NOT NULL,
    `gia_ve` INTEGER NOT NULL,
    `ma_hoa_don` INTEGER NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `ma_ghe`(`ma_ghe`),
    INDEX `ma_hoa_don`(`ma_hoa_don`),
    UNIQUE INDEX `DatVe_ma_lich_chieu_ma_ghe_key`(`ma_lich_chieu`, `ma_ghe`),
    PRIMARY KEY (`tai_khoan`, `ma_lich_chieu`, `ma_ghe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ghe` (
    `ma_ghe` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_ghe` VARCHAR(50) NULL,
    `loai_ghe` VARCHAR(50) NULL,
    `ma_rap` INTEGER NULL,

    INDEX `ma_rap`(`ma_rap`),
    PRIMARY KEY (`ma_ghe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HeThongRap` (
    `ma_he_thong_rap` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_he_thong_rap` VARCHAR(255) NULL,
    `logo` VARCHAR(255) NULL,

    PRIMARY KEY (`ma_he_thong_rap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LichChieu` (
    `ma_lich_chieu` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_rap` INTEGER NULL,
    `ma_phim` INTEGER NULL,
    `ngay_gio_chieu` DATETIME(0) NULL,
    `gia_ve` INTEGER NULL,

    INDEX `ma_phim`(`ma_phim`),
    INDEX `ma_rap`(`ma_rap`),
    PRIMARY KEY (`ma_lich_chieu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NguoiDung` (
    `tai_khoan` INTEGER NOT NULL AUTO_INCREMENT,
    `ho_ten` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `so_dt` VARCHAR(50) NULL,
    `mat_khau` VARCHAR(255) NULL,
    `loai_nguoi_dung` VARCHAR(50) NULL,
    `isDeleted` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`tai_khoan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RefreshToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(512) NOT NULL,
    `tai_khoan` INTEGER NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    INDEX `RefreshToken_tai_khoan_idx`(`tai_khoan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Phim` (
    `ma_phim` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_phim` VARCHAR(255) NULL,
    `trailer` VARCHAR(255) NULL,
    `hinh_anh` VARCHAR(255) NULL,
    `mo_ta` TEXT NULL,
    `ngay_khoi_chieu` DATETIME(0) NULL,
    `danh_gia` INTEGER NULL,
    `hot` BOOLEAN NULL,
    `dang_chieu` BOOLEAN NULL,
    `sap_chieu` BOOLEAN NULL,
    `isDeleted` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`ma_phim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RapPhim` (
    `ma_rap` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_rap` VARCHAR(255) NULL,
    `ma_cum_rap` INTEGER NULL,

    INDEX `ma_cum_rap`(`ma_cum_rap`),
    PRIMARY KEY (`ma_rap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GiuCho` (
    `ma_giu_cho` INTEGER NOT NULL AUTO_INCREMENT,
    `tai_khoan` INTEGER NOT NULL,
    `ma_lich_chieu` INTEGER NOT NULL,
    `ma_ghe` INTEGER NOT NULL,
    `loai` ENUM('tam', 'da_tao_don') NOT NULL DEFAULT 'tam',
    `ma_hoa_don` INTEGER NULL,
    `gia_ve` INTEGER NULL,
    `expire_at` DATETIME(0) NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_giucho_ghe`(`ma_ghe`),
    INDEX `fk_giucho_lichchieu`(`ma_lich_chieu`),
    INDEX `fk_giucho_user`(`tai_khoan`),
    INDEX `fk_giucho_hoadon`(`ma_hoa_don`),
    INDEX `idx_giucho_loai_expire`(`loai`, `expire_at`),
    UNIQUE INDEX `uq_giucho_lichchieu_ghe`(`ma_lich_chieu`, `ma_ghe`),
    PRIMARY KEY (`ma_giu_cho`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HoaDon` (
    `ma_hoa_don` INTEGER NOT NULL AUTO_INCREMENT,
    `tai_khoan` INTEGER NOT NULL,
    `ma_lich_chieu` INTEGER NOT NULL,
    `tong_tien` INTEGER NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `checked_in_at` DATETIME(0) NULL,
    `trang_thai_thanh_toan` ENUM('cho_thanh_toan', 'da_thanh_toan', 'het_han', 'huy') NOT NULL DEFAULT 'cho_thanh_toan',
    `phuong_thuc_thanh_toan` VARCHAR(50) NULL,
    `ma_giao_dich_ngan_hang` VARCHAR(255) NULL,
    `so_tien_da_nhan` INTEGER NULL,
    `thanh_toan_luc` DATETIME(0) NULL,
    `het_han_luc` DATETIME(0) NULL,

    UNIQUE INDEX `HoaDon_ma_giao_dich_ngan_hang_key`(`ma_giao_dich_ngan_hang`),
    INDEX `tai_khoan`(`tai_khoan`),
    INDEX `ma_lich_chieu`(`ma_lich_chieu`),
    INDEX `HoaDon_trang_thai_thanh_toan_idx`(`trang_thai_thanh_toan`),
    PRIMARY KEY (`ma_hoa_don`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Combo` (
    `ma_combo` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_combo` VARCHAR(255) NOT NULL,
    `mo_ta` VARCHAR(255) NULL,
    `gia` INTEGER NOT NULL,
    `hinh_anh` VARCHAR(255) NULL,
    `isDeleted` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`ma_combo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HoaDonCombo` (
    `ma_hoa_don` INTEGER NOT NULL,
    `ma_combo` INTEGER NOT NULL,
    `so_luong` INTEGER NOT NULL,
    `don_gia` INTEGER NOT NULL,

    INDEX `ma_combo`(`ma_combo`),
    PRIMARY KEY (`ma_hoa_don`, `ma_combo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GiaoDichWebhook` (
    `ma_giao_dich_webhook` INTEGER NOT NULL AUTO_INCREMENT,
    `nguon` VARCHAR(20) NOT NULL,
    `raw_payload` TEXT NOT NULL,
    `ma_giao_dich_ngan_hang` VARCHAR(255) NULL,
    `so_tien` INTEGER NULL,
    `noi_dung` VARCHAR(500) NULL,
    `ma_hoa_don_parse` INTEGER NULL,
    `ket_qua_xu_ly` VARCHAR(30) NOT NULL,
    `ghi_chu` VARCHAR(500) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `GiaoDichWebhook_ma_hoa_don_parse_idx`(`ma_hoa_don_parse`),
    INDEX `GiaoDichWebhook_ma_giao_dich_ngan_hang_idx`(`ma_giao_dich_ngan_hang`),
    PRIMARY KEY (`ma_giao_dich_webhook`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Banner` ADD CONSTRAINT `Banner_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `Phim`(`ma_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CumRap` ADD CONSTRAINT `CumRap_ibfk_1` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap`(`ma_he_thong_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_1` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung`(`tai_khoan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_2` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu`(`ma_lich_chieu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_3` FOREIGN KEY (`ma_ghe`) REFERENCES `Ghe`(`ma_ghe`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_4` FOREIGN KEY (`ma_hoa_don`) REFERENCES `HoaDon`(`ma_hoa_don`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ghe` ADD CONSTRAINT `Ghe_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim`(`ma_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LichChieu` ADD CONSTRAINT `LichChieu_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim`(`ma_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LichChieu` ADD CONSTRAINT `LichChieu_ibfk_2` FOREIGN KEY (`ma_phim`) REFERENCES `Phim`(`ma_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_tai_khoan_fkey` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung`(`tai_khoan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RapPhim` ADD CONSTRAINT `RapPhim_ibfk_1` FOREIGN KEY (`ma_cum_rap`) REFERENCES `CumRap`(`ma_cum_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GiuCho` ADD CONSTRAINT `fk_giucho_ghe` FOREIGN KEY (`ma_ghe`) REFERENCES `Ghe`(`ma_ghe`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GiuCho` ADD CONSTRAINT `fk_giucho_lichchieu` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu`(`ma_lich_chieu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GiuCho` ADD CONSTRAINT `fk_giucho_user` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung`(`tai_khoan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `GiuCho` ADD CONSTRAINT `fk_giucho_hoadon` FOREIGN KEY (`ma_hoa_don`) REFERENCES `HoaDon`(`ma_hoa_don`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `HoaDon` ADD CONSTRAINT `HoaDon_ibfk_1` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung`(`tai_khoan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `HoaDon` ADD CONSTRAINT `HoaDon_ibfk_2` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu`(`ma_lich_chieu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `HoaDonCombo` ADD CONSTRAINT `HoaDonCombo_ibfk_1` FOREIGN KEY (`ma_hoa_don`) REFERENCES `HoaDon`(`ma_hoa_don`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `HoaDonCombo` ADD CONSTRAINT `HoaDonCombo_ibfk_2` FOREIGN KEY (`ma_combo`) REFERENCES `Combo`(`ma_combo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

