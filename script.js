'use strict';

const toggleBtn = document.querySelectorAll('.btn-toggle');
const secondBtn = document.querySelector('#second-button');
const sections = document.querySelectorAll('.section');

// revealing elements on About and Project content
const revealElem = function (entries, oberver) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  oberver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealElem, {
  root: null,
  threshold: 0.01,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// change theme button
if (secondBtn) {
  secondBtn.addEventListener('click', function () {
    toggleBtn.forEach((button) => {
      if (button.classList.contains('hidden')) {
        button.classList.remove('hidden');
      } else {
        button.classList.add('hidden');
      }
    });
  });
}

// smooth scrolling on <a>
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
});

window.onload = function () {
  if (!window.location.hash) return;
  var sectionToScroll = document.querySelector(window.location.hash);
  setTimeout(function () {
    if (
      sectionToScroll &&
      sectionToScroll.classList.contains('section--hidden')
    ) {
      sectionToScroll.classList.remove('section--hidden');
    }
  }, 200);
};
