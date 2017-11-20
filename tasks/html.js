"use strict";

const gulp = require("gulp"),
      notify = require("gulp-notify"),
      prettify = require("gulp-html-prettify"),
      combiner = require("stream-combiner2").obj;



module.exports = function(options) {
  return function() {
    return gulp.src(options.src)
      .pipe(prettify({indent_char: " ", indent_size: 2}))
      .pipe(gulp.dest(options.dst));
  };
};
