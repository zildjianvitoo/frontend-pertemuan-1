const iconHamburger = document.querySelector("#icon-hamburger");
const navLists = document.querySelector("#nav-lists");

iconHamburger.addEventListener("click", () => {
    navLists.classList.toggle("hidden")
    navLists.classList.toggle("open");
});