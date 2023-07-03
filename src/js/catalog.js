import { productsData } from './data/products';

const catalogElements = document.querySelectorAll('.js-catalog > *');
const catalogFilter = document.querySelector('.js-catalog-filter');

const ACTIVE_BUTTON_CLASS = 'filterButton--active';

export function initCatalog() {
  if (!catalogFilter || !catalogElements) {
    return
  }

  catalogFilter.addEventListener('click', function(e) {
    const button = e.target

    if (button.tagName !== 'BUTTON') {
      return
    }

    const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

    if (activeButton) {
      activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
    }

    const type = button.dataset.type

    button.classList.add(ACTIVE_BUTTON_CLASS)

    catalogElements.forEach((item) => {
      item.classList.toggle('catalog__item--hidden', item.dataset.type !== type && type !== 'all')
    })
  })
}