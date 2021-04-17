const secondarySliderOptions = {
  rewind: false,
  fixedWidth: 90,
  fixedHeight: 80,
  gap: 12,
  focus: 'left',
  arrows: false,
  easing: 'linear',
  autoplay: true,
  pagination: false,
  pauseOnHover: true,
  drag: true,
  isNavigation: true,
  cover: true,
  margin: {
    top : '10px',
  },
  direction: 'ltr',
};

const primarySliderOptions = {
  type: 'fade',
  fixedWidth: 570,
  fixedHeight: 336,
  pagination: false,
  arrows: true,
  cover: true,
  isNavigation: true,
};

document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', secondarySliderOptions ).mount();
	var primarySlider = new Splide( '#primary-slider', primarySliderOptions );
	
	primarySlider.sync( secondarySlider ).mount();

  var secondarySlider2 = new Splide( '#secondary-slider-2', secondarySliderOptions ).mount();
	var primarySlider2 = new Splide( '#primary-slider-2', primarySliderOptions );
	
	primarySlider2.sync( secondarySlider2 ).mount();

  var secondarySlider3 = new Splide( '#secondary-slider-3', secondarySliderOptions ).mount();
	var primarySlider3 = new Splide( '#primary-slider-3', primarySliderOptions );
	
	primarySlider3.sync( secondarySlider3 ).mount();
} );