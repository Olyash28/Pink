const toggleBtn = document.querySelectorAll('.slider__toggle');
const slide = document.querySelectorAll('.slider__slide');

toggleBtn.forEach(function (item, index) {
  item.addEventListener('click', function () {
    let btnId = item.getAttribute('data-btn');
    let currentToggle = document.querySelector(btnId);

    toggleBtn.forEach(function (element) {
      element.classList.remove('slider__toggle--current');
    });

    slide.forEach(function (elem) {
      elem.classList.remove('slider__slide--current');
    })

    item.classList.add('slider__toggle--current');
    currentToggle.classList.add('slider__slide--current');
  });
})

const sliderArrowLeft = document.querySelector('.slider__arrow--left');
const sliderArrowRight = document.querySelector('.slider__arrow--right');

sliderArrowRight.addEventListener('click', () => {
  const realArrayFromSlides = Array.from(slide);
  const findActiveIndex = realArrayFromSlides
    .findIndex((item) => item.classList.contains('slider__slide--current'));

  slide[findActiveIndex].classList.remove('slider__slide--current');

  if(findActiveIndex + 1 >= realArrayFromSlides.length) {
    slide[0].classList.add('slider__slide--current');
  } else {
    slide[findActiveIndex + 1].classList.add('slider__slide--current');
  }
});

sliderArrowLeft.addEventListener('click', () => {
  const realArrayFromSlides = Array.from(slide);
  const findActiveIndex = realArrayFromSlides
    .findIndex((item) => item.classList.contains('slider__slide--current'));

  slide[findActiveIndex].classList.remove('slider__slide--current');

  if(findActiveIndex - 1 < 0) {
    slide[realArrayFromSlides.length - 1].classList.add('slider__slide--current');
  } else {
    slide[findActiveIndex - 1].classList.add('slider__slide--current');
  }
});


