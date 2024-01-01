const nav = document.querySelector("nav");
//Scroll
document.onscroll = function () {
  if (window.scrollY > 60) {
    document.querySelector("nav").style = "box-shadow: 2px 1px 2px #000000;";
  } else {
    document.querySelector("nav").style = "box-shadow : none;";
  }
};

//Nav Side
const burger_icon = document.querySelector('.burger-icon')
const nav_side = document.querySelector('.nav-side')
const btn_x = document.querySelector('.btn-x')
const nav_side_menu = document.querySelector('.nav-side-menu')

burger_icon.addEventListener('click', function () {
  nav_side.classList.toggle('active')
  burger_icon.setAttribute('style', 'visibility : hidden');
})

btn_x.addEventListener('click', function(){
  nav_side.classList.remove('active')
  burger_icon.setAttribute('style', 'visibility : visible');
})

nav_side_menu.addEventListener('click', function(){
  nav_side.classList.remove('active')
  burger_icon.setAttribute('style', 'visibility : visible');
})