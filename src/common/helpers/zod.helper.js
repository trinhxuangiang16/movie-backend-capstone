export const formatZodError = (err) => {
  return err.issues.map((e) => ({
    field: e.path.join("."),
    message: e.message,
  }));
};
