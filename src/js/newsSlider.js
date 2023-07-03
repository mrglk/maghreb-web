import Swiper from 'swiper/bundle';

let swiper

export function initNewsSlider() {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

function initNewsSwiper() {
  if (!document.querySelector('.js-news-slider')) {
  return
}
  swiper = new Swiper('.js-news-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".js-news-slider-bar",
      type: "progressbar",
    },
  });
}

const breakpoint = window.matchMedia("(max-width: 950px)");

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    return initNewsSwiper();
  } else {
    swiper && swiper.destroy()
  }
};
