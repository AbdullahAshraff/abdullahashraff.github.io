



// making list of buttons content

let numbersls = [];
for (let i = 1; i < 10; i++) numbersls.push(i);
numbersls.push(0);
numbersls.push('.');

const columns = 4;
const symbols = ['+', '-', '*', '=', '/', '(', ')', 'del', 'AC','th'];
let iterator1 = symbols.entries();

let all = [];
for (let i = 0; i < numbersls.length; i++) {
  all.push(numbersls[i]);
  if ((i + 1) % (columns - 1) === 0) {
    try {
      all.push(iterator1.next().value[1]);
    } catch (TypeError) {}
  }
}
try {
  let m = iterator1.next().value[1];
  while (m) {
    all.push(m);
    m = iterator1.next().value[1];
  }
} catch (TypeError) {}



// making html elements

let mainDiv = document.createElement('div');
mainDiv.className = 'main-div';
document.body.appendChild(mainDiv);

let screen = document.createElement('div');
screen.className = 'screen';
mainDiv.appendChild(screen);

let numPad = document.createElement('div');
numPad.className = 'number-pad';
mainDiv.appendChild(numPad);

numPad.style.gridTemplateColumns = `${` var(--l)`.repeat(columns)}`;

// making buttons in html
all.forEach(el => {
  let numButton = document.createElement('button');
  numButton.appendChild(document.createTextNode(`${el}`));
  switch (el) {
    case '=':
      numButton.onclick = equalfun;
      break;
    case 'del':
      numButton.onclick = del;  
      break;
    case 'AC':
      numButton.onclick = ac;
      break;
    case 'th':
      numButton.onclick = themeRoll;
      break;
    default:
      numButton.onclick = _ => writeExp(el);
      break;
  }

  if (Number.isInteger(el) || el === '.') numButton.className = 'number-button';
  else {
    numButton.className = 'symbol-button';
    el = ` ${el} `;
  }

  numPad.appendChild(numButton);
});

