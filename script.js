let menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})

let menuIconClose = document.getElementById("menu-icon-close");
menuIconClose.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})