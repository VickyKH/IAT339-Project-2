$(document).ready(
	function() {

		console.log("jQuery is ready!");

    var headerLocked = false;	// Header

		var width = $(window).width();
		var height = $(window).height();
		console.log("Window width = " + width);
		console.log("Window height = " + height);

		if (width <= 760) {
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

      if (width <= 760) {
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
