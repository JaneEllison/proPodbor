const slidersData = [
  {
    primarySliderId: '#primary-slider-1',
    secondarySliderId: '#secondary-slider-1',
  },
  {
    primarySliderId: '#primary-slider-2',
    secondarySliderId: '#secondary-slider-2',
  },
  {
    primarySliderId: '#primary-slider-3',
    secondarySliderId: '#secondary-slider-3',
  },
];

let buttonToTop = document.querySelector('.toTop');

const secondarySliderOptions = {
  fixedWidth: 90,
  fixedHeight: 80,
  gap: 12,
  focus: 'left',
  arrows: false,
  easing: 'cubic-bezier(.17,.67,.83,.67)',
  pagination: false,
  pauseOnHover: true,
  drag: true,
  isNavigation: true,
  cover: true,
  margin: {
    top: '10px',
  },
  direction: 'ltr',
  breakpoints: {
    '1024': {
      fixedWidth: 60,
      fixedHeight: 50,
    },
    '980': {
      fixedWidth: 60,
      fixedHeight: 50,
    },
    '510': {
      fixedWidth: 40,
      fixedHeight: 35,
      gap: 0,
    },
  },
};
const primarySliderOptions = {
  type: 'fade',
  fixedWidth: 570,
  fixedHeight: 336,
  focus: 'center',
  pagination: false,
  arrows: true,
  cover: true,
  isNavigation: true,
  perMove: 1,
  breakpoints: {
    '1024': {
      fixedWidth: 450,
      fixedHeight: 288,
    },
    '980': {
      fixedWidth: '100%',
      height: '50%',
      focus: 'center',
    },
    '510': {
      fixedWidth: 320,
      height: '60%',
    },
  },
};
const advantagesSliderOptions = {
  rewind: true,
  fixedWidth: 470,
  fixedHeight: 80,
  gap: 0,
  focus: 'left',
  trimSpace: false,
  arrows: false,
  easing: 'linear',
  pagination: true,
  pauseOnHover: true,
  drag: true,
  isNavigation: true,
  direction: 'ltr',
  perMove: 1,
  padding: {
    bottom: '10px',
  },
  classes: {
    pagination: 'splide__pagination advantages-pagination',
  },
  breakpoints: {
    '510': {
      fixedWidth: 300,
      fixedHeight: 85,
      padding: {
        bottom: '0',
      },
    },
  }
};
const questionsSliderOptions = {
  rewind: true,
  fixedWidth: 560,
  fixedHeight: 82,
  gap: 10,
  focus: 'left',
  trimSpace: false,
  arrows: false,
  easing: 'linear',
  pagination: true,
  pauseOnHover: true,
  drag: true,
  isNavigation: true,
  direction: 'ltr',
  classes: {
    pagination: 'splide__pagination advantages-pagination',
  },
  breakpoints: {
    '510': {
      fixedWidth: 275,
      fixedHeight: 80,
      focus: 'left',
    },
  }
};

const advantagesSlider = new Splide('#advantages-slider', advantagesSliderOptions);
const questionsSlider = new Splide('#questions-slider', questionsSliderOptions);

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();

    const blockId = anchor.getAttribute('href').substr(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

const scrollTo = (to, duration) => {
  const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
      else {
        element.scrollTop = to;
      }
    };
  animateScroll();
};

document.addEventListener('DOMContentLoaded', function () {
  new WOW().init();

  window.addEventListener('scroll', function () {
    if (pageYOffset > 100) {
      buttonToTop.classList.add('show');
    } else {
      buttonToTop.classList.remove('show');
    }
  });

  buttonToTop.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 700);
  };

  syncSliders(buildSliders(slidersData));
  advantagesSlider.mount();
  questionsSlider.mount();
});

function buildSliders(data) {
  return data.map((slide) => {
    const primarySlider = new Splide(slide.primarySliderId, primarySliderOptions);
    const secondarySlider = new Splide(slide.secondarySliderId, secondarySliderOptions);
    return [primarySlider, secondarySlider]
  });
};

function syncSliders(buildSlidersArray) {
  buildSlidersArray.forEach((slider) => {
    const [primarySlider, secondarySlider] = slider;
    secondarySlider.mount();
    primarySlider.sync(secondarySlider).mount();
  })
};

const settings = {
  noScrollbars: true,
  buttons: true,
  // fullScreen: true,
};

baguetteBox.run('.gallery', settings);
baguetteBox.run('.gallery-2', settings);
baguetteBox.run('.gallery-3', settings);

const btnPrevGallery = document.getElementById('previous-button');
btnPrevGallery.innerHTML = `<img src="./images/bi_arrow-left-circle.svg" alt="previous-button">`;
const btnNextGallery = document.getElementById('next-button');
btnNextGallery.innerHTML = `<img src="./images/bi_arrow-left-circle.svg" alt="next-button">`;