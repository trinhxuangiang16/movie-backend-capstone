export function buildQueryPrisma(query) {
  let { page, pageSize, filters } = query;

  const pageDefault = 1;
  const pageSizeDefault = 5;

  page = Number(page) || pageDefault;
  pageSize = Number(pageSize) || pageSizeDefault;

  page = Math.max(page, pageDefault);
  pageSize = Math.max(pageSize, pageSizeDefault);

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

  if (Array.isArray(filters)) {
    filters = {};
  }

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
