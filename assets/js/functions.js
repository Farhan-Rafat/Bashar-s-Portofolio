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
