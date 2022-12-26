/** @format */

//Used Vanilla Javascript for Nav Toggle

const toggle = document.querySelector(".toggle");
const links = document.querySelector(".mobile-links");

toggle.onclick = () => {
 if (links.style.display === "none") {
  links.style.display = "flex";
 } else {
  links.style.display = "none";
 }
};

// :::::::::::::::::::JQUERY STARTS::::::::::::::::::::::::
$(function () {
 // :::::::::::::::::::VARIABLES::::::::::::::::::::::::

 var $logo = $(".logo");
 var $header = $("header");
 var $h1 = $("h1");

 var $pic1 = $(".picture1");
 var $pic2 = $(".picture2");
 var $pic3 = $(".picture3");

 var $pics = $(".pictures");

 var $items = $(".products-content");
 var $up = $(".arrow");

 var $nav = $("nav");
 var $toggle = $(".toggle");

 // VARIABLES END::::::::::::::::::::::::::

 // BASIC FADE IN FUNCTIONS START:::::::::::::
 $logo.hide().fadeIn(2500);
 $header.hide().fadeIn(3500);
 $h1.hide().fadeIn(3500);

 // :::::::::::::::::::FADEIN CIRCLE PICS ON SCROLL ::::::::::::::::::::::::

 /*
$pics.hide();  //ON SCROLL FUNCTIONS: I first hid the element to fadeIn element.


$(window).scroll(function() {

$pics.fadeIn(3000);
    
});

*/

 // :::::::::::::::::::FADEIN PRODUCTS ON SCROLL ::::::::::::::::::::::::

 $items.hide();

 $(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
   $items.fadeIn(3000);
  }
 });

 // :::::::::::::::::::FADEIN UP BUTTON ON SCROLL ::::::::::::::::::::::::

 //Faded in on a scroll greater than 40 down the page.
 $(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
   $up.fadeIn();
  } else {
   $up.fadeOut();
  }
 }); //Fade in on Scroll End

 // :::::::::::::::::::FILTER: INVERT - BUTTON ON SCROLL ::::::::::::::::::::::::

 //I inverted on white background in a range of 900 to 1400.

 $(window).scroll(function () {
  if ($(this).scrollTop() > 1120 && $(this).scrollTop() < 1650) {
   $up.css("filter", "invert(0)");
  } else {
   $up.css("filter", "invert(100)");
  }
 });

 // :::::::::::::::::::Animated Scroll to Top on a Click ::::::::::::::::::::::::
 //I animated the page to scroll up to 0 (very top), on a click of the button.

 $up.click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
 });

 //Greater than 900 down the page, but less than 1000 down the page.

 $(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
   $nav.css("opacity", "1");
   $nav.css("height", "70px");
  } else {
   $nav.css("opacity", ".9");
   $nav.css("height", "130px");
  }
 });

 $(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
   $toggle.css("opacity", "0");
  } else {
   $toggle.css("opacity", "1");
  }
 });
    
    
}); //jquery end

// $(window).scroll(function(){});

//Date Coded: August 2022
