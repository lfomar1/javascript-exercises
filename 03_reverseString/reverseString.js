const reverseString = function (str) {
  let splitString = str.split("");
  let splitReverseString = splitString.reverse();
  let joinArray = splitReverseString.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
