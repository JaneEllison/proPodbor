const secondarySliderOptions = {
  rewind: true,
  fixedWidth: 90,
  fixedHeight: 80,
  gap: 12,
  focus: 'left',
  arrows: false,
  easing: 'linear',
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
    }
  },
};

const primarySliderOptions = {
  rewind: true,
  type: 'fade',
  fixedWidth: 570,
  fixedHeight: 336,
  pagination: false,
  arrows: true,
  cover: true,
  isNavigation: true,
  breakpoints: {
    '1024': {
      fixedWidth: 450,
      fixedHeight: 288,
    }
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
  padding: {
    bottom: '10px',
  },
  breakpoints: {
    640: {
      perPage: 3,
    },
  },
  classes: {
    pagination: 'splide__pagination advantages-pagination',
  }
}

const advantagesSlider = new Splide('#advantages-slider', advantagesSliderOptions).mount();
const createExampleSlider = () => {
  var secondarySlider = new Splide('#secondary-slider', secondarySliderOptions).mount();
  var primarySlider = new Splide('#primary-slider', primarySliderOptions);

  primarySlider.sync(secondarySlider).mount();

  var secondarySlider2 = new Splide('#secondary-slider-2', secondarySliderOptions).mount();
  var primarySlider2 = new Splide('#primary-slider-2', primarySliderOptions);

  primarySlider2.sync(secondarySlider2).mount();

  var secondarySlider3 = new Splide('#secondary-slider-3', secondarySliderOptions).mount();
  var primarySlider3 = new Splide('#primary-slider-3', primarySliderOptions);

  primarySlider3.sync(secondarySlider3).mount();
};

document.addEventListener('DOMContentLoaded', () => {
  createExampleSlider();
  addAdvantagesSlider();
});
