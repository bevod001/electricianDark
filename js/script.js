window.onload = function () {
  //Кнопка включения
  let btn = document.querySelector(".light .vesametun");
  // let btnShadow = document.querySelector(".light .donetugo");
  let headerSubheader = document.querySelector(".header__subheader");
  let promo = document.querySelector(".promo");
  let headerMenu = document.querySelector(".header__menu");
  let body = document.querySelector("body");
  let headerLogo = document.querySelector(".header__logo");
  let headerContacts = document.querySelector(".header__contacts");
  let advantages = document.querySelector(".advantages");
  let consultation = document.querySelector(".consultation");
  let services = document.querySelector(".services");
  let carousel = document.querySelector(".carousel");
  let review = document.querySelector(".review");
  let footer = document.querySelector(".footer");
  btn.addEventListener("click", () => {
    if (
      promo.style.display === "none" &&
      // header.style.display === "none" &&
      body.style.background === "black" &&
      headerMenu.style.display === "none" &&
      headerSubheader.style.backgroundColor === "black" &&
      headerLogo.style.display === "none" &&
      headerContacts.style.display === "none" &&
      headerSubheader.style.borderTop === "none" &&
      advantages.style.display === "none" &&
      consultation.style.display === "none" &&
      services.style.display === "none" &&
      carousel.style.display === "none" &&
      review.style.display === "none" &&
      footer.style.display === "none"
    ) {
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
};

var slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  speed: 2000,
  responsive: {
    1000: { nav: true },
  },
});

document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};

document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};

const mediaQuery = window.matchMedia("(max-width: 767px)");

function prevMediaQuery(mediaQuery) {
  const element = document.querySelector(".prev");
  if (mediaQuery.matches) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function nextMediaQuery(mediaQuery) {
  const element = document.querySelector(".next");
  if (mediaQuery.matches) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
nextMediaQuery(mediaQuery);
prevMediaQuery(mediaQuery);
mediaQuery.addListener(prevMediaQuery);
mediaQuery.addListener(nextMediaQuery);
//corousel

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
});

//hamburger

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelectorAll(".header__list"),
  headerList = document.querySelector(".header__list"),
  hamburger = document.querySelector(".header__hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger_active");
    headerList.classList.toggle("header__list_active");
  });

  menu.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger_active");
      headerList.classList.toggle("header__list_active");
    });
  });
});
