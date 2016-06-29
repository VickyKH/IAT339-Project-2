$(document).ready(
	function() {

		console.log("jQuery is ready!");

    var headerLocked = false;	// Header

		var width = $(window).width();
		var height = $(window).height();
		console.log("Window width = " + width);
		console.log("Window height = " + height);

		if (width <= 766) {
			$("nav").removeClass("navOpen");
			$("nav").addClass("navClosed");
			$(".navlink").hide();
		}
		else {
			$("nav").removeClass("navClosed");
			$("nav").addClass("navOpen");
			$(".navlink").show();
		}

    $(window).resize(function() {
      var width = $(window).width();
      var height = $(window).height();
      console.log("Window width = " + width);
      console.log("Window height = " + height);

      if (width <= 766) {
        $("nav").removeClass("navOpen");
        $("nav").addClass("navClosed");
				$(".navlink").hide();
      }
      else {
        $("nav").removeClass("navClosed");
        $("nav").addClass("navOpen");
				$(".navlink").show();
      }
    });// End of if statement

    $(".navlink-menu").click(
      function(e) {
				e.preventDefault();
        $(".navlink").slideToggle(500);
      }
    )

  }

);

/**    $(window).resize(function() {
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
);**/
