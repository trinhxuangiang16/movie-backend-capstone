export function buildQueryPrisma(query) {
  let { page, pageSize, filters } = query;

  const pageDefault = 1;
  const pageSizeDefault = 5;

  page = Number(page) || pageDefault;
  pageSize = Number(pageSize) || pageSizeDefault;

  page = Math.max(page, pageDefault);
  pageSize = Math.max(pageSize, pageSizeDefault);

  // Nếu filters là undefined, null, chuỗi rỗng hoặc không phải là đối tượng, gán nó thành một đối tượng rỗng
  if (!filters) {
    filters = {};
  } else if (typeof filters === "string") {
    try {
      filters = JSON.parse(filters);
    } catch (err) {
      filters = {};
    }
  } else if (typeof filters !== "object") {
    filters = {};
  }

  // Nếu filters là mảng, chuyển thành đối tượng rỗng
  if (Array.isArray(filters)) {
    filters = {};
  }

  // Duyệt qua từng cặp key-value trong filters, nếu value là chuỗi, chuyển thành điều kiện "contains" để tìm kiếm chuỗi con và không phân biệt chữ hoa thường
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
