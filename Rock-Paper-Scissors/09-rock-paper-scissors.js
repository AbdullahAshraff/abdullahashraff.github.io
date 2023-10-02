let ls = ['rock', 'paper', 'scissors'];
let ob = JSON.parse(localStorage.getItem('score')) ?? {
  wins: 0,
  ties: 0,
  loses: 0,
};
let scoreStr = function () {
  return `Wins:${ob.wins} Ties:${ob.ties} Loses:${ob.loses}`
};
let imgdict = {
  rock: '<img src="..\\footage\\rock-emoji.png" alt="rock">',
  paper: '<img src="..\\footage\\paper-emoji.png" alt="paper">',
  scissors: '<img src="..\\footage\\scissors-emoji.png" alt="scissors">',
  question: '<img src="..\\footage\\question-emoji.png" alt="unknown">',
  animated: '<img src="..\\footage\\fourthTry.gif" alt="waiting" style="">',
};

const allUserButtons = {
  ls: document.querySelectorAll('.user-move-column button'),
  deselectAll: function () {
    this.ls.forEach(el => {
      el.classList.value = 'move-notselected';
    });
  },
  disableAll: function () {
    allUserButtons.ls.forEach(el => el.disabled = true);
  },
  enableAll: function () {
    allUserButtons.ls.forEach(el => el.disabled = false);
  },
};

const comFrame = {
  ls: document.querySelector('.com-move-frame'),
  deselect: function () {
    this.ls.classList.value = 'com-move-frame move-notselected';
  },
  select: function () {
    this.ls.classList.value = 'com-move-frame move-selected-com';
  },
};
const scoreDiv = document.querySelector('.js-score');
const resultDiv = document.querySelector('.js-result');

resetWithoutScore()

async function game(plaMove) {
  let ranNum = Math.floor(Math.random() * 3);
  let comMove = ls[ranNum];

  // Highlighting player's move
  let plaMoveIdx = ls.indexOf(plaMove);
  allUserButtons.deselectAll();
  allUserButtons.ls[plaMoveIdx].classList.value = 'move-selected';

  // waiting and playing animation
  allUserButtons.disableAll();    // Disable playing again
  resultDiv.innerHTML = '...';
  resultDiv.classList.value = 'js-result result result-waiting';
  comFrame.deselect();
  comFrame.ls.innerHTML = imgdict['animated']; // waiting gif

  await sleep(((Math.random() * 2 + 1) * 1000).toFixed(0));

  document.querySelector('.players-tip').style.opacity = 0;

  comFrame.select();

  // calc Result
  if (comMove === plaMove) {
    resultDiv.innerHTML = 'Tie!';
    resultDiv.classList.value = 'js-result result result-tie';
    ob.ties++;
  } else if (ls[(ranNum + 1) % 3] === plaMove) {
    resultDiv.innerHTML = 'You Won!';
    resultDiv.classList.value = 'js-result result result-won';
    ob.wins++;
  } else {
    resultDiv.innerHTML = 'You Lost!';
    resultDiv.classList.value = 'js-result result result-lost';
    ob.loses++;
  }

  comFrame.ls.innerHTML = imgdict[comMove];   // Show Computer Move

  // update score
  scoreDiv.innerHTML = scoreStr();
  localStorage.setItem('score', JSON.stringify(ob));

  // Enable playing again
  allUserButtons.enableAll();
}

function resetWithoutScore() {
  comFrame.ls.innerHTML = imgdict['question'];
  resultDiv.innerHTML = "&nbsp;";
  scoreDiv.innerHTML = scoreStr();
  allUserButtons.deselectAll()
  comFrame.deselect()
  document.querySelector('.players-tip').style.opacity = 1;
}

function reset() {
  localStorage.removeItem('score');
  ob = { wins: 0, ties: 0, loses: 0 };
  resetWithoutScore()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}