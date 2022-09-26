import "./styles.css";

//dropdown
const button = document.getElementsByClassName("drop-down-button");

button[0].addEventListener(`click`, function () {
  document.getElementById("my-dropdown").classList.toggle("show");
});

window.onclick = function (e) {
  //if user clicks anywhere other than button
  if (!e.target.matches(".drop-down-button")) {
    //find dropdown
    const dropdown = document.getElementsByClassName("dropdown-content");

    //since it's class and not id, set index of 0
    if (dropdown[0].classList.contains("show")) {
      dropdown[0].classList.remove("show");
    }
  }
};

//hamburger menu:
window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener(`click`, function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

// image slider
const buttons = document.querySelectorAll("[data-carousel-button");
const dots = document.querySelectorAll(".dot");

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
