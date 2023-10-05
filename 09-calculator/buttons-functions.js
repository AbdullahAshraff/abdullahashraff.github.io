let lastWasResult = false;
let exp = '';
function writeExp(ch) {
  if (lastWasResult) {
    screen.classList.remove('screen-result');
    if (Number.isInteger(ch)) ch = ` + ${ch}`;
    lastWasResult = false;
  }
  if (exp === 'Syntax Error') exp = '';
  exp += ch;
  screen.innerText = exp;
}
function equalfun() {
  try {
    let res = eval(exp);
    exp = `${res}`;
  } catch (SyntaxError) {
    exp = 'Syntax Error';
  }
  screen.innerText = exp;
  screen.classList.add('screen-result');
  lastWasResult =true;
}
function ac() {
  exp = '';
  screen.innerText = exp;

  screen.classList.remove('screen-result');
  lastWasResult = false;
}
function del() {
  exp = exp.slice(0,-1);
  screen.innerText = exp;
}