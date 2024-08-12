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
