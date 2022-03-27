'use strict';

const toggleBtn = document.querySelectorAll('.btn-toggle');
const secondBtn = document.querySelector('#second-button');
const sections = document.querySelectorAll('.section');

// revealing elements on About and Project content
const revealElem = function (entries, oberver) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  oberver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealElem, {
  root: null,
  threshold: 0.000001,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// change theme button
secondBtn.addEventListener('click', function () {
  toggleBtn.forEach((button) => {
    if (button.classList.contains('hidden')) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
});

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

// var sectionLinks = document.querySelectorAll('[data-scroll]');

// sectionLinks.forEach((link) => {
//   console.log('LINKS : ........ ', link);
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     var sectionToScroll = document.getElementById(event.target.datalist.scroll);
//     console.log('SECTION TO SCROLL ', sectionToScroll);
//     var { y: coord_y } = sectionToScroll.getBoundingClientRect();
//     window.scrollTo({
//       x: 0,
//       y: coord_y,
//       behavior: 'smooth',
//     });
//   });
// });

window.onload = function () {
  var sectionToScroll = document.querySelector(window.location.hash);
  setTimeout(function () {
    if (
      sectionToScroll &&
      sectionToScroll.classList.contains('section--hidden')
    ) {
      sectionToScroll.classList.remove('section--hidden');
      // var { y: coord_y } = sectionToScroll.getBoundingClientRect();
      // window.scrollTo({
      //   x: 0,
      //   y: coord_y,
      //   behavior: 'smooth',
      // });
    }
  }, 200);
};
