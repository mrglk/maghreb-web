import { Body } from './classes/Body';

export function initBurgerMenu() {
    const burgerMenuButton = document.querySelector('.js-burger-menu-button');
    const burgerMenu = document.querySelector('.js-burger-menu');
    const header = document.querySelector('.js-header');
  
    const overlay = document.querySelector('.js-overlay')
  
    if (!burgerMenuButton || !burgerMenu) {
      return
    }
  
    burgerMenuButton.addEventListener('click', function(e) {
      e.preventDefault()
  
      burgerMenu.classList.toggle('burgerMenu--active')
      burgerMenuButton.classList.toggle('header__burgerButton--active')
      header.classList.toggle('header--burgerActive')
      Body.toggleBody()
      Body.toggleOverlay()
    })
  
    burgerMenu.addEventListener('click', function(e) {
      if (!e.target.closest('a')) {
        return
      }
  
      burgerMenu.classList.remove('burgerMenu--active')
      burgerMenuButton.classList.remove('header__menuButton--active')
  
      Body.releaseBody()
      Body.releaseOverlay()
    })
  
    overlay.addEventListener('click', function() {
      if (!burgerMenu.classList.contains('burgerMenu--active')) {
        return
      }
  
      burgerMenu.classList.remove('burgerMenu--active')
      burgerMenuButton.classList.remove('header__burgerButton--active')
  
      Body.releaseBody()
      Body.releaseOverlay()
    })
  }