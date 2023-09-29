let ls = ['rock','paper','scissors']
let ob = JSON.parse(localStorage.getItem('score')) ?? {wins : 0, ties : 0, loses:0}
let imgdict = {
  rock:'<img src="..\\footage\\rock-emoji.png" alt="rock">',
  paper:'<img src="..\\footage\\paper-emoji.png" alt="paper">',
  scissors:'<img src="..\\footage\\scissors-emoji.png" alt="scissors">',
  question:'<img src="..\\footage\\question-emoji.png" alt="unknown">',
  animated:'<img src="..\\footage\\thirdTry.gif" alt="waiting" style="">',
}

const allButtons = document.querySelectorAll('.user-move-column button')
allButtons.forEach(element => {
  element.classList.remove('move-selected')
  element.classList.add('move-notselected')
});
document.querySelector('.com-move-frame').classList.remove('move-selected')
document.querySelector('.com-move-frame').classList.add('move-notselected')

document.querySelector('.js-score').innerHTML = `Wins:${ob.wins} Ties:${ob.ties} Loses:${ob.loses}`;

async function game(plaMove){
  let ranNum  = Math.floor(Math.random()*3);
  let comMove = ls[ranNum];

  // Highlighting player move
  let plaMoveIdx = ls.indexOf(plaMove)
  let allButton = document.querySelectorAll('.user-move-column button')
  allButton.forEach(element => {
    element.classList.remove('move-selected')
    element.classList.add('move-notselected')
  });

  allButton [plaMoveIdx].classList.remove('move-notselected')
  allButton [plaMoveIdx].classList.add('move-selected')

  // waiting and playing animation

  
  document.querySelector('.com-move-frame').classList.remove('move-selected-com')
  document.querySelector('.com-move-frame').classList.add('move-notselected')


  allButtons.forEach(el =>el.disabled = true);
  document.querySelector('.js-result').innerHTML = '...';
  document.querySelector('.js-result')
    .classList.value = 'js-result result result-waiting';
  document.querySelector('.com-move-frame').innerHTML = imgdict['animated'];
  await sleep(((Math.random()*2+1)*1000).toFixed(0));



  document.querySelector('.players-tip').style.opacity = 0;
  
  document.querySelector('.com-move-frame').classList.remove('move-notselected')
  document.querySelector('.com-move-frame').classList.add('move-selected-com')

  // calc Result
  if (comMove === plaMove){
    document.querySelector('.js-result').innerHTML = 'Tie!';
    document.querySelector('.js-result')
      .classList.value = 'js-result result result-tie';
    ob.ties++;
  }else if (ls[(ranNum+1)%3] === plaMove){
    document.querySelector('.js-result').innerHTML = 'You Won!';
    document.querySelector('.js-result')
      .classList.value = 'js-result result result-won';
    ob.wins++;
  }else {
    document.querySelector('.js-result').innerHTML = 'You Lost!';
    document.querySelector('.js-result')
      .classList.value = 'js-result result result-lost';
    ob.loses++;
  }
  
  // Show Moves
  document.querySelector('.com-move-frame').innerHTML = imgdict[comMove];

  
  // update score
  document.querySelector('.js-score').innerHTML = `Wins:${ob.wins} Ties:${ob.ties} Loses:${ob.loses}`;
  localStorage.setItem('score',JSON.stringify(ob));

  
  allButtons.forEach(el =>el.disabled = false);
}

function reset(){
  localStorage.removeItem('score');
  ob = {wins : 0, ties : 0, loses:0};
  document.querySelector('.com-move-frame').innerHTML = imgdict['question'];
  document.querySelector('.js-result').innerHTML = "";
  document.querySelector('.js-score').innerHTML = `Wins: ${ob.wins} Ties:${ob.ties} Loses: ${ob.loses}`;

  let allButton = document.querySelectorAll('.user-move-column button')
  allButton.forEach(element => {
    element.classList.remove('move-selected')
    element.classList.add('move-notselected')
  });
  
  document.querySelector('.com-move-frame').classList.remove('move-selected-com')
  document.querySelector('.com-move-frame').classList.add('move-notselected')
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}