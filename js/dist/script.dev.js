"use strict";

window.onload = function () {
  //Кнопка включения
  var btn = document.querySelector(".light .vesametun"); // let btnShadow = document.querySelector(".light .donetugo");

  var headerSubheader = document.querySelector(".header__subheader");
  var promo = document.querySelector(".promo");
  var headerMenu = document.querySelector(".header__menu");
  var body = document.querySelector("body");
  var headerLogo = document.querySelector(".header__logo");
  var headerContacts = document.querySelector('.header__contacts');
  btn.addEventListener("click", function () {
    if (promo.style.display === "none" && // header.style.display === "none" &&
    body.style.background === "black" && headerMenu.style.display === "none" && headerSubheader.style.backgroundColor === "black" && headerLogo.style.display === "none" && headerContacts.style.display === 'none' && headerSubheader.style.borderTop === 'none') {
      promo.style.display = "block"; // header.style.display = "block";

      body.style.background = "none"; //   btn.style.top = '255px';
      //   btnShadow.style.top ='250px';

      headerMenu.style.display = "block";
      headerSubheader.style.backgroundColor = "rgba(40, 50, 60, .6)";
      headerLogo.style.display = "block";
      headerContacts.style.display = 'block';
      headerSubheader.style.borderTop = '#d3d606 solid';
    } else {
      promo.style.display = "none"; // header.style.display = "none";

      body.style.background = "black";
      body.style.height = "950px"; //   btn.style.top = '385px';
      //   btnShadow.style.top ='380px';

      headerMenu.style.display = "none";
      headerSubheader.style.backgroundColor = "black";
      headerLogo.style.display = "none";
      headerContacts.style.display = 'none';
      headerSubheader.style.borderTop = 'none';
    }
  });
};