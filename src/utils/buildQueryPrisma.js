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
  for (const [key, value] of Object.entries(filters)) {
    if (typeof value === "string") {
      filters[key] = {
        contains: value,
      };
    }
  }

  const skip = (page - 1) * pageSize;

  return {
    page,
    pageSize,
    skip,
    where: {
      ...filters,
    },
  };
}
