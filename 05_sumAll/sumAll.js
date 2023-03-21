const sumAll = function (...arr) {
  if (typeof arr[1] === "object") {
    return "ERROR";
  }
  let fullArr = [];

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
    if (arr[0] < 1) {
      return "ERROR";
    } else if (typeof arr[1] === "string") {
      return "ERROR";
    }
  }

  const sum = fullArr.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};
console.log(sumAll(10, [90, 1]));
// Do not edit below this line
module.exports = sumAll;
