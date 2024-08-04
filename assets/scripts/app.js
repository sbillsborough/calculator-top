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
const operatorButton = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");

let output = document.querySelector(".output");

let displayValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === "") {
      num1 += e.target.innerText;
      displayValue += num1;
      output.innerText = displayValue;
    }
    if (operator != "") {
      num2 += e.target.innerText;
      displayValue += num2;
      output.innerText = displayValue;
    }
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator += e.target.innerText;
    displayValue += operator;
    output.innerText = displayValue;
  });
});

equalsButton.addEventListener("click", operate);

clearButton.addEventListener("click", () => {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  output.innerText = displayValue;
});
