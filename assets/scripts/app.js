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
  decimalButton,
  equalsButton,
  deleteButton,
  clearButton,
} from "./events.js";

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
    handleEqualsInput();
  } else if (key === "Backspace") {
    handleDeleteInput();
  } else if (key === "Escape") {
    handleClearInput();
  }
});
