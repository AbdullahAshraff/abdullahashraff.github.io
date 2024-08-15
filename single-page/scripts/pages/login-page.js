import { renderStartBrowsing } from "./browsing.js";

export function renderLoginPage(){
    document.querySelector('main').innerHTML = `
        <div class="page-title"> Register</div>
        <form id="personal-info-form" method="GET">
            <div class="field-container">
                <label for="email">Email</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="field-container">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>
            <button class="next-button">Next</button>
        </form>`;
    document.querySelector('.next-button').addEventListener('click', () => {
        renderStartBrowsing();
    });
}
