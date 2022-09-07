const calculatorBody = document.querySelector("#calculator-body");
const screen = document.querySelector("#screen");
const keypad = document.querySelector("#keypad");

// build screen

const display = document.createElement("textarea");
display.textContent = "012345";
screen.appendChild(display);

// build keypad and buttons

for (i = 0; i < 10; i++) {
  const numButton = document.createElement("button");
  numButton.textContent = `${i}`;
  numButton.id = i;
  numButton.classList.add("number-button");
  keypad.appendChild(numButton);
}

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.id = "add-button";
addButton.classList.add("number-button");

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

keypad.appendChild(addButton);
keypad.appendChild(subtractButton);
keypad.appendChild(multiplyButton);
keypad.appendChild(divideButton);
keypad.appendChild(clearButton);
keypad.appendChild(equalsButton);

//calculation functions

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

function operate(operator, num1, num2) {
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

console.log(operate("/", 5, 10));
