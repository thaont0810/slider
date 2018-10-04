var slideImg = document.querySelectorAll('.slider__item');
var currentSlide =0;

function reset() {
  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slideImg[0].style.display = "block";
}

$('.arrow--prev').click(function () {
  prevSlide();
})

function prevSlide() {
  reset();
  console.log(currentSlide);
  if(currentSlide === 0) {
    slideImg[slideImg.length-1].style.display = "block";
    currentSlide = slideImg.length-1;
  } else {
    slideImg[currentSlide-1].style.display = "block";
    currentSlide--;
  }
}

$('.arrow--next').click(function () {
  nextSlide();
})
    
function nextSlide() {
  reset();
  console.log(currentSlide)
  if (currentSlide < slideImg.length - 1) {
    slideImg[currentSlide+1].style.display ="block";
    currentSlide ++;
  } else {
    currentSlide = 0;
    slideImg[0].style.display ="block";
  }
}

startSlide();














