$(".toggleNav").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $("body").toggleClass("nav-expanded");
});

function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}

document
  .querySelector("input[type='checkbox']#dark-toggle")
  .addEventListener("click", darkModeListener);

// ratings javaScript code
var stars = document.querySelectorAll(".star a");

stars.forEach((item, index1) => {
  item.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

// Preloader jQuery code

$(window).on("load", function () {
  setTimeout(function () {
    $("html").removeClass("loading").addClass("loaded");
  }, 2000);
});

// scroll reveal jQuery code

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".title", { delay: 100, origin: "left" });
ScrollReveal().reveal(".human", { delay: 100, origin: "right" });
ScrollReveal().reveal(".text", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".card, .icons", { delay: 50 });
ScrollReveal().reveal(".reveal", { delay: 50 });
