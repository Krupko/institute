/* ? ======= ACHIEVEMENTS START ======= */
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';

const swiper = new Swiper('.achievements__swiper', {
  modules: [Navigation, EffectCoverflow],
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    590: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.achievements__button-next',
    prevEl: '.achievements__button-prev',
  },
});

/* ? ======= ACHIEVEMENTS END ======= */
