// Navigation menu appears when mousing over the button

const headerBtn = document.querySelector(".index__section--head");
const navUl = document.querySelector(".index__nav--ul");

headerBtn.addEventListener("mouseover", () => {
  // Set the opacity to 1 (make it appear)
  navUl.style.opacity = "1";
});
// Event listener for mouseout event
headerBtn.addEventListener("mouseout", () => {
  // Set the opacity to 0 (make it disapear)
  navUl.style.opacity = "0";
});

// Navigation menu appears when clicking the button

headerBtn.addEventListener("click", () => {
  // Toggle the opacity between 0 and 1
  if (navUl.style.opacity === "1") {
    navUl.style.opacity = "0";
  } else {
    navUl.style.opacity = "1";
  }
});

// Change image opacity on mouseover and mouseout events then you click the ovalo

const indexOvalos = document.querySelectorAll(".index__ovalo");
const mainPictureImg = document.querySelector(".main__picture--img");

indexOvalos.forEach((ovalo) => {
  // Event listener for mouseover event
  ovalo.addEventListener("mouseover", () => {
    // Set the opacity of the main image to 0 (make it disappear)
    mainPictureImg.style.opacity = "0";
  });

  // Event listener for mouseout event
  ovalo.addEventListener("mouseout", () => {
    // Set the opacity to 1 (make it reappear)
    mainPictureImg.style.opacity = "1";
  });
});
