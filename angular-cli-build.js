/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'jquery/dist/*',
      'hammerjs/**/*.js',
      'angular2-materialize/dist/*',
      'materialize-css/dist/**/*',
      'dragula/dist/dragula.js',
      'dragula/dist/**/*.min.css',
      'ng2-dragula/**/*.js'
    ]
  });
};
