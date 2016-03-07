var $ = require('jquery');

module.exports = function (self, event) {
	var surface = $(self);

  // create .ink element if it doesn't exist
	if (surface.find(".ink").length == 0) {
    surface.prepend("<span class='ink'></span>");
  }

	var ink = surface.find(".ink");

  // incase of quick double clicks stop the previous animation
	ink.removeClass("animate");

	// set size of .ink
	if (!ink.height() && !ink.width()) {
		// use surface's width or height whichever is larger for
    // the diameter to make a circle which can cover the entire element
		var d = Math.max(surface.outerWidth(), surface.outerHeight());
		ink.css({height: d, width: d});
	}

	// get click coordinates
	// Logic:
  // click coordinates relative to page minus
  // surface's position relative to page minus
  // half of self height/width to make it controllable from the center
	var x = event.pageX - surface.offset().left - (ink.width() / 2);
	var y = event.pageY - surface.offset().top - (ink.height() / 2);

	var rippleColor = surface.data("ripple-color");

	//set the position and add class .animate
	ink.css({
		top: y + 'px',
		left: x + 'px',
		background: rippleColor
	}).addClass("animate");
}
