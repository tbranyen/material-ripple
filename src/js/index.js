var $ = require('jquery');
var ripple = require('./ripple');

$(".ripple").click(function(e) {
	ripple(this, e);
});
