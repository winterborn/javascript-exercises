const add = function (value1, value2) {
  return value1 + value2;
};

const subtract = function (value1, value2) {
  return Math.max(value1, value2) - Math.min(value1, value2);
};

const sum = function (array) {
  let total = 0;
  for (const num of array) {
    total += num;
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (const num of array) {
    total *= num;
  }
  return total;
};

const power = function (value1, value2) {
  return value1 ** value2;
};

const factorial = function (value) {
  if (value === 0 || value === 1) {
    return 1;
  } else {
    return value * factorial(value - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
