import Swiper from 'swiper/bundle';

let swiper

export function initOtherNewsSlider() {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

function initOtherNewsSwiper() {
  if (!document.querySelector('.js-other-news-slider')) {
  return
}
  swiper = new Swiper('.js-other-news-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".js-other-news-slider-bar",
      type: "progressbar",
    },
  });
}

const breakpoint = window.matchMedia("(max-width: 1300px)");

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    return initOtherNewsSwiper();
  } else {
    swiper && swiper.destroy()
  }
};
