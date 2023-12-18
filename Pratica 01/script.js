let currentDisplayValue = "0";
let operator = "";
let firstOperand = "";

function updateDisplay() {
  document.getElementById("display").innerText = currentDisplayValue;
}

function clearDisplay() {
  currentDisplayValue = "0";
  operator = "";
  firstOperand = "";

  updateDisplay();
}

function appendNumber(number) {
  if (currentDisplayValue === "0" || currentDisplayValue === "-0") {
    currentDisplayValue = number;
  } else {
    currentDisplayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentDisplayValue.includes(".")) {
    currentDisplayValue += ".";

    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  firstOperand = currentDisplayValue;
  currentDisplayValue = "0";
}

function calculateResult() {
  let result;
  const secondOperand = currentDisplayValue;

  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      if (parseFloat(secondOperand) !== 0) {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
      } else {
        result = "erro";
      }
      break;
    default:
      break;
  }

  currentDisplayValue = result.toString();
  operator = "";
  firstOperand = "";
  updateDisplay();
}

// inicializando a exibição
updateDisplay();
