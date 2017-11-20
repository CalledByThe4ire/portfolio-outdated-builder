"use strict";

const gulp = require("gulp"),
      ghPages = require("gulp-gh-pages");



module.exports = function(options) {
  return function() {
    return gulp.src('./build/**/*')
      .pipe(ghPages());
  };
};
