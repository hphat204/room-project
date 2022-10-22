import "./styles.css";
import desktopImg1 from "./images/desktop-image-hero-1.jpg";
import desktopImg2 from "./images/desktop-image-hero-2.jpg";
import desktopImg3 from "./images/desktop-image-hero-3.jpg";
const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");
const imgHolder = document.querySelector(".img-holder");
const titleHolder = document.querySelector(".title-holder");
const textHolder = document.querySelector(".text-holder");
const hamburgerMenu = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const imgArr = [desktopImg1, desktopImg2, desktopImg3];

const titleTextArr = [
  {
    title: "Discover innovative ways to decorate",
    des: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    des: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today",
  },
  {
    title: "Manufactured with the best materials",
    des: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

sliderRight.addEventListener("click", function () {
  titleHolder.classList.remove("slide");
  let curImg = +imgHolder.dataset.curimg;
  if (curImg === imgArr.length - 1) curImg = -1;
  const nextImg = curImg + 1;
  imgHolder.src = imgArr[nextImg];
  imgHolder.dataset.curimg = nextImg;
  titleHolder.textContent = titleTextArr[nextImg].title;
  textHolder.textContent = titleTextArr[nextImg].des;
  setTimeout(() => {
    titleHolder.classList.add("slide");
  }, 500);
});

sliderLeft.addEventListener("click", function () {
  titleHolder.classList.remove("slide");
  let curImg = +imgHolder.dataset.curimg;
  if (curImg === 0) curImg = imgArr.length;
  const prevImg = curImg - 1;
  imgHolder.src = imgArr[prevImg];
  imgHolder.dataset.curimg = prevImg;
  titleHolder.textContent = titleTextArr[prevImg].title;
  textHolder.textContent = titleTextArr[prevImg].des;
  setTimeout(() => {
    titleHolder.classList.add("slide");
  }, 500);
});

hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("open");
  overlay.classList.toggle("show-overlay");
  mobileMenu.classList.toggle("open");
});

overlay.addEventListener("click", function () {
  this.classList.remove("show-overlay");
  hamburgerMenu.classList.remove("open");
  mobileMenu.classList.remove("open");
});
