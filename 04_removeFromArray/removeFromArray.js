const removeFromArray = function (array, ...value) {
  const newArray = array.filter((item) => !value.includes(item));

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
