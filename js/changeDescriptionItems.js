const descriptionAddItemsButton = document.querySelector('.description__add_items-block');
const descriptionRemoveItemsButton = document.querySelector('.description__hide_items-block');
const hiddenBlock = document.querySelector('.hidden__block');
const descriptionDownArrow = document.querySelector('.description_down-arrow');

const changeDescriptionAddItems = () => {
  if (window.matchMedia('(max-width: 980px)').matches) {
    hiddenBlock.classList.remove('show');
    descriptionAddItemsButton.classList.remove('hide');
    descriptionRemoveItemsButton.classList.add('hide');
  };
};

descriptionAddItemsButton.addEventListener('click', () => {
  hiddenBlock.classList.toggle('show');
  descriptionAddItemsButton.classList.toggle('hide');
  descriptionRemoveItemsButton.classList.toggle('hide');
});

descriptionRemoveItemsButton.addEventListener('click', () => {
  hiddenBlock.classList.toggle('show');
  descriptionAddItemsButton.classList.toggle('hide');
  descriptionRemoveItemsButton.classList.toggle('hide');
});


window.addEventListener('resize', () => {
  changeDescriptionAddItems();
});

document.addEventListener('DOMContentLoaded', () => {
  changeDescriptionAddItems();
})











// 2. Добавить анимацию при скролле на якорях
// 3. Посмотреть еще раз в слайдере интеграцию с свайпом пальцем