const repeatString = function (string, times) {
  if (times < 0) {
    return "ERROR";
  }
  let repeatedStrings = "";
  while (times > 0) {
    repeatedStrings += string;
    times--;
  }
  return repeatedStrings;
};
// Do not edit below this line
module.exports = repeatString;
