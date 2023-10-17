// Header Burger
const headerBurger = document.querySelector('.header__burger');
const headerBody = document.querySelector('.header__body');
headerBurger.addEventListener("click", function (event) {
   headerBurger.classList.toggle("active");
   headerBody.classList.toggle("active");
   document.querySelector("body").classList.toggle("lock");
});

// Header background after scroll
window.addEventListener("scroll", function (event) {
   if (scrollY > 0) {
      document.querySelector(".header").classList.add("scroll");
   } else {
      document.querySelector(".header").classList.remove("scroll");
   }
});

//  Slider Swiper
const swiper = new Swiper('.content-main__slider', {
   // Optional parameters
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   keyboard: {
      // ВКЛ/ВЫКЛ
      enabled: true,

      // ВКЛ/ВЫКЛ ТОЛЬКО КОГДА СЛАЙДЕР В ПРЕДЕЛАХ ВЬЮПОРТА
      onlyInViewport: true,

      // ВКЛ/ВЫКЛ УПРАВЛЕНИЕ КЛАВИШАМИ PAGEUP, PAGEDOWN
      pageDown: true,
   },

   autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: true,
   },

   effect: 'fade',
});

const sliderButtonsWrapper = document.querySelector('.slider-content-main__buttons-wrapper');
const sliderButtons = document.querySelectorAll(".slider-content-main__button");
sliderButtonsWrapper.addEventListener('click', function (event) {
   const targetElemenet = event.target;
   if (targetElemenet.closest(".slider-content-main__button")) {
      if (!sliderButtonsWrapper.classList.contains("active")) {
         sliderButtonsWrapper.classList.add("active");
         targetElemenet.classList.add("active");
      } else if (sliderButtonsWrapper.classList.contains("active") && !targetElemenet.classList.contains("active")) {
         sliderButtons.forEach((sliderButton) => {
            sliderButton.classList.toggle("active");
         });
      }
   }
});