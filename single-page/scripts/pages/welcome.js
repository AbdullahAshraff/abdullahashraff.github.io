import { renderPersonal } from "./personal-info.js";
import { renderLoginPage } from "./login-page.js";
export function renderWelcome(){
    document.querySelector('main').innerHTML = `
        <div class="welcome-text"> Welcome to my website. Let's get started!</div>
        <div><button class="register-button">Register now</button></div>
        <div><button class="login-button">Login</button></div>
    `
    document.querySelector('.register-button').addEventListener('click',()=>{
        renderPersonal();
    });
    document.querySelector('.login-button').addEventListener('click',()=>{
        renderLoginPage();
    });
}
