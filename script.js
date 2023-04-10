let currentOperand = '';
let previousOperand = '';
let operator = '';
let result = '';

const buttons = document.querySelectorAll('.button');
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

function percent() {
  currentOperand = parseFloat(currentOperand) / 100;
}

function clearScreen() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  result = '';
  screen.textContent = '0';
  previousScreen.textContent = '';
}

function updateScreen() {
  opFormat = operator.toString().replace(/\//g, '&divide;');
  screen.textContent = currentOperand;
  if (result) {
    previousScreen.innerHTML = `${
      previousOperand} ${opFormat} ${currentOperand} =`;
    result = '';  
  } else {
    previousScreen.innerHTML = `${previousOperand} ${opFormat}`;
  }
}

function deleteDigit() {
  currentOperand = currentOperand.toString().slice(0, -1);
  if (!currentOperand) currentOperand = '0';
  updateScreen();
}

function appendDigit(digit) {
  if (digit === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + digit.toString();
  updateScreen();
}

function applyOperator(op) {
  if (!currentOperand) return;
  if (operator) evaluateExpression();
  operator = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateScreen();
}

function evaluateExpression() {
  const num1 = parseFloat(previousOperand);
  const num2 = parseFloat(currentOperand);
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '×':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      return;
  }
  rounded = parseFloat(Number(result).toFixed(3));
  currentOperand = rounded.toString();
  updateScreen();
  operator = '';
  previousOperand = '';
}

document.addEventListener('keydown', e => {
  let key = e.key;
  if (key === '*') key = '×';
  if (key === 'Enter' || key === '=') key = '=';
  if (key === 'Backspace' || key === "Delete") key = 'del';
  if (key === 'Escape') key = 'ac';
  const button = document.querySelector(`button[data-value="${key}"]`);
  if (button) {
    button.click();
  }
});

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
      case 'operator':
        applyOperator(target.dataset.value);
        break;
      case 'number':
        if (currentOperand === '0') currentOperand = '';
        appendDigit(target.dataset.value);
        break;
    }
    target.blur(); 
  });
});
