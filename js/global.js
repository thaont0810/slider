$(document).ready(function () {
  var img = document.getElementsByClassName('slider__img');

  var slideArr = Object.keys(img).map(function (key) {
    return img[key];
  });
  // console.log(slideArr);

  var currentImg = document.getElementsByClassName('current');
  var slideIndex = 0;

  $('.button--prev').click(function () {
    prevSlide();
  })

  $('.button--next').click(function () {
    nextSlide();
  })

  function prevSlide() {

  }

  function nextSlide() {
    if (currentImg < slideArr[slideArr.length]) {
      slideArr[currentImg + 1];
      currentImg += 1;
    } else if (currentImg == slideArr[slideArr.length - 1]) {
      slideArr[0]
    }
  }


})