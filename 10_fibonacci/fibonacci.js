const fibonacci = function (n) {
  const parseInt = parseFloat(n);

  if (parseInt <= 0) {
    return "OOPS";
  } else if (parseInt === 1) {
    return 1;
  }

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = 0;

  for (let i = 2; i <= parseInt; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  return fibN;
};

// Do not edit below this line
module.exports = fibonacci;
