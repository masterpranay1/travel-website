/*  ********************************************** */
/*  javascript dom interactions for HEADER section */
/*  ********************************************** */

const searchButton = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");
const menuBar = document.querySelector("#menu-bar");
const body = document.querySelector("body");
searchButton.addEventListener("click", (e) => {
  searchBar.classList.toggle("hide");
});
body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("fa-search") && e.target.id != "search-bar")
    searchBar.classList.add("hide");
});

const navbarMobile = document.querySelector(".navbar-mobile");
menuBar.addEventListener("click", (e) => {
  navbarMobile.classList.toggle("hide");
});

const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const loginFormClose = document.querySelector("#login-form-close");
loginBtn.addEventListener("click", (e) => {
  loginForm.classList.toggle("hide");
});
loginFormClose.addEventListener("click", (e) => {
  loginForm.classList.add("hide");
});

const heroImage = document.querySelector("section.home");
let imgNum = 1;
const changeHeroImage = () => {
  imgNum++;
  heroImage.style.backgroundImage = `url(https://github.com/masterpranay1/travel-website/blob/main/assets/images/destinations0${imgNum}.jpg)`;
  if (imgNum == 4) imgNum = 1;
};
setInterval(changeHeroImage, 3000);

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});
