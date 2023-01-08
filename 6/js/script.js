// Меню

const menuBtn = document.querySelector('.navigation__toggle');
const menuNav = document.querySelector('.navigation__nav');
const menuLink = document.querySelectorAll('.navigation__link');


if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('navigation__nav--open');
  });
}
