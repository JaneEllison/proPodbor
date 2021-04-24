const descriptionAddItemsButton = document.querySelector('.description__add_items-block');
const descriptionInfoItems = document.querySelectorAll('.hidden-item');
const descriptionDownArrow = document.querySelector('.description_down-arrow');

const changeDescriptionAddItems = () => {
  if (window.matchMedia('(max-width: 980px)').matches) {
    descriptionInfoItems.forEach((item) => {
      item.classList.add('description__info_item-hide');
    });
    descriptionDownArrow.classList.add('description_down-arrow-hide')
  };
};

changeDescriptionAddItems();

descriptionAddItemsButton.addEventListener('click', () => {
  descriptionInfoItems.forEach((item) => {
    item.classList.toggle('description__info_item-hide');
  });
  descriptionDownArrow.classList.toggle('description_down-arrow-hide')
});

window.addEventListener('resize', () => {
  console.log('yep')
  changeDescriptionAddItems();
})
