import { z } from "zod";

export const queryPaginationSchema = z.object({
  page: z.coerce
    .number({ message: "Page phải là số" })
    .int({ message: "Page phải là số nguyên" })
    .positive({ message: "Page phải lớn hơn 0" })
    .default(1),

  pageSize: z.coerce
    .number({ message: "PageSize phải là số" })
    .int({ message: "PageSize phải là số nguyên" })
    .positive({ message: "PageSize phải lớn hơn 0" })
    .max(100, { message: "PageSize tối đa là 100" })
    .default(5),
  filters: z.union([z.string(), z.record(z.any())]).optional(),
});
