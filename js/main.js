$(document).ready(
	function() {

    var pageWidth = $(window).width();
    var pageHeight = 0;

    console.log("Page width: " + pageWidth);
    console.log("Page height " + pageHeight);

    var navOpen = 0;		// Navigation is closed
    var headerLocked = false;	// Header unlocked

    $("#link-menu").click(
			function(clickEvent) {
				clickEvent.preventDefault();

				if (navOpen == 0) {
					$("nav").removeClass("isClosed");
					$("nav").addClass("isOpen");
					navOpen = 1;
				}
				else {
					$("nav").removeClass("isOpen");
					$("nav").addClass("isClosed");
					navOpen = 0;
				}

			}
		);


  }
);
