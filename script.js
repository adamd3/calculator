let currentOperand = '';
let previousOperand = '';
let operator = '';

const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('button--operator');
const screen = document.querySelector('.screen__output--current');
const previousScreen = document.querySelector('.screen__output--previous');

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

function clearScreen() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  updateScreen();
}

function evaluateExpression() {
  const num1 = parseFloat(previousOperand);
  const num2 = parseFloat(currentOperand);
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  operator = '';
  previousOperand = '';
  updateScreen();
}
  

buttons.forEach((button) => {
  button.addEventListener('click', e => {
    const { target } = e;
    switch (target.dataset.type) {
      case 'clear':
        clearScreen();
        break;
      case 'equals':
        evaluateExpression();
        break;
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    firstNum = display.textContent;
    display.textContent = '';
    switch (operator.id) {
      case 'add':
        operator = add;
        break;
      case 'subtract':
        operator = subtract;
        break;
      case 'multiply':
        operator = multiply;
        break;
      case 'divide':
        operator = divide;
        break;
    }
  });
});

// display.textContent = operate(operator, firstNum, secondNum);

