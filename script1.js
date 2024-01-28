

document.addEventListener("DOMContentLoaded", function() {
  var mobileMenuButton = document.getElementById("mobile-menu-button");
  var nav = document.querySelector("nav");

  mobileMenuButton.addEventListener("click", function() {
    nav.classList.toggle("menu-open");
  });
});

