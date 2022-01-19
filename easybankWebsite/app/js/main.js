const btnMenu = document.querySelector(".header__toggle");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__menu");

btnMenu.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.add("noscroll");
    header.classList.remove("open");
    menu.classList.add("fade-out");
    menu.classList.remove("fade-in");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
