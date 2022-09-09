const calculatorBody = document.querySelector("#calculator-body");
const screen = document.querySelector("#screen");
const keypad = document.querySelector("#keypad");
let displayValue = [];
let firstValue = undefined;
let secondValue = undefined;
let operatorValue = "";
let clearNext = false;
let stopEquals = false;

//calculation functions

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function operate(operator, num1, num2) {
  if (num2 === undefined) {
    return num1;
  }
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function populateDisplay(num) {
  displayValue += num;
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = [];
  display.textContent = [];
}

// build screen

const display = document.createElement("textarea");
display.textContent = displayValue;
screen.appendChild(display);

// build keypad and buttons

for (i = 0; i < 10; i++) {
  const numButton = document.createElement("button");
  numButton.textContent = `${i}`;
  numButton.id = i;
  numButton.classList.add("number-button");
  numButton.addEventListener("click", () => {
    if (clearNext === true) {
      clearDisplay();
      clearNext = false;
    }
    if (stopEquals === true) {
      clearDisplay();
      stopEquals = false;
      firstValue = undefined;
      secondValue = undefined;
      operatorValue = "";
    }
    populateDisplay(numButton.id);
  });
  keypad.appendChild(numButton);
}

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.id = "add-button";
addButton.classList.add("number-button");
addButton.addEventListener("click", () => {
  if (clearNext === true) {
    return;
  }
  if (stopEquals === true) {
    firstValue = displayValue;
    operatorValue = "+";
    clearNext = true;
    stopEquals = false;
    console.log("stop equals fires");
  } else if (firstValue === undefined) {
    firstValue = displayValue;
    operatorValue = "+";
    stopEquals = false;
    clearDisplay();
  } else {
    operatorValue = "+";
    secondValue = displayValue;
    clearDisplay();
    displayValue = operate("+", firstValue, secondValue);
    firstValue = displayValue;
    display.textContent = displayValue;
    clearNext = true;
    stopEquals = false;
  }
});

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
subtractButton.id = "subtract-button";
subtractButton.classList.add("number-button");

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "×";
multiplyButton.id = "multiply-button";
multiplyButton.classList.add("number-button");

const divideButton = document.createElement("button");
divideButton.textContent = "÷";
divideButton.id = "divide-button";
divideButton.classList.add("number-button");

const clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.id = "clear-button";
clearButton.classList.add("number-button");

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.id = "equals-button";
equalsButton.addEventListener("click", () => {
  if (stopEquals === true) {
    return;
  }
  secondValue = displayValue;
  clearDisplay();
  displayValue = operate(operatorValue, firstValue, secondValue);
  firstValue = displayValue;
  display.textContent = displayValue;
  stopEquals = true;
});

keypad.appendChild(addButton);
keypad.appendChild(subtractButton);
keypad.appendChild(multiplyButton);
keypad.appendChild(divideButton);
keypad.appendChild(clearButton);
keypad.appendChild(equalsButton);
