export function builQueryPrisma(query) {
  //frontend gửi lên key filters để biết đường lọc
  let { page, pageSize, filters } = query;
  const pageDefault = 1;
  const pageSizeDefault = 5;
  pageSize = Number(pageSize);
  page = Number(page);

  //Nếu gửi chữ lên
  page = Number(page) || pageDefault;
  pageSize = Number(pageSize) || pageSizeDefault;

  //Nếu mà gửi số âm
  page = Math.max(page, pageDefault);
  pageSize = Math.max(pageSize, pageSizeDefault);

  try {
    //filter lấy từ người dùng,parse nó ra
    filters = JSON.parse(filters);
  } catch (err) {
    console.log("🚀 ~ err:", "Thông báo đến FE đang gửi định dạng json bị sai");
    filters = {};
  }
  console.log(Object.entries(filters));

  ///XỬ LÝ FILLTER
  //lặp, gõ forof
  for (const [key, value] of Object.entries(filters)) {
    //STRING
    if (typeof value === "string") {
      console.log(`Phát hiện key ${key} có giá trị là string: `, value);
      filters[key] = {
        contains: value,
      };
    }
    //DATE
  }
  const index = (page - 1) * pageSize;
  console.log("page", page, pageSize, index, filters);
  const where = {
    ...filters,
    isDeleted: false,
  };
  return {
    page,
    pageSize,
    where,
    index,
  };
}
