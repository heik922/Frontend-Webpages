'use strict';

const toggleBtn = document.querySelectorAll('.btn-toggle');
const secondBtn = document.querySelector('#second-button');

secondBtn.addEventListener('click', function () {
  toggleBtn.forEach((button) => {
    if (button.classList.contains('hidden')) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
});
