// Get all the testimonials (the boxes with pictures and text)
const testimonials = document.querySelectorAll(".testimonial");

// Start with the first testimonial (index 0)
let currentSlide = 0;

// Function to show a specific testimonial
function showSlide(slideIndex) {
  testimonials.forEach((testimonial, index) => {
    if (index === slideIndex) {
      testimonial.style.opacity = "1";
    } else {
      testimonial.style.opacity = "0";
    }
  });
}

// Function to go to the next testimonial
function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}

// Function to go to the previous testimonial
function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
}

// Get the "Next" and "Previous" buttons from the HTML
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Add event listeners to the buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Initial display: Show the first testimonial
showSlide(currentSlide);

// ---------scrolled navbar---------->
document.addEventListener("scroll", function () {
  const nav = document.getElementById("Nav-Bar");
  const menuBtn = document.getElementById("menu-btn");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    menuBtn.style.color = "black";
  } else {
    nav.classList.remove("scrolled");
    menuBtn.style.color = "white";
  }
});

let sidemenu = document.getElementById("sidemenu");
const closeHome = document.querySelector(".close-home");
const closeAboutUs = document.querySelector(".close-about-us");
const closeTest = document.querySelector(".close-test");
const openNav = document.querySelector(".fa-bars");
const closeNav = document.querySelector(".fa-circle-xmark");

function openMenu() {
  sidemenu.style.right = "0";
  document.sidemenu.style.overflow = "hidden";
}
function closeMenu() {
  sidemenu.style.right = "-110%";
  document.sidemenu.style.overflow = "scroll-Y";
}
closeHome.addEventListener("click", closeMenu);
closeAboutUs.addEventListener("click", closeMenu);
closeTest.addEventListener("click", closeMenu);
openNav.addEventListener("click", openMenu);
closeNav.addEventListener("click", closeMenu);
