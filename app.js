/* Imports */

/* Get DOM Elements */
const activitiesSelect = document.getElementById('activities-select');
const activitiesImg = document.getElementById('activities-img');
const activitiesChangeCounter = document.getElementById('activities-counter');

const foodSelect = document.getElementById('food-select');
const foodImg = document.getElementById('food-img');
const foodChangeCounter = document.getElementById('food-counter');

const drinkSelect = document.getElementById('drink-select');
const drinkImg = document.getElementById('drink-img');
const drinkChangeCounter = document.getElementById('drink-counter');

/* State */

let activitiesCounter = 0;
let foodCounter = 0;
let drinkCounter = 0;

/* Events */
// activities section
activitiesSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    activitiesImg.src = `./assets/activities-${value}.jpg`;

    activitiesCounter++;

    displayStats();
});

// food section
foodSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    foodImg.src = `./assets/food-${value}.jpg`;

    foodCounter++;

    displayStats();
});

// drinks section

drinkSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    drinkImg.src = `./assets/drinks-${value}.jpg`;

    drinkCounter++;

    displayStats();
});

/* Display Functions */
function displayStats() {
    activitiesChangeCounter.textContent = `${activitiesCounter}`;
    foodChangeCounter.textContent = `${foodCounter}`;
    drinkChangeCounter.textContent = `${drinkCounter}`;
}

// (don't forget to call any display functions you want to run on page load!)
