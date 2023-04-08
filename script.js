function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let operator = null;
let firstNum = null;
let secondNum = null;

function operate(operator, firstNum, secondNum) {
  return operator(firstNum, secondNum);
}

