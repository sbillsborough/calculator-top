// Import functions from inputFunctions.js
import {
  handleNumberInput,
  handleOperatorInput,
  handleDecimalInput,
  handleEqualsInput,
  handleDeleteInput,
  handleClearInput,
} from "./inputFunctions.js";

// Import DOM elements from events.js
import {
  buttons,
  operatorButton,
  decimalButton,
  equalsButton,
  deleteButton,
  clearButton,
} from "./events.js";

decimalButton.addEventListener("click", () => handleDecimalInput());
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
