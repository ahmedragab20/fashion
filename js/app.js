// the variables
const toTop = document.querySelector(".to-top");
const burger = document.querySelector(".burger");
const list = document.querySelector(".list");
// to top
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("go");
  } else {
    toTop.classList.remove("go");
  }
});
// the menu
burger.addEventListener("click", ()=> {
  list.classList.toggle("active")
});
// the scroll effect
ScrollReveal().reveal("header");
ScrollReveal().reveal(".sale-slider");
ScrollReveal().reveal("article");
ScrollReveal().reveal(".image");
ScrollReveal().reveal(".content");
ScrollReveal().reveal("footer");
ScrollReveal().reveal("h2");
ScrollReveal().reveal("a");
ScrollReveal().reveal("h6");
