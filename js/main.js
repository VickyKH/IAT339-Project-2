$(document).ready(
	function() {

    var navOpen = true;		// Navigation is open
    var headerLocked = false;	// Header unlocked

    $(window).resize(function() {
      var width = $(window).width();
      var height = $(window).height();
      console.log("Window width = " + width);
      console.log("Window height = " + height);

      if(width <= 555) {
        $("nav").removeClass("isOpen");
        $("nav").addClass("isClosed");
        navOpen = true;
      }
      else {
        $("nav").removeClass("isClosed");
        $("nav").addClass("isOpen");
        navOpen = false;
      }

    );

    $(".navlink-menu").click(
      function(clickEvent) {
        clickEvent.preventDefault();

        if (navOpen == true) {
          $("nav").removeClass("isClosed");
          $("nav").addClass("isOpen");
          navOpen = false;
        }
        else {
          $("nav").removeClass("isOpen");
          $("nav").addClass("isClosed");
          navOpen = true;
        }
      }
    );

  }
);
