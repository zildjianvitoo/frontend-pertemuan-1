// Navbar dan Hamburger Menu Start
const nav = document.querySelector(".navbar-container");
const menu = document.querySelector("#hamburger");

menu.onclick = () => {
  nav.classList.toggle("active");
};
  
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
// Navbar dan Hamburger Menu End

// Aside Start
const Aside = document.querySelector("aside");
const asideMenu = document.querySelector("#biodata");

asideMenu.onclick = () => {
  Aside.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!Aside.contains(e.target) && !asideMenu.contains(e.target)) {
    Aside.classList.remove("active");
  }
});

// alert("Tekan icon sidebar untuk melihat biodata saya");
