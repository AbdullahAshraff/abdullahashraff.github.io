const table = document.createElement('table');
table.setAttribute('id', 'score-table');
document.querySelector('main').appendChild(table);
let num_rows_initial = 3;
let num_cols = 3;

const num_to_arabic = {
  1:'الأولى',
  2:'الثانية',
  3:'الثالثة',
  4:'الرابعة',
  5:'الخامسة',
  6:'السادسة',
  7:'السابعة',
  8:'الثامنة',
  9:'التاسعة',
  10:'العاشرة',
};

const rounds_names = [];
const players_names = [];
const rows_arr = [];

function makeRoundNameCell() {
  const roundNameCell = document.createElement('th');
  roundNameCell.setAttribute('class','round-name-cell');
  const roundName = `الجولة\n${num_to_arabic[rounds_names.length + 1]}`;
  rounds_names.push(roundName);
  roundNameCell.innerText = roundName;
  return roundNameCell;
}

function makeSpaceCell() {
  const roundNameCell = document.createElement('th');
  roundNameCell.innerText = ' ';
  return roundNameCell;
}

function makePlayerNameCell() {
  const playerNameCell = document.createElement('th');
  playerNameCell.setAttribute('class','player-name-cell');
  const playerNameInput = document.createElement('input');
  playerNameInput.setAttribute('type', 'text');
  playerNameInput.setAttribute('class','player-name-input');
  const playerName = `اللاعب ${players_names.length + 1}`;
  players_names.push(playerName);
  playerNameInput.value = playerName;
  playerNameCell.appendChild(playerNameInput);
  return playerNameCell;
}

function makeScoreCell() {
  const scoreCell = document.createElement('td');
  scoreCell.setAttribute('class','score-cell');
  const scoreInput = document.createElement('input');
  scoreInput.setAttribute('class','score-input');
  scoreInput.setAttribute('type', 'number');
  scoreCell.appendChild(scoreInput);
  return scoreCell;
}

function getCell(typeOfCells) {
  let res_cell;
  switch (typeOfCells) {
    case 'score':
      res_cell = makeScoreCell();
      break;
    case 'player':
      res_cell = makePlayerNameCell();
      break;
    case 'round':
      res_cell = makeRoundNameCell();
      break;
    case 'space':
      res_cell = makeSpaceCell();
  }
  return res_cell;
}

/**
 * @param {string} typeOfCells this could be one of these ['score','player','round']
 */
function addRow() {
  const row = document.createElement('tr');
  row.setAttribute('class','score-row');
  row.appendChild(getCell('player'));
  for (let i = 0; i < num_cols; i++) {
    row.appendChild(getCell('score'));
  }
  table.appendChild(row);
}



/**
 * @param {string} typeOfCells this could be one of these ['score','player','round']
 */
function addCol() {
  const all_rows = document.querySelectorAll('#score-table tr');
  all_rows[0].appendChild(getCell('round'));
  for (let i = 1; i < all_rows.length; i++) {
    all_rows[i].appendChild(getCell('score'));
  }
  num_cols++;
  addingColGroup();
}

function addingColGroup(){
  const colGrp = document.createElement('colgroup');
  colGrp.setAttribute('class','round-col');
  table.appendChild(colGrp);
}

function makingFirstColGroup(){
  const colGrp = document.createElement('colgroup');
  colGrp.setAttribute('class','header-col');
  table.appendChild(colGrp);
}

function makingFirstRow(){
  const row = document.createElement('tr');
  row.setAttribute('class','header-row');
  row.appendChild(getCell('space'));
  makingFirstColGroup();
  for (let i = 0; i < num_cols; i++) {
    row.appendChild(getCell('round'));
    addingColGroup();
  }
  table.appendChild(row);
}

makingFirstRow();
for (let i = 0; i < num_rows_initial; i++) { addRow(); }
