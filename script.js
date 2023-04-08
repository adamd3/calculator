let operator = null;
let firstNum = null;
let secondNum = null;
let displayVal = null;

const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('button--operator');
const display = document.getElementById('display');

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


function operate(operator, firstNum, secondNum) {
  return operator(firstNum, secondNum);
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'clear') {
      display.textContent = '';
    } else if (button.id == 'equals') {
      display.textContent = operate(operator, firstNum, secondNum);
    } else {
      display.textContent += button.textContent;
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

// display.textContent = operate(operator, firstNum, secondNum);

