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
  btn.addEventListener("click", function () {
    if (promo.style.display === "none" && // header.style.display === "none" &&
    body.style.background === "black" && headerMenu.style.display === "none" && headerSubheader.style.backgroundColor === "black" && headerLogo.style.display === "none" && headerContacts.style.display === "none" && headerSubheader.style.borderTop === "none" && advantages.style.display === "none" && consultation.style.display === "none" && services.style.display === "none" && carousel.style.display === "none" && review.style.display === "none" && footer.style.display === "none") {
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
    }
  });
}; //corousel


$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow.png"></button>'
  }); //modal

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
});