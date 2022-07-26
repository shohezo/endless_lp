/* アコーディオン */
$(function () {
  $(".bl_faq_item_answer:first").show(); //ひとつ目は最初から
  $(".bl_faq_list .bl_faq_item_question").click(function () {
    $(this).next(".bl_faq_item_answer").slideToggle(300);
    $(this).toggleClass("open");
  });
});

//.ly_fvまでスクロールするとheaderの色が変化
("use strict");

jQuery(window).on("scroll", function () {
  if (jQuery("#news").height() < jQuery(this).scrollTop()) {
    jQuery(".el_pageTop").addClass("show");
  } else {
    jQuery(".el_pageTop").removeClass("show");
  }
});

var headerH = $("header").outerHeight(true); //headerの高さを取得
//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
  //ヘッダーの高さを取得
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    //ヘッダーの高さを超えたら
    $("header").addClass("HeightMin"); //#headerについているHeightMinというクラス名を付与
    $("header .el_logo").addClass("HeightMin"); //#headerについているHeightMinというクラス名を付与
  } else {
    $("header").removeClass("HeightMin"); //HeightMinというクラス名を除去
    $("header .el_logo").removeClass("HeightMin"); //#headerについているHeightMinというクラス名を付与
  }
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime(); //スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $(".el_pageTop").fadeIn();
  } else {
    $(".el_pageTop").fadeOut();
  }
});

// #page-topをクリックした際の設定
$(".el_pageTop").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});
/* スクロールするとアンダーラインがのびる */

$(window).on("scroll", function () {
  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 250) {
      $(this).addClass("isActive");
    }
  });
});

/* AOS */
$(document).ready(function () {
  /* animation */
  AOS.init({
    duration: 1000,
    once: false,
  });
});

/* animate.css */
$(".lightSpeedInLeftTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__lightSpeedInLeft"); //クラス名が付与
  }
});
$(".animate__bounceInTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__bounceIn"); //クラス名が付与
  }
});
$(".animate__wobbleTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__wobble"); //クラス名が付与
  }
});
$(".animate__rotateInTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__rotateIn"); //クラス名が付与
  }
});
$(".animate__pulseTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__pulse"); //クラス名が付与
  } else {
    //表示領域から出た時
    $(this).removeClass("animate__animated animate__pulse"); //クラス名が除去
  }
});
$(".sequenceTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("cssanimation leMagnify sequence"); //クラス名が付与
  } else {
    //表示領域から出た時
    $(this).removeClass("cssanimation leMagnify sequence"); //クラス名が除去
  }
});
