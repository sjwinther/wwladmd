$(document).ready(function() {

  //Clicking on the mobile-menu toggles a list of menu-items
  $("#burger").click(function() {
    $(this).toggleClass("line-through");
    $("#menu").slideToggle(200);
    return false;
  });

  //Upon window resize, the burger-style menu closes. If the window reaches a width above 500px the menu items reappear as normal
  $(window).resize(function() {
    var $width = $(window).width();
    if($width >= 500) {
      $("#menu").show();
    }
    if($width <= 500) {
      $("#menu").hide();
      $("#burger").removeClass("line-through");
    }
  });

});
