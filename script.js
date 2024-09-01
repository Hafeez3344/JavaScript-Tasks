const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const screen = calculator.querySelector('.calculator-screen__input');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.value;
    const displayedNum = screen.value;

    if (!action) {
      if (displayedNum === '0') {
        screen.value = keyContent;
      } else {
        screen.value = displayedNum + keyContent;
      }
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === 'decimal') {
      screen.value = displayedNum + '.';
    }

    if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.previousKeyType = 'clear';
        screen.value = 0;
      } else {
        key.textContent = 'AC';
      }
    }

    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      screen.value = calculate(firstValue, operator, secondValue);
    }
  }
});

function calculate(first, operator, second) {
  let result = '';

  if (operator === 'add') {
    result = parseFloat(first) + parseFloat(second);
  } else if (operator === 'subtract') {
    result = parseFloat(first) - parseFloat(second);
  } else if (operator === 'multiply') {
    result = parseFloat(first) * parseFloat(second);
  } else if (operator === 'divide') {
    result = parseFloat(first) / parseFloat(second);
  }

  return result;
}
