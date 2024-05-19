const headerMenu = document.querySelector('.js-header__menu'),
  headerBurgerButton = document.querySelector('.js-header__burger'),
  buttonSearch = document.querySelector('.js-header__search'),
  formSearch = document.querySelector('.js-header__form-search')

/* ? ======= BURGER START ======= */
headerBurgerButton.addEventListener('click', () => {

  headerBurgerButton.classList.toggle('header__burger-close')
  headerMenu.classList.toggle('header__menu-active')
})
/*? ======= BURGER END ======= */

/* ? ======= SEARCH START ======= */
buttonSearch.addEventListener('click', () => {
  headerMenu.classList.toggle('header__none')
  formSearch.classList.toggle('header__active')
})
/* ? ======= SEARCH END ======= */


















/* ? ======= HEADER END ======= */
