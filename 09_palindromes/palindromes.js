const palindromes = function (string) {
  // Remove non-letter characters and convert to lowercase
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
