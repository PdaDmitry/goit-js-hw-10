'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-start');

function formatTime(CurDate) {
  let date = CurDate;
  let year = date.getFullYear();
  //   let year = String(date.getFullYear()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  let houre = String(date.getHours()).padStart(2, '0');
  let min = String(date.getMinutes()).padStart(2, '0');
  let sec = String(date.getSeconds()).padStart(2, '0');
  let currentDate = `${year}-${month}-${day} ${houre}:${min}:${sec}`;
  return currentDate;
}

input.value = formatTime(new Date());

function formatMillisecondsToDate(milliseconds) {
  // Create a new Date object with milliseconds
  let date = new Date(milliseconds);

  // Extract date and time components
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  let day = String(date.getDate()).padStart(2, '0');
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');

  // Construct the formatted date and time string
  let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

// Example usage:
// let milliseconds = 123456789; // This could be the difference you calculated: Date.now() - date;
// let formattedDateTime = formatMillisecondsToDate(milliseconds);
// console.log('Formatted Date and Time:', formattedDateTime);

// console.log('currentDate ', currentDate);
// console.log(date.getTime());  disabled to add button

button.addEventListener('click', startTimer);

class Time {
  constructor(clock) {
    this.idInterval = null;
    this.clock = clock;
  }

  start(str) {
    let currentTime = Date.now();
    this.idInterval = setInterval(() => {
      let diff = Date.now() - currentTime;
      console.log(formatTime(Date.now(diff)));
      this.clock();
    }, 1000);
    setTimeout(() => {
      clearInterval(this.idInterval);
      console.log('Stop');
    }, 6000);
  }
}

function test() {
  console.log('Hello');
}

let timer = new Time(test);

function startTimer() {
  timer.start();
}
