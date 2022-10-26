$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    // fade: true,
    slide: "div",
    cssEase: "linear"
  });

  $('.slider__button--prev').click(function (event) { 
    $('.slider').slick('slickPrev');
  });

  $('.slider__button--next').click(function (event) { 
    $('.slider').slick('slickNext');
  });
});