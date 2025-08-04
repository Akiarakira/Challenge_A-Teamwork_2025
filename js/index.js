document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("visible");
  });

  const headerMenu = document.querySelector(".header-menu");
  const imageHero = document.querySelector(".image-hero");

  function toggleHeaderMenu() {
    if (window.innerWidth >= 1024) {
      headerMenu.classList.remove("hidden");
      imageHero.classList.remove("hidden");
    } else {
      headerMenu.classList.add("hidden");
      imageHero.classList.add("hidden");
    }
  }

  window.addEventListener("resize", toggleHeaderMenu);
  toggleHeaderMenu(); // Ejecuta al cargar

  new Splide(".splideTestimonials", {
    type: "loop",
    perPage: 3,
    drag: "free",
    snap: true,
    focus: "center",
    isLoop: true,
    gap: "20px",
    padding: 0,
    arrows: true,
    pagination: true,
    breakpoints: {
      1024: {
        perPage: 3,
        arrows: true,
        padding: 0,
        focus: "center",
      },
      768: {
        perPage: 1,
        arrows: true,
        focus: "center",
        padding: {
          left: "25%",
          right: "25%",
        },
      },
      640: {
        perPage: 1,
        padding: {
          left: "0%",
          right: "0%",
        },
        arrows: false,
      },
    },
    updateOnMove: true,
    autoplay: true,
    interval: 3000,
  }).mount();
});
