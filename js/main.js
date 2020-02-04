const hamburgerBtn = document.querySelector("#hamburger");
const showMenu = document.querySelector(".nav__list");
const aboutMeLink = document.getElementById("aboutMeLink");
const contactLink = document.getElementById("contactLink");
hamburgerBtn.addEventListener("click", () => {
  showMenu.classList.toggle("activeMenu");
});
aboutMeLink.addEventListener("click", () => {
  showMenu.classList.remove("activeMenu");
});

contactLink.addEventListener("click", () => {
  showMenu.classList.remove("activeMenu");
});
