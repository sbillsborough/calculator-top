import {
  handleNumberInput,
  handleOperatorInput,
  handleDecimalInput,
  handleEqualsInput,
  handleDeleteInput,
  handleClearInput,
} from "./inputFunctions.js";

// DOM Elements
export const buttons = document.querySelectorAll(".number-button");
export const operatorButton = document.querySelectorAll(".operator-button");
export const decimalButton = document.querySelector(".decimal-button");
export const equalsButton = document.querySelector(".equals-button");
export const deleteButton = document.querySelector(".delete-button");
export const clearButton = document.querySelector(".clear-button");
export const output = document.querySelector(".output");

// Add Event Listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => handleNumberInput(e.target.innerText));
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => handleOperatorInput(e.target.innerText));
});

decimalButton.addEventListener("click", handleDecimalInput);
equalsButton.addEventListener("click", handleEqualsInput);
deleteButton.addEventListener("click", handleDeleteInput);
clearButton.addEventListener("click", handleClearInput);
