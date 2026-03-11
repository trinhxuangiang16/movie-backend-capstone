export function buildQueryPrisma(query) {
  let { page, pageSize, filters } = query;

  const pageDefault = 1;
  const pageSizeDefault = 5;

  page = Number(page) || pageDefault;
  pageSize = Number(pageSize) || pageSizeDefault;

  page = Math.max(page, pageDefault);
  pageSize = Math.max(pageSize, pageSizeDefault); 

  try {
    filters = JSON.parse(filters);
  } catch (err) {
    filters = {};
  }
  // Chuyển các giá trị chuỗi thành điều kiện tìm kiếm "contains" không phân biệt chữ hoa thường
  for (const [key, value] of Object.entries(filters)) { // Lặp qua từng cặp key-value trong filters
    if (typeof value === "string") {
      filters[key] = { 
        contains: value,
      };
    }
  }
  //kết quả trả về sẽ có cấu trúc như sau:
  // {
  //   page: 1,
  //   pageSize: 5,
  //   skip: 0,
  //   where: {
  //     // Các điều kiện tìm kiếm
  //   }
  // }

  const skip = (page - 1) * pageSize; // Tính toán số bản ghi cần bỏ qua để lấy đúng trang dữ liệu là sao? Ví dụ: nếu page = 1 thì skip = 0, nếu page = 2 thì skip = 5, nếu page = 3 thì skip = 10, v.v. Điều này giúp chúng ta lấy đúng dữ liệu cho từng trang khi sử dụng với Prisma.

  return {
    page,
    pageSize,
    skip,
    where: {
      ...filters,
    },
  };
}
