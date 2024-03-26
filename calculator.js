export const add = (num1, num2) => {
  return num1 + num2;
};

export const subtract = (num1, num2) => {
  return num1 - num2;
};

export const mutiply = (num1, num2) => {
  return num1 * num2;
};

export const division = (num1, num2) => {
  return num1 / num2;
};

export const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};
