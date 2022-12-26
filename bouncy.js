/** @format */

$(() => {
 //jQUERY START

 //Variables ------------------------------------------------
 const $text = $(".our-coffee");

 //Hides ------------------------------------------------

 $text.hide();

 //Bouncey Function ------------------------------------------------
 bouncey = () =>
  $(".t-content").animate({ "margin-top": "90px" }, 1000).animate(
   { "margin-top": "40px" },
   1000,
   bouncey //callback the function, to restart animation cycle
  );

 bouncey(); //call, to start the animation

 //Bouncey Text Function ------------------------------------------------

 bounceyText = () =>
  $text
   .fadeIn(200)
   .animate({ "margin-top": "90px" }, 1000)
   .animate({ "margin-top": "70px" }, 1000, bounceyText);

 bounceyText();
}); //jQUERY END
