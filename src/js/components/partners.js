/* ? ======= PARTNERS START ======= */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.partners__swiper', {
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    450: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    700: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    950: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },

  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.partners__button-prev',
  },
})
/* ? ======= PARTNERS END ======= */
