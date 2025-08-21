document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const keys = document.querySelector('.calc__keys');

  let current = '0';
  let previous = null;
  let operator = null;
  let resetOnNextDigit = false;

  const render = () => (display.textContent = current);

  const resetState = () => {
    current = '0';
    previous = null;
    operator = null;
    resetOnNextDigit = false;
    render();
  };

  const appendDigit = (digit) => {
    if (resetOnNextDigit) {
      current = '';
      resetOnNextDigit = false;
    }
    if (current === '0' && digit !== '.') current = '';
    current += digit;
    render();
  };

  const chooseOperator = (nextOp) => {
    const inputValue = parseFloat(current);
    if (previous === null) {
      previous = inputValue;
    } else if (operator) {
      const result = performCalculation();
      previous = result;
      current = String(result);
    }
    operator = nextOp;
    resetOnNextDigit = true;
    render();
  };

  const performCalculation = () => {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return curr;

    let result;
    switch (operator) {
      case '+': result = prev + curr; break;
      case '-': result = prev - curr; break;
      case '×': result = prev * curr; break;
      case '÷': result = prev / curr; break;
      default: return curr;
    }
    return Math.round(result * 1e12) / 1e12;
  };

  const calculate = () => {
    if (!operator || previous === null) return;
    current = String(performCalculation());
    operator = null;
    previous = null;
    resetOnNextDigit = true;
    render();
  };

  const deleteLast = () => {
    if (current.length === 1 || (current.startsWith('-') && current.length === 2)) {
      current = '0';
    } else {
      current = current.slice(0, -1);
    }
    render();
  };

  keys.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    if (!action) {
      appendDigit(keyContent);
      return;
    }

    switch (action) {
      case 'clear': resetState(); break;
      case 'delete': deleteLast(); break;
      case 'operate': chooseOperator(key.dataset.op); break;
      case 'calculate': calculate(); break;
    }
  });

  const keyMap = {
    Backspace: () => deleteLast(),
    Delete: () => resetState(),
    Enter: () => calculate(),
    '=': () => calculate(),
    '+': () => chooseOperator('+'),
    '-': () => chooseOperator('-'),
    '*': () => chooseOperator('×'),
    '/': () => chooseOperator('÷'),
    '.': () => appendDigit('.'),
    0: () => appendDigit('0'),
    1: () => appendDigit('1'),
    2: () => appendDigit('2'),
    3: () => appendDigit('3'),
    4: () => appendDigit('4'),
    5: () => appendDigit('5'),
    6: () => appendDigit('6'),
    7: () => appendDigit('7'),
    8: () => appendDigit('8'),
    9: () => appendDigit('9'),
  };

  document.addEventListener('keydown', (e) => {
    const fn = keyMap[e.key];
    if (fn) {
      e.preventDefault();
      fn();
    }
  });
});