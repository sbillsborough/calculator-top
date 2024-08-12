// Calculator Functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "Cannot divide by zero!" : num1 / num2;
}

// Variables to store numbers, operators, and display value
let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

// DOM Elements
const buttons = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const clearButton = document.querySelector(".clear-button");
const output = document.querySelector(".output");

// Event Listeners for Buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => handleNumberInput(e.target.innerText));
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => handleOperatorInput(e.target.innerText));
});

decimalButton.addEventListener("click", (e) => handleDecimalInput());
equalsButton.addEventListener("click", () => handleEqualsInput());
deleteButton.addEventListener("click", () => handleDeleteInput());
clearButton.addEventListener("click", () => handleClearInput());

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key >= 0 && key <= 9) {
    handleNumberInput(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperatorInput(key);
  } else if (key === ".") {
    handleDecimalInput();
  } else if (key === "Enter") {
    e.preventDefault(); // Prevents form submission if any
    handleEqualsInput();
  } else if (key === "Backspace") {
    handleDeleteInput();
  } else if (key === "Escape") {
    handleClearInput();
  }
});

// Functions to handle inputs
function handleNumberInput(number) {
  if (operator === "") {
    num1 += number;
    displayValue = num1;
  } else {
    num2 += number;
    displayValue = num1 + operator + num2;
  }
  updateDisplay();
}

function handleOperatorInput(op) {
  if (num1 !== "") {
    if (operator === "") {
      operator = op;
      displayValue += operator;
    } else if (num2 !== "") {
      handleEqualsInput();
      operator = op;
    }
    updateDisplay();
  }
}

function handleDecimalInput() {
  if (operator === "" && !num1.includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.includes(".")) {
    num2 += ".";
  }
  displayValue = num1 + operator + num2;
  updateDisplay();
}

function handleEqualsInput() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let result = operate(operator, num1, num2);
    num1 = result;
    num2 = "";
    operator = "";
    displayValue = result;
    updateDisplay();
  }
}

function handleDeleteInput() {
  if (num2 !== "") {
    num2 = num2.slice(0, -1);
    displayValue = num1 + operator + num2;
  } else if (operator !== "") {
    operator = "";
    displayValue = num1;
  } else if (num1 !== "") {
    num1 = num1.slice(0, -1);
    displayValue = num1;
  }
  updateDisplay();
}

function handleClearInput() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = "";
  updateDisplay();
}

function updateDisplay() {
  output.innerText = displayValue;
}

function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error";
  }
}
