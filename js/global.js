
var slideImg = document.querySelectorAll('.slider__item');
var currentIndex;

function startSlide() {
  slideImg[0].style.display = "block";
}

$('.arrow--prev').click(function () {
  prevSlide();
  currentIndex--;
})

function prevSlide() {
  var nextIndex;
  if(currentIndex === 0) {
    nextIndex = slideImg.length - 1;
  } else {
    nextIndex = currentIndex -1;
  }
}

$('.arrow--next').click(function () {
  nextIndex();
  currentIndex++;
})

function nextIndex() {
  if (currentIndex < slideImg.length - 1) {
    nextIndex = currentIndex+1;
  } else {
    nextIndex = slideImg[0]
  }
}

startSlide();