
var mcss = require('mcss'),
  loaderUtils = require('loader-utils');

module.exports = function(content) {
	this.cacheable && this.cacheable();

	var callback = this.async(),
        options = loaderUtils.parseQuery(this.query);

	options.filename = this.resource;//fix the path bug: @import string contain char like '../../'

	mcss(options).translate().done(function(text) {//the param 'content' shouldn't be set in translate(content)
		callback(null, text);
	}).fail(function(err) {
		callback(err);
	});
};