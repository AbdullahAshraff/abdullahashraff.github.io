import { renderWelcome } from "./pages/welcome.js";
import { renderPasswordPage } from "./pages/password.js";
import { renderPersonal } from "./pages/personal-info.js";
import { renderStartBrowsing } from "./pages/browsing.js";

document.querySelector('#welcome-button').addEventListener('click',()=>{
    renderWelcome();
})
document.querySelector('#personal-info-button').addEventListener('click',()=>{
    renderPersonal();
})
document.querySelector('#password-button').addEventListener('click',()=>{
    renderPasswordPage();
})
document.querySelector('#browsing-button').addEventListener('click',()=>{
    renderStartBrowsing();
})
