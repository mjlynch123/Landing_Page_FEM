const hamburger = document.querySelector(".menuBtn");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".side-menu img");

const backMenu = document.querySelector(".background-menu");

const featureClick = document.querySelector(".feature-click");
const features = document.querySelector(".features");

const companyClick = document.querySelector(".company-click");
const company = document.querySelector(".company");

const arrow = document.querySelector(".arrow");
const arrow1 = document.querySelector(".arrow1");

const homeFeatures = document.querySelector("#features");
const featuresDropdown = document.querySelector(".homeFeatures");

const companyHome = document.querySelector(".companyHome");
const companyBox = document.querySelector("#company");

const bodyElement = document.body;

sideMenu.style.display = "none";
backMenu.style.display = "none";

features.style.display = "none";
company.style.display = "none";

featuresDropdown.style.display = "none";
companyHome.style.display = "none";

window.addEventListener("resize", function () {
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var breakElement = document.querySelector(".break");

  if (screenWidth < 768) {
    var image = document.querySelector(".right img");
    image.src = "images/image-hero-mobile.png";
    if (breakElement) {
      breakElement.parentNode.removeChild(breakElement);
    }
  } else {
    var image = document.querySelector(".right img");
    image.src = "images/image-hero-desktop.png";
  }
});

window.addEventListener("load", function () {
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var breakElement = document.querySelector(".break");

  if (screenWidth < 768) {
    var image = document.querySelector(".right img");
    image.src = "images/image-hero-mobile.png";
    if (breakElement) {
      breakElement.parentNode.removeChild(breakElement);
    }
  } else {
    var image = document.querySelector(".right img");
    image.src = "images/image-hero-desktop.png";
  }
});

hamburger.addEventListener("click", function () {
  backMenu.style.display = "block";
  sideMenu.style.display = "block";

  bodyElement.classList.toggle("no-scroll");
});

closeMenu.addEventListener("click", function () {
  backMenu.style.display = "none";
  sideMenu.style.display = "none";

  bodyElement.classList.remove("no-scroll");
});

featureClick.addEventListener("click", function () {
  if (features.style.display === "none") {
    features.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    features.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
});

companyClick.addEventListener("click", function () {
  if (company.style.display === "none") {
    company.style.display = "block";
    arrow1.style.transform = "rotate(180deg)";
  } else {
    company.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
  }
});

homeFeatures.addEventListener("click", function () {
  const arrowHome = document.querySelector("#features i");
  if (featuresDropdown.style.display === "none") {
    arrowHome.style.transform = "rotate(180deg)";
    featuresDropdown.style.display = "block";
  } else {
    arrowHome.style.transform = "rotate(0deg)";
    featuresDropdown.style.display = "none";
  }
});

companyBox.addEventListener("click", function() {
  const companyArrow = document.querySelector("#company i");
  if (companyHome.style.display === "none") {
    companyArrow.style.transform = "rotate(180deg)";
    companyHome.style.display = "block";
  } else {
    companyArrow.style.transform = "rotate(0deg)";
    companyHome.style.display = "none";
  }
})
