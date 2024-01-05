import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
  
  // Swiper Group
  const swiperGroup = document.querySelectorAll('.swiperGroup');
  swiperGroup.forEach(slider => {
    const sliderSwiper = new Swiper(slider, {
      modules: [Navigation],
      speed: 700,
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiperGroup__next',
        prevEl: '.swiperGroup__prev'
      }
    });
  });

})();
