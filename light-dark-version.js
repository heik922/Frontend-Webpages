const toggleBtn = document.querySelector('.btn-toggle');
const navbar = document.querySelectorAll('.navbar-links');

toggleBtn.addEventListener('click', function () {
  if (
    toggleBtn.src === `https://img.icons8.com/ios/50/5850ab/toggle-on--v2.png`
  ) {
    toggleBtn.src = `https://img.icons8.com/ios/50/fc6e20/toggle-off--v2.png`;
    document.querySelector('header').style.background = `#1b1b1b`;

    document.querySelector('header').style.boxShadow = '0px 0px 10px #fc6e20';
    document.querySelector('header').style.borderBottom = '#fc6e20 1px solid';

    for (let i = 0; i < navbar.length; i++) {
      navbar[i].style.color = '#fc6e20';
    }
  } else {
    toggleBtn.src = `https://img.icons8.com/ios/50/5850ab/toggle-on--v2.png`;
    document.querySelector('header').style.background = `white`;
    document.querySelector('header').style.boxShadow =
      '0px 0px 10px  var(--light-version-purple)';
    document.querySelector('header').style.borderBottom =
      'var(--light-version-purple) 1px solid';
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].style.color = 'black';
    }
  }
});
