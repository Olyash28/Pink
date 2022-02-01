const btnSubmit = document.querySelector('.forms__btn-green');
const error = document.querySelector('.popup--error');
const send = document.querySelector('.popup--send');

const btnClose = document.querySelector('.popup__btn--error');

btnSubmit.addEventListener('click', () => {
  error.classList.remove('popup-none');
  // send.classList.remove('popup-none');
});

btnClose.addEventListener('click', () => {
  error.classList.add('popup-none');
});
