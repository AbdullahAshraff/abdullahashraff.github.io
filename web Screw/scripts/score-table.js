const table = document.createElement('table');
table.setAttribute('id', 'score-table');

const tableFrame = document.createElement('div');
tableFrame.setAttribute('id','table-frame');

tableFrame.appendChild(table);
document.querySelector('main').insertBefore(tableFrame,document.querySelector('.after-table'));


const num_rows_initial = 3;
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
function makeTotalCell(rowNumber) {
  const totalCell = document.createElement('td');
  totalCell.setAttribute('class',`total-cell`);
  totalCell.setAttribute('row-num',`${rowNumber}`);
  totalCell.innerText='0'
  return totalCell;
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
  playerNameInput.placeholder = playerName;
  playerNameCell.appendChild(playerNameInput);
  return playerNameCell;
}
function makeTotalNameCell(){
  const totalNameCell = document.createElement('th');
  totalNameCell.innerText = 'المجموع';
  totalNameCell.setAttribute('id','total-name-cell');
  return totalNameCell;
}
function makeScoreCell(idx,row_or_col) {
  const scoreCell = document.createElement('td');
  scoreCell.setAttribute('class','score-cell');
  const scoreInput = document.createElement('input');
  scoreInput.setAttribute('class','score-input');
  const row_num = (row_or_col==='col')?`${players_names.length}`:`${idx}`;
  const col_num = (row_or_col==='col')?`${idx+1}`:`${num_cols+1}`;
  scoreInput.setAttribute('row-num',row_num);
  scoreInput.setAttribute('col-num',col_num);

  
  scoreInput.setAttribute('type', 'text');
  scoreInput.setAttribute('inputmode','numeric');
  scoreInput.setAttribute('maxlength','3');
  // scoreInput.setAttribute('pattern', '[1-9]{1,3}');


  scoreInput.onkeyup = () => {
    updateTotalCell(row_num);
  };

  scoreInput.onchange = () => {
    const x =scoreInput.value;
    scoreInput.value = parseInt(x) ||( (x==0)? 0:'');
    updateTotalCell(row_num);
  };

  scoreCell.appendChild(scoreInput);
  return scoreCell;
}

function getCell(typeOfCells,rowNumber =0) {
  switch (typeOfCells) {
    case 'score':
      return makeScoreCell();
    case 'player':
      return makePlayerNameCell();
    case 'round':
      return makeRoundNameCell();
    case 'total':
      return makeTotalCell(rowNumber);
    case 'space':
      return makeSpaceCell();
    case 'totalName':
      return makeTotalNameCell();
  }
}

/**
 * @param {string} typeOfCells this could be one of these ['score','player','round']
 */
function addRow() {
  const row = document.createElement('tr');
  row.setAttribute('class','score-row');
  row.appendChild(getCell('player'));
  for (let i = 0; i < num_cols; i++) {
    row.appendChild(makeScoreCell(i,'col'));
  }
  row.appendChild(getCell('total',players_names.length));
  table.appendChild(row);
}



/**
 * @param {string} typeOfCells this could be one of these ['score','player','round']
 */
function addCol() {
  const all_rows = document.querySelectorAll('#score-table tr');
  all_rows[0].insertBefore(getCell('round'),all_rows[0].querySelector('#total-name-cell'));
  for (let i = 1; i < all_rows.length; i++) {
    all_rows[i].insertBefore(makeScoreCell(i,'row'),all_rows[i].querySelector('.total-cell'));
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
  row.appendChild(getCell('totalName'))
  table.appendChild(row);
}


function updateTotalCell(row_num){
  const rowCells = document.querySelectorAll(`.score-input[row-num='${row_num}']`);
  const totalCell = document.querySelector(`.total-cell[row-num='${row_num}']`);

  let sum =0;
  for(let i=0;i<rowCells.length;i++){
    sum+=parseInt(rowCells[i].value) || 0;
  }
  totalCell.innerText = sum || 0;
}

makingFirstRow();
for (let i = 0; i < num_rows_initial; i++) { addRow(); }
