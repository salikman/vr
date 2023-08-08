import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  menuInit,
} from './modules'

/* Раскомментировать для использования */
import Swiper, { Autoplay, Pagination, Thumbs, Navigation, FreeMode } from 'swiper';

var swiper = new Swiper(".intro-background-slideshow", {
  modules: [Autoplay],
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var reviewSwiper = new Swiper(".review-slider", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
});
var reviewsSwiper = new Swiper(".reviews-slider", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  
  breakpoints: {
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
var testimonialsSwiper = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var aboutSwiper = new Swiper(".about-slider", {
  modules: [FreeMode],
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var aboutSwiper2 = new Swiper(".about-slider2", {
  modules: [Thumbs, Navigation],
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: aboutSwiper,
  },
});

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
togglePopupWindows()
// ======================================================================================================= //

document.querySelectorAll(".has-dropdown a span").forEach((e) => {
  // e.addEventListener('click', function (i) {
  // i.preventDefault();
  //     e.parentNode.classList.toggle('open-drop');
  // });
  e.addEventListener('click', function (i) {
    i.preventDefault();

    e.parentNode.classList.toggle("active");
    let panel = e.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
})