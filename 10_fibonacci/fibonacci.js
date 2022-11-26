const fibonacci = function (a) {
  const fibonacciNumbers = [1, 1];
  for (let i = 2; i < 100; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1]);
  }
  const target = Number(a);
  if (target >= 0) {
    return fibonacciNumbers[target - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
