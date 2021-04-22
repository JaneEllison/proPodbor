const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const slider = document.querySelector('div.slider');
const sliderCount = document.querySelector('.slider__count');
let viewSlide = 0;
let viewport;

btnNext.addEventListener('click', function () {
  if (viewSlide < 2) { 
      viewSlide++;
  } else {
      viewSlide = 0;
  }
  slider.style.left = -viewSlide * viewport + 'px';
  sliderCount.innerText = `0${viewSlide +1 }/03`;
});

btnPrev.addEventListener('click', function () {
  if (viewSlide > 0) { 
      viewSlide--; 
  } else {
      viewSlide = 2; 
  }
  slider.style.left = -viewSlide * viewport + 'px';
  sliderCount.innerText = `0${viewSlide +1 }/03`;
});

window.addEventListener('resize', () => {
  viewport = document.querySelector('.slider__mobile').offsetWidth;
  slider.style.left = -viewSlide * viewport + 'px';
});