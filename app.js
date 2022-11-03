/* Imports */

/* Get DOM Elements */
const activitiesSelect = document.getElementById('activities-select');
const activitiesImg = document.getElementById('activities-img');
const activitiesChangeCounter = document.getElementById('activities-counter');
/* State */

let activitiesCounter = 0;

/* Events */
activitiesSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    activitiesImg.src = `./assets/activities-${value}.jpg`;

    activitiesCounter++;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
