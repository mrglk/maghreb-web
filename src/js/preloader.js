import { getCookie, insertAfter, setCookie } from "./utils/helpers";
import { Body } from "./classes/Body";
import { initTextEffect } from "./textEffects";
import { initImageEffects } from "./imageEffects";

const preloader = document.querySelector(".js-preloader");
const progressLine = document.querySelector(".js-preloader-progress-line");
let currentPercent = document.querySelector(".js-current-percent");
const preloaderText = document.querySelector(".js-preloader-text");

export function initPreloader() {
  if (!preloader) {
    initEffects()
    return;
  }

  if (getCookie("preloader_has_shown")) {
    preloader.classList.add("preloader--nope");
    initEffects()
    return;
  }

  Body.fixBody();
  runPreloader();

  // @todo расскоментировать когда прелоадер будет нужен на проде
  setCookie("preloader_has_shown", "true", 5);
}

function runPreloader() {
  let secs = 0;
  let perc = 0;

  const func = () => {
    if (perc < 100) {
      perc = Math.min(perc + Math.floor(Math.random() * 40), 100);
      secs += Math.ceil(Math.random() * 2);

      (function (_perc, _secs) {
        return setTimeout(function () {
          if (_perc >= 100) {
            preloader.classList.add("preloader--hidden");
            Body.releaseBody();
            initEffects()
          }

          const newNode = currentPercent.cloneNode(true);
          newNode.innerText = _perc;

          insertAfter(newNode, currentPercent);

          currentPercent.classList.add("preloader__numberDigit--done");

          progressLine.style.width = _perc + "%";

          let widthHalfPreloaderText = preloaderText.offsetWidth / 2;

          preloaderText.style.transform =
            "translateX(" +
            ((_perc / 100) * window.outerWidth - widthHalfPreloaderText) +
            "px)";

          if (_perc >= 0 && _perc <= 10) {
            preloaderText.style.transform =
              "translateX(" +
              ((_perc / 100) * window.outerWidth + widthHalfPreloaderText) +
              "px)";
          }

          if (_perc >= 92 && _perc <= 100) {
            preloaderText.style.transform =
              "translateX(" +
              ((_perc / 100) * window.outerWidth - widthHalfPreloaderText * 2) +
              "px)";
          }

          currentPercent = [
            ...document.querySelectorAll(".js-current-percent"),
          ].pop();
        }, _secs * 500);
      })(perc, secs);

      func();
    }
  };

  return func();
}

function initEffects() {
  initTextEffect()
  initImageEffects()
}