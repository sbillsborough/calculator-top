export function updateDisplay(value) {
  const output = document.querySelector(".output");
  output.innerText = value;
}

export function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error";
  }
}

// Basic math operations
export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero!";
  }
  return num1 / num2;
}
