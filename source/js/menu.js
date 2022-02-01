const burger = document.querySelector('.header-top__burger');
const headerTop = document.querySelector('.header-top');
const nav = document.querySelector('.main-nav');

burger.addEventListener('click', (e) => {
  headerTop.classList.toggle('header-top--open');
  nav.classList.toggle('main-nav--open');
});

