$(document).ready(function() {

  //Clicking on the mobile-menu toggles a list of menu-items
  $("#burger").click(function() {
    $(this).toggleClass("line-through");
    $("#menu").slideToggle(200);
    return false;
  });

  //Upon window resize, the burger-style menu closes
  //This is done to prevent the dropdown from staying open if the user resizes back and forth, e.g. going from portrait to landscape on mobile
  //If the window reaches a width above 520px the menu items reappear as normal
  $(window).resize(function() {
    var $width = $(window).width();
    if($width > 520) {
      $("#menu").show();
    }
    if($width < 520) {
      $("#menu").hide();
      $("#burger").removeClass("line-through");
    }
  });

});
