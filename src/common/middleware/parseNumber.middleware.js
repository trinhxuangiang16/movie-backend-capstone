export const parseNumber = (req, res, next) => {
  const convert = (obj) => {
    if (!obj) return;

    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "string" && value.trim() !== "" && !isNaN(value)) {
        obj[key] = Number(value);
      }

      if (typeof value === "object") {
        convert(value);
      }
    }
  };

  convert(req.body);
  convert(req.query);
  next();
};
