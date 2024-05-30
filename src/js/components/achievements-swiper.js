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
    },

    590: {
      slidesPerView: 3,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
