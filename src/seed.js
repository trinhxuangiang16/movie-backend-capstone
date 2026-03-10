import "dotenv/config";

import { prisma } from "./common/prisma/contect.prisma.js";
import bcrypt from "bcrypt";

async function main() {
  //Tài khoản ADMIN duy nhất
  const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

  await prisma.nguoiDung.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      ho_ten: "Super Admin",
      email: "admin@gmail.com",
      so_dt: "0900000000",
      mat_khau: hashedPassword,
      loai_nguoi_dung: "ADMIN",
    },
  });

  console.log("seed admin thành công");

  // Seed dữ liệu phim mẫu
  const movies = [
    {
      ten_phim: "Mai",
      trailer: "https://youtube.com/watch?v=mai_trailer",
      hinh_anh: "https://example.com/images/mai.jpg",
      mo_ta:
        "Câu chuyện tình yêu đầy cảm xúc giữa hai con người cô đơn tại Sài Gòn.",
      ngay_khoi_chieu: "2025-10-01T00:00:00.000Z",
      danh_gia: 9,
      hot: true,
      dang_chieu: true,
      sap_chieu: false,
    },
    {
      ten_phim: "Bố Già",
      trailer: "https://youtube.com/watch?v=bogia_trailer",
      hinh_anh: "https://example.com/images/bogia.jpg",
      mo_ta:
        "Tình cảm gia đình và những mâu thuẫn giữa các thế hệ trong một con hẻm nhỏ.",
      ngay_khoi_chieu: "2025-09-15T00:00:00.000Z",
      danh_gia: 8,
      hot: true,
      dang_chieu: true,
      sap_chieu: false,
    },
    {
      ten_phim: "Hai Phượng",
      trailer: "https://youtube.com/watch?v=haiphuong_trailer",
      hinh_anh: "https://example.com/images/haiphuong.jpg",
      mo_ta:
        "Hành trình giải cứu con gái khỏi đường dây buôn người xuyên quốc gia.",
      ngay_khoi_chieu: "2025-08-20T00:00:00.000Z",
      danh_gia: 9,
      hot: false,
      dang_chieu: true,
      sap_chieu: false,
    },
    {
      ten_phim: "Mắt Biếc",
      trailer: "https://youtube.com/watch?v=matbiec_trailer",
      hinh_anh: "https://example.com/images/matbiec.jpg",
      mo_ta:
        "Chuyện tình đơn phương đầy day dứt của chàng trai dành cho cô bạn thuở nhỏ.",
      ngay_khoi_chieu: "2025-12-20T00:00:00.000Z",
      danh_gia: 9,
      hot: true,
      dang_chieu: false,
      sap_chieu: true,
    },
    {
      ten_phim: "Tiệc Trăng Máu",
      trailer: "https://youtube.com/watch?v=tiectrangmau_trailer",
      hinh_anh: "https://example.com/images/tiectrangmau.jpg",
      mo_ta:
        "Bí mật được phơi bày khi nhóm bạn quyết định công khai điện thoại.",
      ngay_khoi_chieu: "2025-11-01T00:00:00.000Z",
      danh_gia: 8,
      hot: true,
      dang_chieu: false,
      sap_chieu: true,
    },
    {
      ten_phim: "Nhà Bà Nữ",
      trailer: "https://youtube.com/watch?v=nhabanu_trailer",
      hinh_anh: "https://example.com/images/nhabanu.jpg",
      mo_ta: "Mâu thuẫn gia đình và khát vọng sống tự do của thế hệ trẻ.",
      ngay_khoi_chieu: "2025-04-10T00:00:00.000Z",
      danh_gia: 8,
      hot: true,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Lật Mặt 7",
      trailer: "https://youtube.com/watch?v=latmat7_trailer",
      hinh_anh: "https://example.com/images/latmat7.jpg",
      mo_ta: "Phần tiếp theo của series hành động – gia đình nổi tiếng.",
      ngay_khoi_chieu: "2025-09-01T00:00:00.000Z",
      danh_gia: 8,
      hot: true,
      dang_chieu: true,
      sap_chieu: false,
    },
    {
      ten_phim: "Ròm",
      trailer: "https://youtube.com/watch?v=rom_trailer",
      hinh_anh: "https://example.com/images/rom.jpg",
      mo_ta: "Cuộc sống mưu sinh khắc nghiệt của những đứa trẻ khu lao động.",
      ngay_khoi_chieu: "2025-05-05T00:00:00.000Z",
      danh_gia: 8,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Thanh Sói",
      trailer: "https://youtube.com/watch?v=thanhsoi_trailer",
      hinh_anh: "https://example.com/images/thanhsoi.jpg",
      mo_ta: "Hành trình lột xác của một cô gái giang hồ trong thế giới ngầm.",
      ngay_khoi_chieu: "2025-05-18T00:00:00.000Z",
      danh_gia: 8,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Cua Lại Vợ Bầu",
      trailer: "https://youtube.com/watch?v=cualai_trailer",
      hinh_anh: "https://example.com/images/cualai.jpg",
      mo_ta: "Hành trình níu kéo tình yêu khi bất ngờ nhận tin mang thai.",
      ngay_khoi_chieu: "2025-06-01T00:00:00.000Z",
      danh_gia: 7,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Đất Rừng Phương Nam",
      trailer: "https://youtube.com/watch?v=datrung_trailer",
      hinh_anh: "https://example.com/images/datrung.jpg",
      mo_ta: "Hành trình phiêu lưu của cậu bé An giữa miền Tây sông nước.",
      ngay_khoi_chieu: "2025-03-22T00:00:00.000Z",
      danh_gia: 8,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Tháng Năm Rực Rỡ",
      trailer: "https://youtube.com/watch?v=thangnam_trailer",
      hinh_anh: "https://example.com/images/thangnam.jpg",
      mo_ta: "Hồi ức thanh xuân của nhóm bạn nữ sau nhiều năm xa cách.",
      ngay_khoi_chieu: "2025-07-25T00:00:00.000Z",
      danh_gia: 8,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Song Lang",
      trailer: "https://youtube.com/watch?v=songlang_trailer",
      hinh_anh: "https://example.com/images/songlang.jpg",
      mo_ta:
        "Câu chuyện tình bạn và nghệ thuật cải lương Sài Gòn thập niên 80.",
      ngay_khoi_chieu: "2025-01-15T00:00:00.000Z",
      danh_gia: 9,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Gái Già Lắm Chiêu V",
      trailer: "https://youtube.com/watch?v=gaigia_trailer",
      hinh_anh: "https://example.com/images/gaigia.jpg",
      mo_ta: "Cuộc chiến gia tộc đầy xa hoa và bí mật trong giới thượng lưu.",
      ngay_khoi_chieu: "2025-10-20T00:00:00.000Z",
      danh_gia: 7,
      hot: true,
      dang_chieu: false,
      sap_chieu: true,
    },
    {
      ten_phim: "Chị Chị Em Em",
      trailer: "https://youtube.com/watch?v=chichi_trailer",
      hinh_anh: "https://example.com/images/chichi.jpg",
      mo_ta: "Mối quan hệ phức tạp giữa hai người phụ nữ thành đạt.",
      ngay_khoi_chieu: "2025-06-15T00:00:00.000Z",
      danh_gia: 7,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Quỷ Cẩu",
      trailer: "https://youtube.com/watch?v=quycau_trailer",
      hinh_anh: "https://example.com/images/quycau.jpg",
      mo_ta: "Phim kinh dị lấy cảm hứng từ truyền thuyết dân gian Việt Nam.",
      ngay_khoi_chieu: "2025-11-15T00:00:00.000Z",
      danh_gia: 7,
      hot: true,
      dang_chieu: false,
      sap_chieu: true,
    },
    {
      ten_phim: "Kẻ Ăn Hồn",
      trailer: "https://youtube.com/watch?v=keanhon_trailer",
      hinh_anh: "https://example.com/images/keanhon.jpg",
      mo_ta: "Bí ẩn tâm linh tại một ngôi làng miền núi phía Bắc.",
      ngay_khoi_chieu: "2025-12-05T00:00:00.000Z",
      danh_gia: 8,
      hot: true,
      dang_chieu: false,
      sap_chieu: true,
    },
    {
      ten_phim: "Em Chưa 18",
      trailer: "https://youtube.com/watch?v=emchua18_trailer",
      hinh_anh: "https://example.com/images/emchua18.jpg",
      mo_ta: "Chuyện tình dở khóc dở cười giữa tay chơi và nữ sinh trung học.",
      ngay_khoi_chieu: "2025-07-10T00:00:00.000Z",
      danh_gia: 7,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
    {
      ten_phim: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      trailer: "https://youtube.com/watch?v=hoavang_trailer",
      hinh_anh: "https://example.com/images/hoavang.jpg",
      mo_ta: "Tuổi thơ trong trẻo nơi làng quê miền Trung đầy nắng gió.",
      ngay_khoi_chieu: "2025-08-10T00:00:00.000Z",
      danh_gia: 9,
      hot: true,
      dang_chieu: true,
      sap_chieu: false,
    },
    {
      ten_phim: "Trạng Tí Phiêu Lưu Ký",
      trailer: "https://youtube.com/watch?v=trangti_trailer",
      hinh_anh: "https://example.com/images/trangti.jpg",
      mo_ta: "Cuộc phiêu lưu kỳ ảo dựa trên truyện tranh dân gian Việt Nam.",
      ngay_khoi_chieu: "2025-02-10T00:00:00.000Z",
      danh_gia: 6,
      hot: false,
      dang_chieu: false,
      sap_chieu: false,
    },
  ];

  await prisma.phim.createMany({
    data: movies.map((movie) => ({
      ...movie,
      isDeleted: false,
    })),
    skipDuplicates: true, // Tránh lỗi nếu đã tồn tại phim với tên trùng lặp
  });

  console.log("Seed data thành công");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
