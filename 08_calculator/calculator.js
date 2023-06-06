const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (...args) {
  flattenedArgs = args.flat();

  return flattenedArgs.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
