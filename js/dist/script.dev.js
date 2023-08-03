"use strict";

window.onload = function () {
  //Кнопка включения
  var btn = document.querySelector(".light .vesametun"); // let btnShadow = document.querySelector(".light .donetugo");

  var headerSubheader = document.querySelector(".header__subheader");
  var promo = document.querySelector(".promo");
  var headerMenu = document.querySelector(".header__menu");
  var body = document.querySelector("body");
  var headerLogo = document.querySelector(".header__logo");
  var headerContacts = document.querySelector(".header__contacts");
  var advantages = document.querySelector(".advantages");
  var consultation = document.querySelector(".consultation");
  var services = document.querySelector(".services");
  var carousel = document.querySelector(".carousel");
  var review = document.querySelector(".review");
  var footer = document.querySelector(".footer");
  var lamp = document.querySelector(".lamp");
  var lampochka = document.querySelector(".lampochka");
  var headerWrapperMini = document.querySelector('.header__wrapper-mini');
  btn.addEventListener("click", function () {
    if (promo.style.display === "none" && // header.style.display === "none" &&
    body.style.background === "black" && headerMenu.style.display === "none" && headerSubheader.style.backgroundColor === "black" && headerLogo.style.display === "none" && headerContacts.style.display === "none" && headerSubheader.style.borderTop === "none" && advantages.style.display === "none" && consultation.style.display === "none" && services.style.display === "none" && carousel.style.display === "none" && review.style.display === "none" && footer.style.display === "none" && lamp.style.display === "block") {
      promo.style.display = "block";
      body.style.background = "none";
      headerMenu.style.display = "block";
      headerSubheader.style.backgroundColor = "rgba(40, 50, 60, .6)";
      headerLogo.style.display = "block";
      headerContacts.style.display = "block";
      headerSubheader.style.borderTop = "#d3d606 solid";
      advantages.style.display = "block";
      consultation.style.display = "block";
      services.style.display = "block";
      carousel.style.display = "block";
      review.style.display = "block";
      footer.style.display = "block";
      lamp.style.display = "none";
    } else {
      promo.style.display = "none";
      body.style.background = "black";
      body.style.height = "950px";
      headerMenu.style.display = "none";
      headerSubheader.style.backgroundColor = "black";
      headerLogo.style.display = "none";
      headerContacts.style.display = "none";
      headerSubheader.style.borderTop = "none";
      advantages.style.display = "none";
      consultation.style.display = "none";
      services.style.display = "none";
      carousel.style.display = "none";
      review.style.display = "none";
      footer.style.display = "none";
      lamp.style.display = "block";
      lampochka.style.top = "235" + "px";
      lampochka.style.margin = "0 auto";
      headerWrapperMini.style.justifyContent = "space-around";
    }
  });
}; //corousel


var slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  speed: 2000,
  responsive: {
    1000: {
      nav: true
    }
  }
});

document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};

document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};

var mediaQuery = window.matchMedia("(max-width: 767px)");

function prevMediaQuery(mediaQuery) {
  var element = document.querySelector(".prev");

  if (mediaQuery.matches) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function nextMediaQuery(mediaQuery) {
  var element = document.querySelector(".next");

  if (mediaQuery.matches) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

nextMediaQuery(mediaQuery);
prevMediaQuery(mediaQuery);
mediaQuery.addListener(prevMediaQuery);
mediaQuery.addListener(nextMediaQuery); //corausel

$(document).ready(function () {
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation1").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation1, #thanks").fadeOut("slow");
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
  new WOW().init();
}); //hamburger

window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelectorAll(".header__list"),
      headerList = document.querySelector(".header__list"),
      hamburger = document.querySelector(".header__hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("header__hamburger_active");
    headerList.classList.toggle("header__list_active");
  });
  menu.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("header__hamburger_active");
      headerList.classList.toggle("header__list_active");
    });
  });
});