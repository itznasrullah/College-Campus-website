const menuBtn = document.querySelector(".menu");
const navbarItems = document.querySelector(".navbar-items");

menuBtn.addEventListener("click",function(){
    navbarItems.classList.toggle("show");
    menuBtn.classList.toggle("fa-bars")
    menuBtn.classList.toggle("fa-times");
});