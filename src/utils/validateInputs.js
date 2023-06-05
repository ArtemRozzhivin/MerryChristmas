export const validateName = (value) => {
  return value.length >= 2 && value.length <= 60 ? true : false;
};
