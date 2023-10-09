var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-fill");
var resp1 = document.querySelector(".resp1");
menu.addEventListener("click", function (req, res) {
  close.style.display = "flex";
  menu.style.display = "none";
  resp1.style.display = "flex";
});

close.addEventListener("click", () => {
  resp1.style.display = "none";
  close.style.display = "none";
  menu.style.display = "flex";
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var h3 = document.querySelector(".ach3");
var what = document.querySelector(".what");
let hideWhat = 0;
h3.addEventListener("mouseenter", function () {
  if (hideWhat === 0) {
    whatShow();
    console.log("aaaayya");
  }
});

what.addEventListener("mouseenter", function () {
  if (hideWhat === 0) {
    whatShow();
    console.log("aaaayya");
  }
});
h3.addEventListener("mouseleave", function () {
  if (hideWhat === 0) {
    whatHide();
    console.log("aaaayya");
  }
});
function whatHide() {
  what.style.display = "none";
}
function whatShow() {
  what.style.display = "initial";
}

var navTab = document.querySelectorAll(".navtab");

// console.log(navTab);

navTab.forEach((hoverTab) => {
  hoverTab.addEventListener("click", (ek) => {
    console.log(hoverTab);
  });
});
