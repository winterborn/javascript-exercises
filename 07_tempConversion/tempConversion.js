const convertToCelsius = function(tempFahr) {
  tempCels = (tempFahr - 32) * 5/9;

  return parseFloat(tempCels.toFixed(1));
};

const convertToFahrenheit = function(tempCels) {
  tempFahr = (tempCels * 9/5) + 32;

  return parseFloat(tempFahr.toFixed(1));;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
