let inputField = '';

function setInputField(inputField) {
  document.getElementById("input-field").value = inputField;
}

function handleNumberClick(event) {
  inputField += (event.target.dataset.number);
  setInputField(inputField);
}

function handleSelectorClick(event) {
  inputField += (event.target.dataset.separator);
  setInputField(inputField);
}

function handleOperatorClick(event) {
  inputField += (event.target.dataset.operator);
  setInputField(inputField);
}

function handleEqualClick(event) {
  const result = eval(inputField);
  inputField = result.toString();
  setInputField(inputField);
}

function handleBackSpaceClick() {
  let temp_input_field = inputField.split('');
  temp_input_field.pop();
  inputField = temp_input_field.join('');
  setInputField(inputField);
}

function handleClearClick() {
  inputField = '';
  setInputField(inputField)
}

function handleBracketClick(event) {
  inputField += event.target.dataset.bracket;
  setInputField(inputField);
}

document.addEventListener("DOMContentLoaded", (event) => {
  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => handleNumberClick(event));
  })

  document.querySelector(".separator").addEventListener("click", (event) => handleSelectorClick(event));

  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => handleOperatorClick(event));
  })

  document.querySelector(".equal").addEventListener("click", handleEqualClick);
  document.querySelector(".backspace").addEventListener("click", handleBackSpaceClick);
  document.querySelector(".clear").addEventListener("click", handleClearClick);

  const bracketButtons = document.querySelectorAll(".bracket");
  bracketButtons.forEach((button) => {
    button.addEventListener("click", (event) => handleBracketClick(event))
  })
})