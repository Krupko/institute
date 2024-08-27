/* ? ======= UP-BUTTON START ======= */
const upButton = document.querySelector('.footer__button')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    upButton.style.display = 'flex'
  } else {
    upButton.style.display = 'none'
  }
})

upButton.addEventListener('click', function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50)
    setTimeout(backToTop, 10)
  }
})

/* ? ======= UP-BUTTON END ======= */







