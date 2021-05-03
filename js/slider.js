const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const slider = document.querySelector('div.slider');
const sliderCount = document.querySelector('.slider__count');

const slides = document.querySelectorAll('.slide');
const slidesCount = slides.length;

let viewSlide = 0;
let viewport;

btnNext.addEventListener('click', function () {
  if (viewSlide < slidesCount - 1) { 
      viewSlide++;
  } else {
      viewSlide = 0;
  }
  slider.style.left = -viewSlide * viewport + 'px';
  sliderCount.innerText = `0${viewSlide +1 }/0${slidesCount}`;
});

btnPrev.addEventListener('click', function () {
  if (viewSlide > 0) { 
      viewSlide--; 
  } else {
      viewSlide = slidesCount - 1; 
  }
  slider.style.left = -viewSlide * viewport + 'px';
  sliderCount.innerText = `0${viewSlide +1 }/0${slidesCount}`;
});

const createMobileSlider = () => {
  viewport = document.querySelector('.slider__mobile').offsetWidth;
  slider.style.left = -viewSlide * viewport + 'px';
};

window.addEventListener('resize', () => createMobileSlider());

document.addEventListener('DOMContentLoaded', () => {
  sliderCount.innerText = `0${viewSlide +1 }/0${slidesCount}`;
  createMobileSlider();
});