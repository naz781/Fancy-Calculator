let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let Reset = "false";
let soundEnabled = true;

let maxlimit = 16
function updateDisplay() {
  const display = document.getElementById('display');
  const maxLimitText = document.getElementById('max-limit-text');
  if (displayValue.length > maxlimit) {
    displayValue = displayValue.slice(0, maxlimit);
    maxLimitText.classList.remove('message');
    setTimeout(() => {
      maxLimitText.classList.add('message');
    }, 2000);
  }
  display.innerText = displayValue;
}
function toggleMusic() {
  const music = document.querySelector('.playpause');
  soundEnabled = !soundEnabled;
  music.innerText = soundEnabled ? '🔊' : '🔇';
}

function playSound(id) {
  if (soundEnabled) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  }
}

function appendNumber(number) {
  playSound('number-sound');
  if (Reset) {
    displayValue = number.toString();
    Reset = false;
  } else {
    if (displayValue === '0' && number !== '.') {
      displayValue = number.toString();
    } else {
      if (number === '.' && displayValue.includes('.')) return;
      displayValue += number.toString();
    }
  }
  updateDisplay();
}

function deletelast() {
  playSound('number-sound');
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  updateDisplay();
}

function percentage() {
  playSound('number-sound');
  displayValue = (parseFloat(displayValue) / 100).toString();
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  currentOperator = operator;

  Reset = true;
  updateDisplay();
}

function calculate() {
  if (currentOperator === null || Reset) {
    return
  }
  secondOperand = parseFloat(displayValue);

  if (currentOperator === '+') {
    displayValue = (firstOperand + secondOperand).toString();
  } else if (currentOperator === '-') {
    displayValue = (firstOperand - secondOperand).toString();
  } else if (currentOperator === '*') {
    displayValue = (firstOperand * secondOperand).toString();
  } else if (currentOperator === '/') {
    displayValue = (firstOperand / secondOperand).toString();
  }

  updateDisplay();
  playSound('answer-sound');
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  Reset = true;
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  Reset = false;
  updateDisplay();
  playSound('clear-sound');
}

updateDisplay();


