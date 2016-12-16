$(document).ready(function() {

  //Clicking on the mobile-menu toggles a list of menu-items
  //On the frontpage, it also toggles some extra padding, so the menu and the content do no overlap
  $("#burger").click(function() {
    $(this).toggleClass("line-through");
    $("#frontpage").toggleClass("extra-padding");
    $("#menu").slideToggle(200);
    return false;
  });

  //Upon window resize, the burger-style menu closes and the menu items reappears normally
  $(window).resize(function() {
    var $width = $(window).width();
    if($width >= 500) {
      $("#menu").show();
    }
    if($width <= 500) {
      $("#menu").hide();
      $("#burger").removeClass("line-through");
      $("#frontpage").removeClass("extra-padding");
    }
  });

});
