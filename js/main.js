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

/**  Clicking on the menu button slides the menu down  **/
  	$(".navlink-menu").click(
    	function(e) {
				e.preventDefault();
      	$(".navlink").slideToggle(500);
    	}
  	);


/**  Change donut image to an eaten version when hovered  **/
		$(".hover-donut")
			// On hover, change picture to eaten
			.mouseover(function() {
				var src = $(this).attr("src").replace("before", "after");
				$(this).attr("src", src);
				console.log(src);
			})
			// On hover, change picture back to uneaten
			.mouseout(function() {
				var src = $(this).attr("src").replace("after", "before");
				$(this).attr("src", src);
				console.log(src);
			});

}); // End of Javascript
/*
function(clickEvent) {

	clickEvent.preventDefault();
*/
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
