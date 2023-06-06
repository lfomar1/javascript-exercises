const palindromes = function (string) {
  const cleanedString = string.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const joinString = cleanedString.split("").reverse().join("");
  return cleanedString === joinString;
};

// Do not edit below this line
module.exports = palindromes;
