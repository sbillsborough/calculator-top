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
  let result = 0;

  if (operator === "+") {
    result += add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }

  displayValue = result.toFixed(2);

  output.innerText = displayValue;
}

// Add elements to the DOM with JS

// const containerDiv = document.createElement("div");
// containerDiv.setAttribute("class", "container");
// document.body.appendChild(containerDiv);

// const outputDisplay = document.createElement("p");
// outputDisplay.setAttribute("class", "output");
// containerDiv.appendChild(outputDisplay);

// const parentNode = outputDisplay.parentNode; // div with the class of container

// const numOpContainer = document.createElement("div");
// numOpContainer.setAttribute("class", "numbers-operators-container");
// parentNode.appendChild(numOpContainer);

// const numContainer = document.createElement("div");
// numContainer.setAttribute("class", "numbers-container");
// parentNode.appendChild(numContainer);

// const btn = document.createElement("button");
// btn.setAttribute("class", "number-button");
// btn.innerText = "0";
// numContainer.appendChild(btn);

// for (let btnNum = 1; btnNum <= 9; btnNum++) {
//   numContainer.appendChild(btn.cloneNode(true));
//   btn.innerText = btnNum;
// }

// --------------------------------------

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
