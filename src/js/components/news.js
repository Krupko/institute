/* ? ======= NEWS BUTTON START ======= */
const newsBtn = document.querySelectorAll('.news__card-button--js')

newsBtn.forEach(el => {
  el.addEventListener('click', function () {

    const card = this.closest('.news__wrapper-card'),
      newsCardFooter = card.querySelector('.news__card-footer--js')

    newsCardFooter.classList.toggle('visually-hidden')

    if (newsCardFooter.classList.contains('visually-hidden')) {
      el.innerHTML = 'Подробнее ...'
    } else {
      el.innerHTML = 'Свернуть ...'
    }
  })
})
/* ? ======= NEWS BUTTON END ======= */














