document.addEventListener("DOMContentLoaded", function (event) {
  // burger menu

  const body = document.querySelector("body");
  const burger = document.querySelector(".header__burger");
  const burgerNav = document.querySelector(".burger__nav");
  const burgerBG = document.querySelector(".burger__bg");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    burgerNav.classList.toggle("active");
    burgerBG.classList.toggle("active");
    body.classList.toggle("lock");
  });

  const closeBurgerMenu = () => {
    burger.classList.remove("active");
    burgerNav.classList.remove("active");
    burgerBG.classList.remove("active");
    body.classList.remove("lock");
  };

  burgerBG.addEventListener("click", closeBurgerMenu);

  // scrool

  document.querySelectorAll(".burger__link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      closeBurgerMenu();

      window.scrollBy({
        top: elementPosition,
        behavior: "smooth",
      });
    });
  });

  // to top button

  const toTopButton = document.querySelector(".toTop");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
      toTopButton.classList.add("show");
    } else {
      toTopButton.classList.remove("show");
    }
  });

  toTopButton.addEventListener("click", () => {
    const scrollTarget = document.getElementById("top");
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
    // window.scrollBy(0, -window.innerHeight);
  });
});
