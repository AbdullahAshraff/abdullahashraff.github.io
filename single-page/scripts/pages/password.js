import { renderStartBrowsing } from "./browsing.js";

export function renderPasswordPage() {
    document.querySelector('main').innerHTML = `
    <div class="page-title">Password</div>
    <form id="personal-info-form" method="GET">
        <div class="field-container">
            <label for="password">Enter your password</label>
            <input type="password" id="password" name="password">
        </div>
        <button class="next-button">Next</button>
    </form>`;
    
    document.querySelector('.next-button').addEventListener('click',()=>{
        renderStartBrowsing();
    });
}
