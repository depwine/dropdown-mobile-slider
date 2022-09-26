import "./styles.css";

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

window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  menu_btn.addEventListener(`click`, function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};
