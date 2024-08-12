// DOM Elements
export const buttons = document.querySelectorAll(".number-button");
export const operatorButton = document.querySelectorAll(".operator-button");
export const decimalButton = document.querySelector(".decimal-button");
export const equalsButton = document.querySelector(".equals-button");
export const deleteButton = document.querySelector(".delete-button");
export const clearButton = document.querySelector(".clear-button");
export const output = document.querySelector(".output");

// Event Listeners for Buttons
export const buttonsEvent = buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => handleNumberInput(e.target.innerText));
});

export let operatorEvent = operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => handleOperatorInput(e.target.innerText));
});

export const decimalEvent = decimalButton.addEventListener("click", (e) =>
  handleDecimalInput()
);
export const equalsEvent = equalsButton.addEventListener("click", () =>
  handleEqualsInput()
);
export const deleteEvent = deleteButton.addEventListener("click", () =>
  handleDeleteInput()
);
export const clearEvent = clearButton.addEventListener("click", () =>
  handleClearInput()
);
