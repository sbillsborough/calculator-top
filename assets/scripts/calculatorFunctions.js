// Variables to store numbers, operators, and display value
let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

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
