const toggleMenu = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header__navigation');
const headerNavigationLinks = document.querySelectorAll('.header__navigation_link');

const openMenu = () => {
  headerNavigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.style.overflow = 'auto';
      toggleMenu.classList.remove('on');
      headerNav.classList.remove('on');
    })
  });
};

openMenu();

toggleMenu.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('on');
  headerNav.classList.toggle('on');

  if (event.target.closest('.on')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});