const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    // Toggle  nav:
    nav.classList.toggle("nav-active");

    // Animate burger:
    burger.classList.toggle("toggle");
  });
};

navSlide();