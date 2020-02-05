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

window.sr = ScrollReveal();

sr.reveal("#animation", {
  duration: 2000
});

$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});
