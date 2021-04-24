const closePopapIcon = document.querySelector('.close-popap_icon');
const askToPhoneBtn = document.querySelector('.phone__discription');
const contactPopap = document.querySelector('.contact__popap');
const popupButton = document.querySelectorAll('.price__order_button');

const priceOrderButtons = document.querySelectorAll('.price__order_button');
const contactTitle = document.querySelector('.contact__title_popup');

const changePopupText = () => {
  popupButton.forEach((button) => {
    button.addEventListener('click', () => {
      switch (button.className) {
        case "price__order_button first__price_button":
          contactTitle.innerText = 'Оставьте заявку на пакет «Охотник» и мы свяжемся с вами в ближайшее время'
          break;
        case "price__order_button second__price_button":
          contactTitle.innerText = 'Оставьте заявку на пакет «Дневной дозор» и мы свяжемся с вами в ближайшее время'
          break;
        case "price__order_button third__price_button":
          contactTitle.innerText = 'Оставьте заявку на пакет «All inclusive v1.0» и мы свяжемся с вами в ближайшее время'
          break;
        case "price__order_button fourth__price_button":
          contactTitle.innerText = 'Оставьте заявку на пакет «All inclusive v2.0» и мы свяжемся с вами в ближайшее время'
          break;
        default:
          contactTitle.innerText = 'Оставьте заявку на подбор автомобиля  и мы свяжемся с вами в ближайшее время'
      }
      contactPopap.classList.remove('hide__popup');
    })
  });
};

askToPhoneBtn.addEventListener('click', () => {
  contactPopap.classList.remove('hide__popup');
});

closePopapIcon.addEventListener('click', () => {
  contactPopap.classList.add('hide__popup');
});

changePopupText();
