const hamburgerBtn = document.querySelector("#hamburger");
const showMenu = document.querySelector(".nav__list");

hamburgerBtn.addEventListener("click", () => {
  showMenu.classList.toggle("activeMenu");
});
