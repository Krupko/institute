/* ? ======= POPUP START ======= */
const heroButtonPhone = document.querySelector('.js-hero__button'),
  scheduleItemButton = document.querySelectorAll('.schedule__item-button'),
  openPopup = document.querySelector('.popup'),
  closePopup = document.querySelector('.js-popup__close');

if (heroButtonPhone) {
  heroButtonPhone.addEventListener('click', () => {
    openPopup.style.display = 'flex'
  })

  closePopup.addEventListener('click', () => {
    openPopup.style.display = 'none'
  })
}

if (scheduleItemButton) {
  scheduleItemButton.forEach(el => {
    el.addEventListener('click', () => {
      openPopup.style.display = 'flex'
    })
  })
}
/* ? ======= POPUP END ======= */
