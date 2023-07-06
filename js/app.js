const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    // Toggle  Nav
    nav.classList.toggle("nav-active");

    // Burger animate
    burger.classList.toggle("toggle");
  });
};

navSlide();