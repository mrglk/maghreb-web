import { debounce, isWindowSizeSmallerThen } from './utils/helpers';
import createScrollManager from './utils/scrollManager';

const principlesContainer = document.querySelector('.js-principles');
const principlesBar = document.querySelector('.js-principles-bar');
const principlesItems = document.querySelectorAll('.js-principles-item');
const principlesList = document.querySelector('.js-principles-list');
const principlesInner = document.querySelector('.js-principles-inner');
const principlesImages = document.querySelector('.js-principles-image');

const scrollManager = createScrollManager()

export function initPrinciples() {
  if (!principlesContainer) {
    return;
  }


  const offsetTop = principlesContainer.offsetTop;
  const offsetBottom = offsetTop + principlesContainer.clientHeight;

  updatePrinciplesInnerTop();

  scrollManager.add((e) => {
    if (isWindowSizeSmallerThen(1150)) {
      return
    }

    const scrollPosition = window.scrollY + principlesInner.clientHeight / 2;
    const currentPosition = Number(((scrollPosition - offsetTop) / (offsetBottom - offsetTop)).toFixed(2));
    const insidePosition = Math.max(0, Math.min(1, currentPosition));

    principlesBar.style.transform = `translateY(${Math.min(insidePosition * 1000, 900)}%)`;

    principlesItems.forEach((item, index) => {
      const currentIndex = Math.round(Math.min(3, insidePosition * 4));

      console.log(principlesImages.children);

      principlesImages.children[index].style.opacity = currentIndex === index ? '1' : '0'

      item.classList.toggle('principles__listItem--highlight', currentIndex === index);
    });
  });
}

function updatePrinciplesInnerTop() {
  if (isWindowSizeSmallerThen(1150) ||
    (window.innerHeight <= principlesInner.clientHeight)) {
    principlesInner.style.top = '0px';
    return;
  }

  principlesInner.style.top = ((window.innerHeight - principlesInner.clientHeight) / 2) + 'px';
}

window.addEventListener('resize', debounce(() => {
  updatePrinciplesInnerTop();
}, 200));