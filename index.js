
var mcss = require('mcss')

module.exports = function(content) {
	this.cacheable && this.cacheable();

	var callback = this.async();
	
	mcss().translate(content).done(function(text) {
		callback(null, text);
	}).fail(function(err) {
		callback(err);
	});
}