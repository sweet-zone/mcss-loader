const path = require('path');
const mcss = require('mcss');
const loaderUtils = require('loader-utils');
const { Translator, Interpreter } = mcss

module.exports = function(content) {
    this.cacheable && this.cacheable();

    const callback = this.async();
    const options = loaderUtils.getOptions(this) || {};

    options.filename = this.resource; //fix the path bug: @import string contain char like '../../'

    // include to pathes
    if (options.include) {
      options.pathes = options.pathes || [];
      options.pathes = options.pathes.concat(ensureArray(options.include));
    }

    // path to absolute
    if (Array.isArray(options.pathes)) {
      const cwd = process.cwd();
      options.pathes = options.pathes.map(function (p) {
          return path.resolve(cwd, p);
      });
    }

    translate(content, options).then(result => {
      result.imports.forEach(imp => {
        this.addDependency(imp);
      });
      callback(null, result.css || '');
    }).catch(e => {
      callback(e);
    });
};

function ensureArray(target) {
  if (!target) {
    return [];
  }

  if (Array.isArray(target)) {
    return target;
  }

  return [target];
}

function translate(string, options) {
  const instance = mcss(options);

  const translator = new Translator(options);
  const interpreter = new Interpreter(options);

  const walkers = options.walkers;
  if (walkers.length){
      walkers.forEach(function(hook){
          hook && interpreter.on(hook);
      })
  }

  return new Promise(function(resolve, reject) {
    instance.parse(string).done(function(ast) {
      try{
          ast = interpreter.interpret(ast);

          resolve( {
            css: translator.translate(ast),
            imports: interpreter._globalImports || []
          } )
      }catch(e){
          reject(e);
      }
    } ).fail( e => {
      reject(e);
    } )
  });
}
