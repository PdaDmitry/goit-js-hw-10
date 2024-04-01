'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-start');

const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

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

let diffDate; // = futureDate - currentTime;
let userSelectedDate;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // console.log(selectedDates[0]);
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

// console.log(convertMs(20000));

button.addEventListener('click', startTimer);

class Time {
  constructor(clock) {
    this.idInterval = null;
    this.clock = clock;
  }

  start() {
    this.idInterval = setInterval(() => {
      let currentTime = Date.now();
      diffDate = userSelectedDate - currentTime;
      if (diffDate > 0) {
        this.clock();
        // setTimeout(() => {
        //   clearInterval(this.idInterval);
        //   // console.log('Stop');
        // }, 50000);
      } else {
        console.log('Choose date in the future!');
        clearInterval(this.idInterval);
      }
    }, 1000);
    // setTimeout(() => {
    //   clearInterval(this.idInterval);
    //   console.log('Stop');
    // }, 6000);
  }
}

function test() {
  let objDataDate = convertMs(diffDate);
  let { days, hours, minutes, seconds } = objDataDate;
  days = days.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  daysElem.textContent = days;
  hoursElem.textContent = hours;
  minutesElem.textContent = minutes;
  secondsElem.textContent = seconds;
}

let timer = new Time(test);

function startTimer() {
  timer.start();
}

// function formatTime() {}
