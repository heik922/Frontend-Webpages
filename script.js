'use strict';

const toggleBtn = document.querySelectorAll('.btn-toggle');
const secondBtn = document.querySelector('#second-button');

console.log(toggleBtn);

secondBtn.addEventListener('click', function () {
  toggleBtn.forEach((button) => {
    if (button.classList.contains('hidden')) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
});
