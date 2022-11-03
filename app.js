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

const favoriteInput = document.getElementById('favorite-input');
const shareButton = document.getElementById('share-button');
const favoriteList = document.getElementById('favorite-list');

/* State */

let activitiesCounter = 0;
let foodCounter = 0;
let drinkCounter = 0;
let favorites = [];

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

shareButton.addEventListener('click', () => {
    favorites.push(favoriteInput.value);
    displayFavorites();
    favoriteInput.value = '';
});

/* Display Functions */
function displayStats() {
    activitiesChangeCounter.textContent = `${activitiesCounter}`;
    foodChangeCounter.textContent = `${foodCounter}`;
    drinkChangeCounter.textContent = `${drinkCounter}`;
}

function displayFavorites() {
    favoriteList.textContent = '';
    for (let favorite of favorites) {
        const p = document.createElement('p');
        p.textContent = favorite;
        favoriteList.append(p);
    }
}

// (don't forget to call any display functions you want to run on page load!)
