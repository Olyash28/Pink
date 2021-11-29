const burger = document.querySelector('.header-top__burger');
const headerTop = document.querySelector('.header-top');

burger.addEventListener('click', (e) => {
  headerTop.classList.toggle('header-top--open');
});

