const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400
      } else {
        return false; // Divisible by 100 but not by 400
      }
    } else {
      return true; // Divisible by 4 but not by 100
    }
  } else {
    return false; // Not divisible by 4
  }
};

// Do not edit below this line
module.exports = leapYears;
