// Image slider with 5 images

const sliderNext = document.querySelector(".Slider__arrow--next");
const sliderPrev = document.querySelector(".Slider__arrow--prev");
const sliderImg = document.querySelectorAll(".Slider__img");

// Initial position of the slider (first image)
let posicion = 1;

// Function to show the current image
let mostrarImagen = function () {
  // Remove 'isVisible' class from all images
  sliderImg.forEach(function (each, i) {
    sliderImg[i].classList.remove("isVisible");
  });
  // Add 'isVisible' class to the current image
  sliderImg[posicion].classList.add("isVisible");
};

// Event listener for the "next" arrow
sliderNext.addEventListener("click", function () {
  // Increment position
  posicion++;
  // Loop back to the first image if the end is reached
  if (posicion >= sliderImg.length) {
    posicion = 0;
  }
  // Show the updated image
  mostrarImagen();
});

// Event listener for the "previous" arrow
sliderPrev.addEventListener("click", function () {
  // Decrement position
  posicion--;
  // Loop back to the last image if the beginning is reached
  if (posicion < 0) {
    posicion = sliderImg.length - 1;
  }
  // Show the updated image
  mostrarImagen();
});
