function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

function operate(operator, num1, num2) {
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

const buttons = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const clearButton = document.querySelector(".clear-button");

let output = document.querySelector(".output");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === "") {
      num1 += e.target.innerText;
      displayValue = num1;
    } else {
      num2 += e.target.innerText;
      displayValue += num2;
    }
    output.innerText = num1 + operator + num2;
  });
});

buttons.forEach((keyboardKey) => {
  keyboardKey.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key >= 0 && key <= 9) {
      alert("Hi!");
    }
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === "" && num1 !== "") {
      operator = e.target.innerText;
      displayValue += operator;
      output.innerText = displayValue;
    }
  });
});

decimalButton.addEventListener("click", (e) => {
  if (operator === "") {
    if (!num1.includes(".")) {
      num1 += e.target.innerText;
    }
  } else {
    if (!num2.includes(".")) {
      num2 += e.target.innerText;
    }
  }
  output.innerText = num1 + operator + num2;
});

equalsButton.addEventListener("click", () => {
  if (num1 !== "" && num2 === "0" && operator === "/") {
    output.innerText = "Cannot divide by zero!";
    num1 = "";
    num2 = "";
    operator = "";
  } else if (num1 !== "" && num2 !== "" && operator != "") {
    operate(operator, num1, num2);
    num1 = displayValue;
    num2 = "";
    operator = "";
  }
});

deleteButton.addEventListener("click", () => {
  if (num1 !== "" && num2 === "" && operator === "") {
    num1 = "";
    output.innerText = "";
  } else if (num1 !== "" && num2 === "" && operator !== "") {
    output.innerText = num1;
    operator = "";
    displayValue = num1 + operator;
    output.innerText = displayValue;
  } else if (num1 !== "" && num2 !== "" && operator !== "") {
    output.innerText = num1 + operator;
    num2 = "";
  }
});

clearButton.addEventListener("click", () => {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  output.innerText = displayValue;
});
