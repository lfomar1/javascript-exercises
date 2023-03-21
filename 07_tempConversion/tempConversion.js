const convertToCelsius = function (num) {
  let number = (num - 32) / 1.8;
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function (num) {
  let number = num * 1.8 + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
