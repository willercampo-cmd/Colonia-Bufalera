/* ============================
   NAVBAR SCROLL EFFECT
============================ */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ============================
   ANIMACIONES AL HACER SCROLL
============================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".about-card, .product-card, .benefit-item, .value-box")
  .forEach((el) => observer.observe(el));
