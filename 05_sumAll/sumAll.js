const sumAll = function (value1, value2) {
  if (
    typeof value1 !== "number" ||
    typeof value2 !== "number" ||
    value1 < 0 ||
    value2 < 0
  ) {
    return "ERROR";
  }

  const [minValue, maxValue] = [Math.min(value1, value2), Math.max(value1, value2)];

  let total = 0;

  for (let i = minValue; i <= maxValue; i++) {
    total += i;
}

  return total;
};

// Do not edit below this line
module.exports = sumAll;
