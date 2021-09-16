window.addEventListener("scroll", function () {
  var navScroll = document.querySelector("header");
  navScroll.classList.toggle("fixed", window.scrollY > 50);
});
