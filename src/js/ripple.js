var $ = require('jquery');

module.exports = function (self, e) {
	var parent = $(self).parent();

  // create .ink element if it doesn't exist
	if (parent.find(".ink").length == 0) {
    parent.prepend("<span class='ink'></span>");
  }

	var ink = parent.find(".ink");

  // incase of quick double clicks stop the previous animation
	ink.removeClass("animate");

	// set size of .ink
	if (!ink.height() && !ink.width()) {
		// use parent's width or height whichever is larger for
    // the diameter to make a circle which can cover the entire element
		var d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}

	// get click coordinates
	// Logic:
  // click coordinates relative to page minus
  // parent's position relative to page minus
  // half of self height/width to make it controllable from the center
	var x = e.pageX - parent.offset().left - ink.width() / 2;
	var y = e.pageY - parent.offset().top - ink.height() / 2;

	//set the position and add class .animate
	ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
}
