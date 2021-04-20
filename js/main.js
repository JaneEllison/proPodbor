const descriptionAddItemsButton = document.querySelector('.description__add_items-block');
const descriptionInfoItems = document.querySelectorAll('.hidden-item');
const descriptionDownArrow = document.querySelector('.description_down-arrow');
const toggleMenu = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header__navigation');

const secondarySliderOptions = {
  rewind: true,
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
  autoplay: true,
  interval: '10000',
  perMove: 1,
  padding: {
    bottom: '10px',
  },
  classes: {
    pagination: 'splide__pagination advantages-pagination',
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
  autoplay: true,
  interval: '10000',
  classes: {
    pagination: 'splide__pagination advantages-pagination',
  }
};

const advantagesSlider = new Splide('#advantages-slider', advantagesSliderOptions);
const questionsSlider = new Splide('#questions-slider', questionsSliderOptions);

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

descriptionAddItemsButton.addEventListener('click', () => {
  descriptionInfoItems.forEach((item) => {
    item.classList.toggle('description__info_item-hide');
  });
  descriptionDownArrow.classList.toggle('description_down-arrow-hide')
});

toggleMenu.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('on');
  headerNav.classList.toggle('on');

  if(event.target.closest('.on')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  createExampleSlider();
  advantagesSlider.mount();
  questionsSlider.mount();
});

const changeDescriptionAddItems = () => {
  if (window.matchMedia("(max-width: 980px)").matches) {
    descriptionInfoItems.forEach((item) => {
      item.classList.add('description__info_item-hide');
    });
    descriptionDownArrow.classList.add('description_down-arrow-hide')
  };
}

changeDescriptionAddItems();
window.addEventListener('resize', () => changeDescriptionAddItems);