let navMain = document.querySelector(".nav");
let navToggle = document.querySelector(".nav__toggle");

navToggle.onclick = function (evt) {
  evt.preventDefault();
}

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("nav--closed")) {
    navMain.classList.remove("nav--closed");
    navMain.classList.add("nav--opened");
  } else {
    navMain.classList.remove("nav--opened");
    navMain.classList.add("nav--closed");
  }
});
