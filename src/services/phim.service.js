import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/contect.prisma.js";
import { buildQueryPrisma } from "../utils/buildQueryPrisma.js";

export const phimService = {
  // GET LayDanhSachPhim
  getLayDanhSachPhim: async () => {
    return prisma.phim.findMany({
      where: {
        isDeleted: false,
      },
      orderBy: {
        ma_phim: "asc",
      },
    });
  },

  // GET LayDanhSachPhimPhanTrang (DÙNG buildQueryPrisma)
  getLayDanhSachPhimPhanTrang: async (query) => {
    const { page, pageSize, skip, where } = buildQueryPrisma(query);

    const finalWhere = {
      ...where,
      isDeleted: false,
    };

    const data = await prisma.phim.findMany({
      skip,
      take: pageSize,
      where: finalWhere,
      orderBy: {
        ma_phim: "asc",
      },
    });

    const total = await prisma.phim.count({ where: finalWhere });

    return {
      data,
      total,
      page,
      pageSize,
    };
  },

  // GET LayThongTinPhim/:ma_phim
  getLayThongTinPhim: async (ma_phim) => {
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!phim || phim.isDeleted) {
      throw new NotFoundException("Phim không tồn tại hoặc đã bị xóa");
    }

    return phim;
  },

  // GET LayDanhSachPhimTheoNgay
  getLayDanhSachPhimTheoNgay: async (ngay) => {
    const [day, month, year] = ngay.split("/").map(Number);

    const start = new Date(year, month - 1, day); // Tạo đối tượng Date cho ngày bắt đầu (00:00:00)
    const end = new Date(year, month - 1, day + 1);

    return prisma.phim.findMany({
      where: {
        ngay_khoi_chieu: {
          gte: start,
          lt: end,
        },
      },
      orderBy: {
        ngay_khoi_chieu: "asc",
      },
    });
  },

  // POST QuanLyPhim
  themPhim: async (data) => {
    return prisma.phim.create({
      data: {
        ten_phim: data.ten_phim,
        trailer: data.trailer,
        hinh_anh: data.hinh_anh,
        mo_ta: data.mo_ta,
        ngay_khoi_chieu: new Date(data.ngay_khoi_chieu),
        danh_gia: Number(data.danh_gia),
        hot: Boolean(data.hot),
        dang_chieu: Boolean(data.dang_chieu),
        sap_chieu: Boolean(data.sap_chieu),
      },
    });
  },

  // DELETE XoaPhim
  delete: async (ma_phim) => {
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim), isDeleted: false },
    });

    if (!phim) {
      throw new NotFoundException("Phim không tồn tại hoặc đã bị xóa");
    }

    await prisma.phim.update({
      where: { ma_phim: Number(ma_phim) },
      data: { isDeleted: true },
    });
  },

  // PUT CapNhatPhim
  capNhatPhim: async (ma_phim, data) => {
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!phim || phim.isDeleted) {
      throw new NotFoundException("Phim không tồn tại hoặc đã bị xóa");
    }

    await prisma.phim.update({
      where: { ma_phim: Number(ma_phim) },
      data: {
        ten_phim: data.ten_phim,
        trailer: data.trailer,
        hinh_anh: data.hinh_anh,
        mo_ta: data.mo_ta,
        ngay_khoi_chieu: data.ngay_khoi_chieu
          ? new Date(data.ngay_khoi_chieu)
          : undefined,
        danh_gia: data.danh_gia ? Number(data.danh_gia) : undefined,
        hot: data.hot !== undefined ? Boolean(data.hot) : undefined,
        dang_chieu:
          data.dang_chieu !== undefined ? Boolean(data.dang_chieu) : undefined,
        sap_chieu:
          data.sap_chieu !== undefined ? Boolean(data.sap_chieu) : undefined,
      },
    });
  },

  getPhimDangChieu: async () => {
    const movies = await prisma.phim.findMany({
      where: {
        dang_chieu: true,
        isDeleted: false,
      },
      select: {
        ma_phim: true,
        ten_phim: true,
        hinh_anh: true,
        Banner: {
          select: {
            hinh_anh: true,
          },
        },
      },
      orderBy: {
        ma_phim: "asc",
      },
    });

    return movies.map((movie) => {
      return {
        ma_phim: movie.ma_phim,
        ten_phim: movie.ten_phim,
        hinh_anh: movie.hinh_anh,
        banner_url: movie.Banner[0]?.hinh_anh || null,
      };
    });
  },

  getPhimSapChieu: async () => {
    const movies = await prisma.phim.findMany({
      where: {
        sap_chieu: true,
        isDeleted: false,
      },
      select: {
        ma_phim: true,
        ten_phim: true,
        hinh_anh: true,
        Banner: {
          select: {
            hinh_anh: true,
          },
        },
      },
      orderBy: {
        ma_phim: "asc",
      },
    });

    return movies.map((movie) => {
      return {
        ma_phim: movie.ma_phim,
        ten_phim: movie.ten_phim,
        hinh_anh: movie.hinh_anh,
        banner_url: movie.Banner[0]?.hinh_anh || null,
      };
    });
  },

  getPhimHot: async () => {
    const movies = await prisma.phim.findMany({
      where: {
        hot: true,
        isDeleted: false,
      },

      select: {
        ma_phim: true,
        ten_phim: true,
        hinh_anh: true,
        Banner: {
          select: {
            hinh_anh: true,
          },
        },
      },
      orderBy: {
        ma_phim: "asc",
      },
    });

    return movies.map((movie) => {
      return {
        ma_phim: movie.ma_phim,
        ten_phim: movie.ten_phim,
        hinh_anh: movie.hinh_anh,
        banner_url: movie.Banner[0]?.hinh_anh || null,
      };
    });
  },

  getBanner: async (ma_phim) => {
    // Kiểm tra phim tồn tại
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!phim || phim.isDeleted) {
      throw new NotFoundException("Phim không tồn tại hoặc đã bị xóa");
    }

    // Lấy banner
    const banner = await prisma.banner.findFirst({
      where: { ma_phim: Number(ma_phim) },
    });

    if (!banner) {
      throw new NotFoundException("Banner không tồn tại");
    }

    return banner;
  },
};
