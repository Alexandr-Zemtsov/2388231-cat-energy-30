/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-header__toggle-menu');

navMain.classList.remove('main-nav__list--nojs');
navToggle.classList.remove('main-header__toggle-menu--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__list--opened')) {
    navMain.classList.remove('main-nav__list--opened');
    navMain.classList.add('main-nav__list--closed');
    navToggle.classList.toggle('main-header__toggle-menu--closes');
    navToggle.classList.toggle('main-header__toggle-menu--opens');
  } else {
    navMain.classList.add('main-nav__list--opened');
    navMain.classList.remove('main-nav__list--closed');
    navToggle.classList.toggle('main-header__toggle-menu--opens');
    navToggle.classList.toggle('main-header__toggle-menu--closes');
  }
});
