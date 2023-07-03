import Swiper from 'swiper/bundle';

let swiper

export function initOtherProductsSlider() {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

function initOtherProductsSwiper() {
  if (!document.querySelector('.js-other-products-slider')) {
  return
}
  swiper = new Swiper('.js-other-products-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".js-other-products-slider-bar",
      type: "progressbar",
    },
  });
}

const breakpoint = window.matchMedia("(max-width: 1300px)");

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    return initOtherProductsSwiper();
  } else {
    swiper && swiper.destroy()
  }
};
