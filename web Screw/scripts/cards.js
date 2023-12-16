const CARDS = [
  ['1', 'رقم 1 عادي', '1.png'],
  ['2', 'رقم 2 عادي', '2.png'],
  ['3', 'رقم 3 عادي', '3.png'],
  ['4', 'رقم 4 عادي', '4.png'],
  ['5', 'رقم 5 عادي', '5.png'],
  ['6', 'رقم 6 عادي', '6.png'],
  ['7', 'بص في ورقتك', '7.png'],
  ['8', 'بص في ورقتك', '8.png'],
  ['9', 'بص في ورقة غيرك', '9.png'],
  ['10', 'بص في ورقة غيرك', '10.png'],
  ['+20', 'حاسب من الكارت ده عشان ب20 نقطة', '+20.png'],
  ['-1', 'اجمد كارت في اللعبة', '-1.png'],
  ['سكرو درايفر', 'كارت جامد بيتحسب بصفر', 'driver.png'],
  ['سكرو احمر', 'كارت سيئ جدا ب25 نقطة', 'screwred.png'],
  ['بصرة', 'بترميها وبترمي ورقة من ورقك', 'basra.png'],
  ['خد وهات', 'تبدل ورقة من عندك مع حد تاني من غير ما تشوفهم', 'khod.png'],
  ['كعب داير', 'شوف ورقة من عندك ومن عند كل واحد', 'kaab.png'],
];

const FOLDER = '/footages/cards/'
const main_rules_page = document.querySelector('main');
const CARD_GRID = document.getElementById('card-grid');
main_rules_page.appendChild(CARD_GRID)

for (let i = 0; i < CARDS.length; i++) {

  let card = document.createElement('div');
  card.setAttribute('class','card')

  let inner_card = document.createElement('div');
  inner_card.setAttribute('class', 'inner-card');



  let card_front = document.createElement('div');
  card_front.setAttribute('class', 'card-front');



  let card_img = document.createElement('img');
  card_img.setAttribute('class','card-img');
  card_img.setAttribute('src',`${FOLDER}${CARDS[i][2]}`);
  card_img.setAttribute('alt',`${CARDS[i][0]}`);
  card_img.innerText = CARDS[i][0];
  card_front.appendChild(card_img);



  let card_back = document.createElement('div');
  card_back.setAttribute('class', 'card-back');


  let card_title = document.createElement('p');
  card_title.setAttribute('class','card_title');
  card_title.innerText = CARDS[i][0];
  if (card_title.innerText.length>4){
    card_title.classList.add('card_title_long');
  }
  card_back.appendChild(card_title);

  
  let card_desc = document.createElement('p');
  card_desc.setAttribute('class','card_desc');
  card_desc.innerText = CARDS[i][1];
  card_back.appendChild(card_desc);
  
  inner_card.appendChild(card_front);
  inner_card.appendChild(card_back);
  card.appendChild(inner_card);

  CARD_GRID.appendChild(card);
}
