const navMenu = document.querySelector(".nav_menu");
const toggleBtn = document.querySelector(".toggle_btn");
const closeBtn = document.querySelector(".close_btn");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.add("show");
  document.querySelector("body").classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("show");
  document.querySelector("body").classList.remove("no-scroll");
});

// GSAP Animations

// Logo
gsap.from(".logo", {
  opacity: 0,
  y: 10,
  delay: 1,
  duration: 0.3,
});

// Nav Menu
gsap.from("ul li", {
  opacity: 0,
  y: 10,
  delay: 1.4,
  duration: 0.3,
  stagger: 0.2,
});

// Toggle Btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: 10,
  delay: 1.2,
  duration: 0.3,
});

// Flex item
gsap.from(".flex-item-1", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 0.8,
});

gsap.from(".customer-related-desc p", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 0.6,
});

gsap.from(".rating-star i", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.8,
});

gsap.from(".rating-count", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.8,
});

gsap.from(".ratings", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.8,
});

// Plant image
gsap.from(".plant-img img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.8,
});
