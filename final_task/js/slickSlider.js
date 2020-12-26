$(document).ready(function(){
  $('.feedback__slider').slick({
    appendArrows: $('.feedback__nav'),
    dots: true,
    appendDots: $('.feedback__dots'),
    draggable: true,
    infinite: false
  });
});