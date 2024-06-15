/* ? ======= HERO SWIPER START ======= */
import Swiper from 'swiper';
import { EffectFade, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.hero__swiper', {
  modules: [EffectFade, Autoplay],

  direction: 'vertical',
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  crossFade: "true",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
/* ? ======= HERO SWIPER END ======= */

