const headerMenu = document.querySelector('.header__menu-js'),
  headerBurgerButton = document.querySelector('.header__burger-js'),
  buttonSearch = document.querySelector('.header__search-js'),
  formSearch = document.querySelector('.header__form-search-js')

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
