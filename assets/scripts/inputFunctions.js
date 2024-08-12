import { updateDisplay, operate } from "./utilities.js";

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

// Functions to handle inputs
export function handleNumberInput(number) {
  if (operator === "") {
    num1 = number;
    displayValue = num1;
  } else {
    num2 = number;
    displayValue = num1 + operator + num2;
  }
  updateDisplay(displayValue);
}

export function handleOperatorInput(op) {
  if (num1 !== "") {
    if (operator === "") {
      operator = op;
      displayValue = num1 + operator;
    } else if (num2 !== "") {
      handleEqualsInput();
      operator = op;
      displayValue = num1 + operator;
    }
    updateDisplay(displayValue);
  }
}

export function handleDecimalInput() {
  if (operator === "") {
    if (!num1.includes(".")) {
      num1 += ".";
      displayValue = num1;
    }
  } else {
    if (!num2.includes(".")) {
      num2 += ".";
      displayValue = num2;
    }
  }
  displayValue = num1 + operator + num2;
  updateDisplay(displayValue);
}

export function handleEqualsInput() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let result = operate(operator, num1, num2);
    num1 = result;
    num2 = "";
    operator = "";
    displayValue = result;
    updateDisplay(displayValue);
  }
}

export function handleDeleteInput() {
  if (num1 !== "" && num2 === "" && operator === "") {
    num1 = "";
    displayValue = "";
  } else if (num1 !== "" && num2 === "" && operator !== "") {
    operator = "";
    displayValue = num1 + operator;
  } else if (num1 !== "" && num2 !== "" && operator !== "") {
    num2 = "";
    displayValue = num1 + operator + num2;
  }
  updateDisplay(displayValue);
}

export function handleClearInput() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = "";
  updateDisplay(displayValue);
}
