// var slideImg = document.getElementsByClassName('slider__item');
var slideImg = document.querySelectorAll('.slider__item');
// console.log(slideImg)
var slideArr = Object.keys(slideImg).map(function (key) {
  return slideImg[key];
});
// console.log(slideArr);



// $('.arrow--prev').click(function () {
//   prevSlide();
// })

$('.arrow--next').click(function () {
  nextSlide();
})

// var currentSlide= document.getElementsByClassName('current');
// console.log(currentSlide)
var slideIndex = 0;

function nextSlide() {
  var currentSlide;
  if (slideIndex < slideArr.length - 1) {
    currentSlide = slideIndex + 1;
  } else {
    currentSlide = slideIndex[0]
  }
}