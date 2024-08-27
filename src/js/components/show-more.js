/* ? ======= SHOW-MORE START ======= */
const buttonShowMore = document.querySelector('.schedule__button-js');
if (buttonShowMore) {
  const listItem = document.querySelectorAll('.schedule__item').length;

  let itemsShow = 4;

  buttonShowMore.addEventListener('click', () => {
    const array = Array.from(document.querySelector('.schedule__list').children)

    itemsShow += 3
    visItems = array.slice(0, itemsShow)
    visItems.forEach(el => el.classList.add('visual-item'))

    if (visItems.length === listItem) {
      buttonShowMore.style.display = 'none'
    }
  })
}

/* ? ======= SHOW-MORE END ======= */
