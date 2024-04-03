('use strict');

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const promiseForm = document.querySelector('.form');

const firstLabel = document.querySelector('label');
firstLabel.classList.add('form-label');
const delayInput = document.querySelector('[type="number"]');
delayInput.classList.add('form-label-input');

const formFieldset = document.querySelector('fieldset');
formFieldset.classList.add('form-fieldset');

const fieldsetLegend = document.querySelector('legend');
fieldsetLegend.classList.add('form-fieldset-legend');

const firstLabelFeldset = formFieldset.querySelector('label');
firstLabelFeldset.classList.add('form-fieldset-label');

const secondLabelFeldset = firstLabelFeldset.nextElementSibling;
secondLabelFeldset.classList.add('form-fieldset-label');

const inputFulfilled = document.querySelector('[value="fulfilled"]');
inputFulfilled.classList.add('form-fieldset-label-input');

const inputRejected = document.querySelector('[value="rejected"]');
inputRejected.classList.add('form-fieldset-label-input');

const btn = document.querySelector('button');
btn.classList.add('form-btn');

function creatPromise(delay, isValid) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
  return promise;
}

promiseForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = promiseForm.elements.delay.value;
  const state = promiseForm.elements.state.value;

  const initPromise = creatPromise(delay, state);
  promiseForm.reset();
  initPromise
    .then(str => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay} ms`,
        messageSize: '16px',
        messageWeight: '400',
        backgroundColor: '#59a10d',
        messageColor: '#fff',
        position: 'topRight',
      });
    })
    .catch(err => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay} ms`,
        messageSize: '16px',
        messageWeight: '400',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        position: 'topRight',
      });
    });
}
