// Set width of progress bar
const spans = document.querySelectorAll('.progress-bar span')


spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;

});
let slideIndex = 1;
showSlides(slideIndex);

// Auto slide every 5 seconds
setInterval(function() {
  plusSlides(1); // Move to the next slide every 5 seconds
}, 5000);

// Function to go to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the slide
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop through slides to ensure it stays within bounds
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  

  // Activate the current dot
  dots[slideIndex - 1].className += " active";
}
