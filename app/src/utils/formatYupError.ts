export const formatYupError = (errors: any[]) => {
  const errorMessage: Record<string, string> = {};
  errors.forEach((error) => {
    if (!error) return;
    errorMessage[error.path] = error.message;
  });
  return errorMessage;
};
