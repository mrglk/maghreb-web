import "./css/style.css";
import 'swiper/css/bundle';

import { initBurgerMenu } from './js/burgerMenu';
import { initModals } from "./js/initModals";
import { initWindowHeight } from "./js/windowHeight";
import { initAdvantagesSlider } from "./js/advantagesSlider";
import { initProductsSlider } from "./js/productsSlider";
import { initNewsSlider } from "./js/newsSlider";
import { initOtherNewsSlider } from "./js/otherNewsSlider";
import { initOtherProductsSlider } from "./js/otherProducts";
import { initPreloader } from './js/preloader';
import { initForms } from "./js/forms";
import { initCatalog } from './js/catalog';
import { initCalendar } from './js/calendar';
import { initPrinciples } from './js/principles';

document.addEventListener("DOMContentLoaded", function () {
    initWindowHeight()
    initBurgerMenu()
    initModals()
    initAdvantagesSlider()
    initProductsSlider()
    initNewsSlider()
    initOtherNewsSlider()
    initOtherProductsSlider()
    initPreloader()
    initForms()
    initCatalog()
    initCalendar()
    initPrinciples()
});
