import { updateDisplay, operate } from "./utilities.js";

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

// Function to handle number inputs
export function handleNumberInput(number) {
  if (operator === "") {
    // Append number to num1 for multi-digit entries
    num1 += number;
    displayValue = num1;
  } else {
    // Append number to num2 for multi-digit entries
    num2 += number;
    displayValue = num1 + operator + num2;
  }
  updateDisplay(displayValue);
}

// Function to handle operator inputs
export function handleOperatorInput(op) {
  if (num1 !== "") {
    if (operator === "") {
      operator = op;
      displayValue = num1 + operator;
    } else if (num2 !== "") {
      handleEqualsInput(); // Calculate the result of the current operation first
      operator = op; // Set the new operator after calculation
      displayValue = num1 + operator;
    } else {
      operator = op; // Update the operator if num2 is empty
      displayValue = num1 + operator;
    }
    updateDisplay(displayValue);
  }
}

// Function to handle decimal inputs
export function handleDecimalInput() {
  if (operator === "") {
    // Add decimal to num1 if it doesn't already contain one
    if (!num1.includes(".")) {
      num1 += ".";
      displayValue = num1;
    }
  } else {
    // Add decimal to num2 if it doesn't already contain one
    if (!num2.includes(".")) {
      num2 += ".";
      displayValue = num1 + operator + num2;
    }
  }
  updateDisplay(displayValue);
}

// Function to handle equals input
export function handleEqualsInput() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    // Ensure to use the numerical values of num1 and num2 in the operation
    let result = operate(operator, parseFloat(num1), parseFloat(num2));
    num1 = result.toString(); // Store the result in num1 for further calculations
    num2 = ""; // Clear num2 after calculation
    operator = ""; // Reset the operator
    displayValue = num1; // Update display with the result
    updateDisplay(displayValue);
  }
}

// Function to handle delete input
export function handleDeleteInput() {
  if (num2 !== "") {
    // Remove the last character from num2
    num2 = num2.slice(0, -1);
  } else if (operator !== "") {
    // Remove the operator if num2 is empty
    operator = "";
  } else if (num1 !== "") {
    // Remove the last character from num1
    num1 = num1.slice(0, -1);
  }
  displayValue = num1 + operator + num2;
  updateDisplay(displayValue);
}

// Function to clear all inputs
export function handleClearInput() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = "";
  updateDisplay(displayValue);
}
