var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, popout) {

  showSlides(slideIndex += n, popout);
}

// Thumbnail image controls
function currentSlide(n, popout) {
  showSlides(slideIndex = n, popout);
}

function showSlides(n, popout) {
  var i;
  var slides = document.getElementsByClassName("popout_slides-" + popout);
  var dots = document.getElementsByClassName("popout_dot-"+ popout);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  console.log(n);
} 
