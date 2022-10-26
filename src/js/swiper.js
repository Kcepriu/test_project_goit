const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  speed: 800,
  spaceBetween: 25,
  

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, 
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  
//  effect: 'flip',
//   flipEffect: {
//     slideShadows: false,
//   },
});