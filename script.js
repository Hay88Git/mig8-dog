window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-15%";
  }
}


const openMenu = function () {
  let menu = document.querySelector("ul");
  menu.style.left = "0%";
}
const closeMenu = function () {
  let menu = document.querySelector("ul");
  menu.style.left = "-100%";
}
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoPlay: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

function url() {
  location.href="https://www.hay88.one/?inviteCode=3883619";
}
