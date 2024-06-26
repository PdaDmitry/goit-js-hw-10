'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementById('datetime-picker');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-start');
button.disabled = true;

const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

button.addEventListener('click', startTimer);

function formatTime(currentValue) {
  let date = currentValue;

  let year = String(date.getFullYear()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  let houres = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let sec = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${houres}:${minutes}:${sec}`;
}

input.value = formatTime(new Date());

let userSelectedDate;
let currentTime;
let diffDate;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    currentTime = Date.now();
    diffDate = userSelectedDate - currentTime;
    if (diffDate > 0) {
      button.disabled = false;
      button.classList.add('btn-normal');
    } else {
      button.disabled = true;
      button.classList.remove('btn-normal');
      iziToast.show({
        message: 'Please choose a date in the future',
        messageSize: '16px',
        messageWeight: '400',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        position: 'topRight',
        iconUrl: '../img/error.svg',
      });
    }
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
  return { days, hours, minutes, seconds };
}

button.addEventListener('click', startTimer);

class Time {
  constructor(clock) {
    this.idInterval = null;
    this.clock = clock;
  }

  start() {
    this.idInterval = setInterval(() => {
      currentTime = Date.now();
      diffDate = userSelectedDate - currentTime;
      if (diffDate > 0) {
        this.clock();
      } else {
        clearInterval(this.idInterval);
        input.disabled = false;
      }
    }, 1000);
  }
}

function addLeadingZero() {
  let objDataDate = convertMs(diffDate);
  let { days, hours, minutes, seconds } = objDataDate;

  daysElem.textContent = days.toString().padStart(2, '0');
  hoursElem.textContent = hours.toString().padStart(2, '0');
  minutesElem.textContent = minutes.toString().padStart(2, '0');
  secondsElem.textContent = seconds.toString().padStart(2, '0');
}

const timer = new Time(addLeadingZero);

function startTimer() {
  timer.start();
  input.disabled = true;
  button.disabled = true;
  button.classList.remove('btn-normal');
}
