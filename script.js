// Untuk Scrolling Navigation Bar
let prevScrollpos = window.pageYOffset;
let nav = document.getElementById("nav");
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
} else {
    nav.style.top = "-100px";
    nav.style.transition = "top 0.5s";
    nav.style.transitionTimingFunction = "ease-in-out";
  }
  prevScrollpos = currentScrollPos;
}

// Halaman Home
const child = document.querySelector('a');
child.addEventListener('mouseenter', function() {
  const h1 = document.querySelector('h1');
  const h5 = document.querySelector('h5');
  const parent = this.parentNode;
  parent.style.backgroundImage = "url('img/angkasa3.jpg')";
  parent.style.backgroundSize = "cover";
  parent.style.opacity = "1";
  h1.style.color = "black";
  h5.style.color = "black";
  h1.style.fontWeight = "bold";
  h5.style.fontWeight = "bold";
  h5.style.textShadow = "none"
});

child.addEventListener('mouseleave', function() {
  const h1 = document.querySelector('h1');
  const h5 = document.querySelector('h5');
  const parent = this.parentNode;
  parent.style.backgroundImage = "url('img/angkasa2.jpeg')";
  parent.style.backgroundSize = "contain";
  parent.style.opacity = "0.9";
  h1.style.color = "white";
  h1.style.fontWeight = "normal";
  h5.style.color = "white";
  h5.style.fontWeight = "normal";
  h5.style.textShadow = "4px 4px rgb(1, 54, 129)";
});

// Typeit.js
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#greeting", {
  }).go();
});

document.addEventListener("DOMContentLoaded", function () {
  const instance = new TypeIt("#namaku", {
    speed: 120,
  })


  instance.pause(500)
  .move(-2)
  .type("a")
  .move(null, { to: "START", instant: true, delay: 300 })
  .move(-1, { delay: 200 })
  .delete(1)
  .type("M. ", { delay: 225 })
  .go();
});
