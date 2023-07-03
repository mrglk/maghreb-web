import Swiper from 'swiper/bundle';

let swiper

export function initAdvantagesSlider() {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

function initAdvantagesSwiper() {
  if (!document.querySelector('.js-advantages-slider')) {
  return
}
  swiper = new Swiper('.js-advantages-slider', {
    slidesPerView: 'auto',
    spaceBetween: 14,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".js-advantages-slider-bar",
      type: "progressbar",
    },
  });
}

const breakpoint = window.matchMedia("(max-width: 1050px)");

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    return initAdvantagesSwiper();
  } else {
    swiper && swiper.destroy()
  }
};
