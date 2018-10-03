let slideImg = document.querySelectorAll('.slider__item')

function reset() {
  for(var i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slideImg[0].style.display = "block";
}

// startSlide();