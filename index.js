var path = require('path');
var mcss = require('mcss');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
    this.cacheable && this.cacheable();

    var callback = this.async();
    var options = loaderUtils.parseQuery(this.query);

    options.filename = this.resource; //fix the path bug: @import string contain char like '../../'

    var include;
    var cwd = process.cwd();

    if (options.include) {
        if (!Array.isArray(options.include)) { options.include = [ options.include ]; }
        include = options.include.map(function (p) {
            return path.resolve(cwd, p);
        });
    }

    var instance = mcss(options);

    if (include) { instance.include(include); }

    instance.translate(content).done(function(text) {
        callback(null, text);
    }).fail(function(err) {
        callback(err);
    });
};
