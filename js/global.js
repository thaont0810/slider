$(document).ready(function() {
  var slideArr = [];
  var img = document.getElementsByClassName('slider__img');
  slideArr.push(img);
  var currentImg = document.getElementsByClassName('active')


  $('.button--prev').click(function() {
    prevSlide();
  })

  $('.button--next').click(function() {
    nextSlide();
  })

  function nextSlide() {

  }
})