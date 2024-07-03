/* ? ======= GALLERY-POPUP START ======= */
const pic = document.querySelectorAll('.photo-gallery__pic-inner'),
  popupGallery = document.querySelector('.photo-gallery__popup'),
  close = document.querySelector('.photo-gallery__popup span')

pic.forEach(el => {
  el.addEventListener('click', () => {
    popupGallery.style.display = 'block'

    close.parentNode.insertBefore(el.cloneNode(true), close.nextSibling); // клонирую элемент со страницы в попап, после первого дочернего элемента
  })
})

close.addEventListener('click', () => {
  secondChild = popupGallery.children[1]
  popupGallery.removeChild(secondChild) // удаление из попапа клонированного элемента при закрытии

  popupGallery.style.display = 'none'
})
/* ? ======= GALLERY-POPUP END ======= */


















