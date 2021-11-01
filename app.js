const menu = document.querySelector("#menu");
const menuBar = document.querySelector("#menu-bar");
const btn = document.querySelector("#btn");

menuBar.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  btn.classList.toggle("is-active");
});
