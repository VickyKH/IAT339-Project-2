$(document).ready(
	function() {

		console.log("jQuery is ready!");

    var headerLocked = false;	// Header
		var headerOpen = false;
		var screenMobile = true;

		var width = $(window).width();
		var height = $(window).height();
		console.log("Window width = " + width);
		console.log("Window height = " + height);

		headerSetup(width);

    $(window).resize(function() {
			var width = $(window).width();
			var height = $(window).height();
			console.log("Window width = " + width);
			console.log("Window height = " + height);

			headerSetup(width);

    });

/**  Clicking on the menu button slides the menu down  **/
  	$(".navlink-menu").click(
    	function(e) {
				e.preventDefault();

				// If header is currently closed, open it
				if ($(".main").hasClass("headerClosed") == true) {
					$(".navlink").slideDown(500);
					$(".main").removeClass("headerClosed");
					$(".main").addClass("headerOpen");
				}

				// If header is currently opened, close it
				else {
					$(".navlink").slideUp(500);
					$(".main").removeClass("headerOpen");
					$(".main").addClass("headerClosed");
				};

				var navHeight = $(".header-site").height();
				console.log("Navigation height = " + navHeight);
    	}
  	);


/** Setup the header to its default form depending on the screen size **/
		function headerSetup(width) {
			// Set the header to closed
			if($(".main").hasClass("headerOpen") == true) {
				$(".main").removeClass("headerOpen");
				$(".main").addClass("headerClosed");
			};
			headerOpen = false;

			// Hide links depending on the screen size
			if (width <= 760) {						// Hide links in mobile
				$(".navlink").hide();
			}
			else {
				$(".navlink").show();			// Show links in desktop
			};

		};


/** Makes the header move up and down
		function headerOpen() {
			// Move main content down
			if($(".main").hasClass("headerClosed") == true) {
				$(".main").removeClass("headerClosed");
				$(".main").addClass("headerOpen");
			};
			// Show navigation dropdown
			$(".navlink").show();
			headerOpen = true;	// Header is open
		};

		function headerClose() {
			// Move main content up
			if($(".main").hasClass("headerClosed") == false) {
				$(".main").removeClass("headerOpen");
				$(".main").addClass("headerClosed");
			};
			// Hide navigation dropdown
			$(".navlink").hide();
			headerOpen = false; //Header is closed
		};**/


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
