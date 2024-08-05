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
let displayValue = "";

function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = 0;

  if (operator === "+") {
    result += add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }

  displayValue = result.toString();
  output.innerText = displayValue;
}

const buttons = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");

let output = document.querySelector(".output");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === "") {
      num1 += e.target.innerText;
      displayValue = num1;
    } else {
      num2 += e.target.innerText;
      displayValue = num2;
    }
    output.innerText += displayValue;
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === "") {
      operator += e.target.innerText;
      displayValue += operator;
      output.innerText = displayValue;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (num1 !== "" && num2 !== "" && operator != "") {
    operate(operator, num1, num2);
    num1 = displayValue;
    num2 = "";
    operator = "";
  }
});

clearButton.addEventListener("click", () => {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  output.innerText = displayValue;
});
