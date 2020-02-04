const hamburgerBtn = document.querySelector("#hamburger");
const showMenu = document.querySelector(".nav__list");
const addNavBcg = document.querySelector(".nav");
let last_known_scroll_position = 0;

hamburgerBtn.addEventListener("click", () => {
  showMenu.classList.toggle("activeMenu");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 92) {
    addNavBcg.classList.add("addNavBcg");
  } else {
    addNavBcg.classList.remove("addNavBcg");
  }
});
