// import navbar from "../component/navbar.js";
// let navbarcomponent = document.getElementById("nav");
// navbarcomponent.innerHTML = navbar();

// bannerImage bannerTitle bannerSubTitle
var bannerArr = [
  {
    image:
      "https://m.media-amazon.com/images/I/81WtQ64-SOL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Canon",
    sub_title: "camera",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81TiRgFBBtL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Boat",
    sub_title: "Speaker",
  },
  {
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    title: "Dell",
    sub_title: "Laptop",
  },
];

var bannerVar = 0;
let bannerImage = document.getElementById("bannerImage");
let bannerTitle = document.getElementById("bannerTitle");
let bannerSubTitle = document.getElementById("bannerSubTitle");
let bannerSlideDot = document.getElementById("bannerSlideDot");

bannerSlideDot.children[0].style.color = "orange";
bannerImage.src = bannerArr[0].image;
bannerTitle.textContent = bannerArr[0].title;
bannerSubTitle.textContent = bannerArr[0].sub_title;

setInterval(function () {
  if (bannerVar == bannerArr.length) {
    bannerVar = 0;
  }
  bannerImage.src = bannerArr[bannerVar].image;
  bannerTitle.textContent = bannerArr[bannerVar].title;
  bannerSubTitle.textContent = bannerArr[bannerVar].sub_title;

  if (bannerVar + 1 === 1) {
    bannerSlideDot.children[0].style.color = "orange";
  } else if (bannerVar + 1 !== 1) {
    bannerSlideDot.children[0].style.color = "gray";
  }
  if (bannerVar + 1 > 1 && bannerVar + 1 < bannerArr.length) {
    bannerSlideDot.children[1].style.color = "orange";
  } else {
    bannerSlideDot.children[1].style.color = "gray";
  }
  if (bannerVar + 1 === bannerArr.length) {
    bannerSlideDot.children[2].style.color = "orange";
  } else {
    bannerSlideDot.children[2].style.color = "gray";
  }
  bannerVar++;
}, 2000);

//  three image
var threImageArr = [
  {
    image: "https://m.media-amazon.com/images/I/41mullmNHYL._AC_SR480,480_.jpg",
    title: "JBL bar 2.1 deep bass",
    price: "$ 11,50",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81TiRgFBBtL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Boat",
    price: "$ 10,25",
  },
  {
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    title: "Dell",
    price: "$ 12,70",
  },
];
var threImageVar = 0;
let threeImage = document.getElementById("threeImage");
let rightHeading = document.getElementById("rightHeading");
let rightPrice = document.getElementById("rightPrice");
let rightDot = document.getElementById("rightDot");

rightDot.children[0].style.color = "orange";
threeImage.src = threImageArr[0].image;
rightHeading.textContent = threImageArr[0].title;
rightPrice.textContent = threImageArr[0].price;

setInterval(function () {
  if (threImageVar == threImageArr.length) {
    threImageVar = 0;
  }
  threeImage.src = threImageArr[threImageVar].image;
  rightHeading.textContent = threImageArr[threImageVar].title;
  rightPrice.textContent = threImageArr[threImageVar].price;

  if (threImageVar + 1 === 1) {
    rightDot.children[0].style.color = "orange";
  } else if (threImageVar + 1 !== 1) {
    rightDot.children[0].style.color = "gray";
  }
  if (threImageVar + 1 > 1 && threImageVar + 1 < threImageArr.length) {
    rightDot.children[1].style.color = "orange";
  } else {
    rightDot.children[1].style.color = "gray";
  }
  if (threImageVar + 1 === threImageArr.length) {
    rightDot.children[2].style.color = "orange";
  } else {
    rightDot.children[2].style.color = "gray";
  }
  threImageVar++;
}, 2000);

//  latest
var latestArr = [
  {
    image:
      "https://thegifthacker.com/wp-content/uploads/2022/06/Rechargeable-Hand-Warmer.png",
    title: "Rechargable Handwarmer",
  },
  {
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572300642-charger-1572300636.png?crop=1.00xw:0.668xh;0,0.143xh&resize=980:*",
    title: "Elago 3-in-1 Charging Hub",
  },
  {
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    title: "Dell",
  },
];

var latestVar = 0;
var secondVar = 1;
let latestFirstImage = document.getElementById("latestFirstImage");
let latestFirstHeading = document.getElementById("latestFirstHeading");
let latestSecImage = document.getElementById("latestSecImage");
let latestSecHeading = document.getElementById("latestSecHeading");
let latestDots = document.getElementById("latestDots");

latestDots.children[0].style.color = "orange";
latestFirstImage.src = latestArr[latestVar].image;
latestFirstHeading.textContent = latestArr[latestVar].title;
//
latestSecImage.src = latestArr[secondVar].image;
latestSecHeading.textContent = latestArr[secondVar].title;

setInterval(function () {
  if (latestVar == latestArr.length) {
    latestVar = 0;
  }
  if (secondVar == latestArr.length) {
    secondVar = 0;
  }
  latestFirstImage.src = latestArr[latestVar].image;
  latestFirstHeading.textContent = latestArr[latestVar].title;
  latestSecImage.src = latestArr[secondVar].image;
  latestSecHeading.textContent = latestArr[secondVar].title;

  if (latestVar + 1 === 1) {
    latestDots.children[0].style.color = "orange";
  } else if (latestVar + 1 !== 1) {
    latestDots.children[0].style.color = "gray";
  }
  if (latestVar + 1 > 1 && latestVar + 1 < latestArr.length) {
    latestDots.children[1].style.color = "orange";
  } else {
    latestDots.children[1].style.color = "gray";
  }
  if (latestVar + 1 === latestArr.length) {
    latestDots.children[2].style.color = "orange";
  } else {
    latestDots.children[2].style.color = "gray";
  }

  latestVar++;
  secondVar++;
}, 2000);

//  testimonail
var testimonailArr = [
  {
    image: "https://bezyl.com/wp-content/uploads/2022/08/liz2-1-300x300.png",
    title: "Savannah Nguyen",
  },
  {
    image: "https://bezyl.com/wp-content/uploads/2022/08/miguel-300x300.png",
    title: "Esther Howard",
  },
  {
    image:
      "https://bezyl.com/wp-content/uploads/2022/11/Ashley-Williams-headshot-1.png",
    title: "Ashley Williams",
  },
  {
    image: "https://randomuser.me/api/portraits/men/69.jpg",
    title: "Surya Kumar",
  },
];

var testFirstVar = 0;
let testimonialDots = document.getElementById("testimonialDots");
latestDots.children[0].style.color = "orange";
setInterval(function () {
  if (testFirstVar == testimonailArr.length) {
    testFirstVar = 0;
  }

  if (testFirstVar + 1 === 1) {
    testimonialDots.children[0].style.color = "orange";
  } else if (testFirstVar + 1 !== 1) {
    testimonialDots.children[0].style.color = "gray";
  }
  if (testFirstVar + 1 > 1 && testFirstVar + 1 < testimonailArr.length) {
    testimonialDots.children[1].style.color = "orange";
  } else {
    testimonialDots.children[1].style.color = "gray";
  }
  if (testFirstVar + 1 === testimonailArr.length) {
    testimonialDots.children[2].style.color = "orange";
  } else {
    testimonialDots.children[2].style.color = "gray";
  }

  testFirstVar++;
}, 2000);