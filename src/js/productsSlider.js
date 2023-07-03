import Swiper from 'swiper/bundle';

const slider = document.querySelector('.js-products-slider');
const productsFilter = document.querySelector('.js-products-filter');
const projectSliderItems = [...slider?.firstElementChild.children || []];

let swiper;

export function initProductsSlider() {
  if (!slider) {
    return;
  }

  swiper = runSwiper(slider.dataset.category || 'all');

  productsFilter.addEventListener('click', function(e) {
    const target = e.target;
    const type = target.dataset.type;

    if (!type) {
      return;
    }

    [...productsFilter.children].forEach((item) => {
      item.classList.toggle('filterButton--active', item === target);
    });

    swiper.destroy(true, true);

    swiper = runSwiper(type);
  });
}

function runSwiper(type) {
  if (!slider) {
    return;
  }

  slider.firstElementChild.innerHTML = projectSliderItems.filter((slide) => slide.dataset.type === type || type === 'all').map(item => item.outerHTML).join('')

  return new Swiper('.js-products-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 15,

    navigation: {
      nextEl: '.js-products-slider-next',
      prevEl: '.js-products-slider-prev',
    },
  });
}