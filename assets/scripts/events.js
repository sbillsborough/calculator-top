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
