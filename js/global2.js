var slideImg = document.querySelectorAll('.slider__item');
var index = 0;

function clearAll() {
  for (var i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none"
  }
}

function showSlide() {
  clearAll();
  slideImg[0].style.display = "block"
}

$(".arrow--prev").click(function () {
  if (index === 0) {
    index = slideImg.length;
  }
  slidePrev();
})

function slidePrev() {
  clearAll();
  slideImg[index - 1].style.display = "block"
  index--;
}

$(".arrow--next").click(function () {
  if (index === slideImg.length -1) {
    index = -1;
  }
  slideNext()
})

function slideNext() {
  clearAll();
  slideImg[index+1].style.display = "block";
  index++;
}

showSlide();