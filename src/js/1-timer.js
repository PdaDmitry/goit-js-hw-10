'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
input.classList.add('input');
// input.textContent = new Date();
// console.log(input.textContent);

const button = document.querySelector('button');
button.classList.add('btn-start');

// const currentDate = new Date();

// // Get year, month, day, hours, and minutes
// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
// const day = String(currentDate.getDate()).padStart(2, '0');
// const hours = String(currentDate.getHours()).padStart(2, '0');
// const minutes = String(currentDate.getMinutes()).padStart(2, '0');

// // Format the date and time as needed
// const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
// input.textContent = formattedDateTime;
// console.log(formattedDateTime);
