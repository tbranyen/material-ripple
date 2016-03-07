var $ = require('jquery');
var ripple = require('./ripple');

$(".material-ripple").click(function(event) {
	ripple(this, event);
});
