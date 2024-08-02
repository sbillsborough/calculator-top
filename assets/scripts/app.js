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
  return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

const buttons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");

let output = document.querySelector(".output");

let displayValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayValue += e.target.innerText;
    console.log(displayValue);
    output.innerText = displayValue;
  });
});

clearButton.addEventListener("click", (e) => {
  displayValue = null;
  console.log(displayValue);
  output.innerText = displayValue;
});
