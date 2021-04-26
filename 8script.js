$(function(){

  $("#acc2,#acc3").hide();
  var target = 1

  $('.main__faq-contents dt').click(function(){

    if ($('.main__faq-contents dt').hasClass("open")) {
    $($(this).attr("href")).stop().slideToggle(500);
    $('.main__faq-contents dt').removeClass("open");
  }else {
    $($(this).attr("href")).stop().slideToggle(500);
    $('.main__faq-contents dt').addClass("open");
  }
  return false;
  });

  AOS.init()

  $(".agree-aleart p").hide();

  $(".main__contact-Button").click(function(){

    var chkboxChk = $('input[name="agreement"]:checked').length;
    if(chkboxChk == 0) {
      $(".agree-aleart p").show();
    }else {
      $(".agree-aleart p").hide();
    }

    return false;

  });

  // 1. 変数mqlにMediaQueryListを格納
const mql = window.matchMedia('(min-width: 1000px)');

// 2. メディアクエリに応じて実行したい処理を関数として定義
const handleMediaQuery = function(mql) {
  if (mql.matches) {
    // 769px以上の場合の処理
    var swiper = new Swiper('.swiper-container', {
      slidesPerView:　4,
      spaceBetween: 56,
      centeredSlides: true,
      loop: true,
      autoplayDisableOnInteraction:false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
      },
    });

    $('.formButton-block').click(function(){
      var target = $(".main__contact").offset().top;
      target -= 80;
      $("html, body").animate({scrollTop: target}, 500);
    });

  } else {
    // 769px未満の場合の処理
    var swiper = new Swiper('.swiper-container', {
      slidesPerView:　2.5,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplayDisableOnInteraction:false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
      },
    });

    $('.formButton-block').click(function(){
      var target = $(".main__contact").offset().top;
      target -= 80;
      $("html, body").animate({scrollTop: target}, 500);
    });
  }
};

// 3. イベントリスナーを追加（メディアクエリの条件一致を監視）
mql.addListener(handleMediaQuery);

// 4. 初回チェックのため関数を一度実行
handleMediaQuery(mql);


$(".ham-menu").hide();

$(".ham__menu-open").click(function(){
  $(".ham-menu").fadeIn(500);
});

$(".ham__menu-close").click(function(){
  $(".ham-menu").fadeOut(500);
});

$(".ham-menu__content-feature").click(function(){
  $(".ham-menu").fadeOut(500);
  var targetOne =  $(".main__feature-title").offset().top;
  $("html, body").animate({scrollTop: targetOne}, 1000);
});

$(".header__content-feature").click(function(){
  var targetOne =  $(".main__feature-title").offset().top;
  targetOne -= 50;
  $("html, body").animate({scrollTop: targetOne}, 1000);
});

$(".ham-menu__content-value").click(function(){
  $(".ham-menu").fadeOut(500);
  var targetTwo = $(".main__value-title").offset().top;
  $("html, body").animate({scrollTop: targetTwo}, 1000);
});

$(".header__content-value").click(function(){
  var targetTwo = $(".main__value-title").offset().top;
  targetTwo -= 50;
  $("html, body").animate({scrollTop: targetTwo}, 1000);
});

$(".ham-menu__content-form").click(function(){
  $(".ham-menu").fadeOut(500);
  var target = $(".main__contact").offset().top;
  $("html, body").animate({scrollTop: target}, 1000);
});

$(".header__content-form").click(function(){
  var target = $(".main__contact").offset().top;
  target -= 70;
  $("html, body").animate({scrollTop: target}, 1000);
});






});
