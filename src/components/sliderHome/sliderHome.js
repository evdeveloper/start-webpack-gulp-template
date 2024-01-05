import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

(() => {
  const sliderHome = new Swiper(document.querySelector('.sliderHome__slider'), {  
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    // loopAdditionalSlides: 1,
    // lazyPreloadPrevNext: 2,
    speed: 700,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiperHome__next',
      prevEl: '.swiperHome__prev'
    }
  });
})();