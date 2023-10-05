
const themels = {
  light: {
    '--whole-bck-color': 'white',
    '--highlight-color': 'orange',
    '--highlight-color2': 'rgb(212, 138, 0)',
    '--highlight-color3': 'rgb(143, 93, 0)',
    '--default-color': 'rgb(230, 230, 230)',
    '--default-color2': 'rgb(185, 185, 185)',
    '--default-color3': 'rgb(139, 139, 139)',
    '--result-color': 'red',
    '--main-border':'rgb(170, 170, 170)',
    '--button-text-color':'black',
  },
  dark: {
    '--whole-bck-color': '#333333',
    '--highlight-color': 'green',
    '--highlight-color2': 'rgb(212, 138, 0)',
    '--highlight-color3': 'rgb(143, 93, 0)',
    '--default-color': '#555555',
    '--default-color2': 'rgb(185, 185, 185)',
    '--default-color3': 'rgb(139, 139, 139)',
    '--result-color': 'red',
    '--main-border':'#999999',
    '--button-text-color':'white',
  },
};

const themelsNames = Object.keys(themels); // ['light','dark']

const applyth = function (theme) {
  for (const prop in themels[theme]) {
    document.body.style.setProperty(prop, themels[theme][prop]);
  }
}

let curTheme = localStorage.getItem('calculator-theme') ?? 'light';
let curThemeIdx;
changeTheme(curTheme);

function changeTheme(themeName) {

  curTheme = themeName;
  curThemeIdx = themelsNames.indexOf(curTheme);

  if(curThemeIdx===-1){
    curTheme = 'light';
    curThemeIdx = 0;
  }

  localStorage.setItem('calculator-theme', curTheme);
  applyth(curTheme);

}

function themeRoll() {

  curThemeIdx = (curThemeIdx+1) % themelsNames.length;
  curTheme = themelsNames[curThemeIdx];
  localStorage.setItem('calculator-theme', curTheme);
  applyth(curTheme);

}
