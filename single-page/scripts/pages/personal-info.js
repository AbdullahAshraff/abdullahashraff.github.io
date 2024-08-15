import { renderPasswordPage } from "./password.js";

export function renderPersonal() {
    document.querySelector('main').innerHTML = `
 
        <div class="page-title"> Register</div>
        <form id="personal-info-form" method="GET">
            <div class="name-container">
                <div class="field-container">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first_name">
                </div>
                <div class="field-container">
                    <label for="last-name" name="last_name">Last Name</label>
                    <input type="text" id="last-name">
                </div>
            </div>
            <div class="field-container">
                <label for="birth-date">Birth Date</label>
                <div class="birth-date">
                    <input type="number" id="birth-day" name="birth_day">
                    <input type="number" id="birth-month" name="birth_month">
                    <input type="number" id="birth-year" name="birth_year">
                </div>
            </div>
            <button class="next-button">Next</button>
        </form>`;
    document.querySelector('.next-button').addEventListener('click', () => {
        renderPasswordPage();
    });
}
