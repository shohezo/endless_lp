
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
