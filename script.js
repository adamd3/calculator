let currentOperand = '';
let previousOperand = '';
let operator = '';

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('button--operator');
const screen = document.querySelector('.screen__output--current');
const previousScreen = document.querySelector('.screen__output--previous');

console.log(buttons);

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

function updateScreen() {
  screen.textContent = currentOperand;
  previousScreen.textContent = `${previousOperand} ${operator}`;
}


function deleteDigit() {
  currentOperand = currentOperand.slice(0, -1);
  updateScreen();
}

function appendDigit(digit) {
  if (digit === '.' && currentOperand.includes('.')) return;
  currentOperand += digit;
  updateScreen();
}

function evaluateExpression() {
  const num1 = parseFloat(previousOperand);
  const num2 = parseFloat(currentOperand);
  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
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
      case 'delete':
        deleteDigit();
        break;
      case 'number':
        appendDigit(target.dataset.value);
        break;
    
    }
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