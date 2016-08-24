
var mcss = require('mcss'),
  loaderUtils = require('loader-utils')

module.exports = function(content) {
	this.cacheable && this.cacheable();

	var callback = this.async(),
    options = loaderUtils.parseQuery(this.query)
	
	mcss(options).translate(content).done(function(text) {
		callback(null, text);
	}).fail(function(err) {
		callback(err);
	});
}