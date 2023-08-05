window.onload = function () {
  //Кнопка включения
  let btn = document.querySelector(".light .vesametun");
  let promo = document.querySelector('.promo');
  
  btn.addEventListener("click", () => {
    promo.classList.toggle('promo_active')
  });
};

//corousel
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
//corausel

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
