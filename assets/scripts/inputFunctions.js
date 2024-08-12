// Functions to handle inputs
export function handleNumberInput(number) {
  if (operator === "") {
    num1 += number;
    displayValue = num1;
  } else {
    num2 += number;
    displayValue = num1 + operator + num2;
  }
  updateDisplay();
}

export function handleOperatorInput(op) {
  if (num1 !== "") {
    if (operator === "") {
      operator = op;
      displayValue += operator;
    } else if (num2 !== "") {
      handleEqualsInput();
      operator = op;
    }
    updateDisplay();
  }
}

export function handleDecimalInput() {
  if (operator === "" && !num1.includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.includes(".")) {
    num2 += ".";
  }
  displayValue = num1 + operator + num2;
  updateDisplay();
}

export function handleEqualsInput() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let result = operate(operator, num1, num2);
    num1 = result;
    num2 = "";
    operator = "";
    displayValue = result;
    updateDisplay();
  }
}

export function handleDeleteInput() {
  if (num2 !== "") {
    num2 = num2.slice(0, -1);
    displayValue = num1 + operator + num2;
  } else if (operator !== "") {
    operator = "";
    displayValue = num1;
  } else if (num1 !== "") {
    num1 = num1.slice(0, -1);
    displayValue = num1;
  }
  updateDisplay();
}

export function handleClearInput() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = "";
  updateDisplay();
}

export function updateDisplay() {
  output.innerText = displayValue;
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
