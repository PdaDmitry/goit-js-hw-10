'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-start');

function formatTime(currentValue) {
  let date = currentValue;

  let year = String(date.getFullYear()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  let houres = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let sec = String(date.getSeconds()).padStart(2, '0');
  let currentDate = `${year}-${month}-${day} ${houres}:${minutes}:${sec}`;
  // let arrDate = [year, month, day, houres, minutes, sec];
  return currentDate;
}

// const dateInput = formatTime(new Date());
// const [year, month, day, houres, minutes, sec] = dateInput;
// input.value = `${year}-${month}-${day} ${houres}:${minutes}:${sec}`;
input.value = formatTime(new Date());
// let futureDate = new Date(2024, 3, 1, 19, 0).getTime();
// let currentTime = Date.now();

let diffDate; // = futureDate - currentTime;

function fromMsToDate() {
  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0');
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  let min = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0');
  console.log(`${days} ${hours} ${min} ${seconds}`);
}

// console.log(fromMsToDate(diffDate));

button.addEventListener('click', startTimer);

class Time {
  constructor(clock) {
    this.idInterval = null;
    this.clock = clock;
  }

  start() {
    let currentTime = Date.now();
    this.idInterval = setInterval(() => {
      let futureDate = new Date(2024, 3, 1, 19, 0).getTime();
      let currentTime = Date.now();
      diffDate = futureDate - currentTime;
      this.clock();
    }, 1000);
    setTimeout(() => {
      clearInterval(this.idInterval);
      console.log('Stop');
    }, 6000);
  }
}

function test() {
  // console.log(fromMsToDate(diffDate));
  fromMsToDate(diffDate);
}

let timer = new Time(test);

function startTimer() {
  timer.start();
}
