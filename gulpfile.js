"use strict";

const gulp = require("gulp");

const path = {

      build: {
        html: "build/",
        js: "build/js/",
        css: "build/css/",
        img: "build/img/",
        fonts: "build/fonts/"
      },

      src: {
        rootFolder: "src/",
        pugFiles: "src/pug/*.pug",
        data: "src/pug/_data/",
        htmlFolder: "src/html/",
        htmlFiles: "src/html/*.html",
        js: "src/js/main.js",
        stylus: "src/stylus/partials/",
        styles: "src/stylus/main.styl",
        imgFolder: "src/img/",
        imgFiles: "src/img/**/*",
        fonts: "src/fonts/**/*{woff,woff2}"
      },

      watch: {
        pug: "src/pug/**/*.pug",
        html: "src/html/*.html",
        js: "src/js/**/*.js",
        json: "src/pug/_data/*.json",
        style: "src/stylus/**/*.styl",
        imgFiles: "src/img/**/*",
        fonts: "src/fonts/**/*.*"
      },

      clean: "./build"
};



function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);

    return task(callback);
  });
}



lazyRequireTask("serve", "./tasks/serve", {
});



lazyRequireTask("deploy", "./tasks/deploy", {
});



lazyRequireTask("clean", "./tasks/clean", {
  src: path.clean
});



lazyRequireTask("pug:build", "./tasks/pug", {
  src: path.src.pugFiles,
  data: path.src.data,
  dst: path.src.htmlFolder
});



lazyRequireTask("html:build", "./tasks/html", {
  src: path.src.htmlFiles,
  dst: path.build.html
});



lazyRequireTask("js:build", "./tasks/js", {
  src: path.src.js,
  dst: path.build.js
});



lazyRequireTask("image:build", "./tasks/images", {
  src: path.src.imgFiles,
  dst: path.build.img
});



lazyRequireTask("style:build", "./tasks/styles", {
  src: path.src.styles,
  dst: path.build.css
});



lazyRequireTask("fonts:build", "./tasks/fonts", {
  src: path.src.fonts,
  dst: path.build.fonts
});

gulp.task("build", gulp.series(
  "pug:build",
  "html:build",
  "js:build",
  "image:build",
  "style:build",
  "fonts:build"
));

gulp.task("watch", function() {
  gulp.watch([path.watch.pug, path.watch.json], gulp.series("pug:build"));
  gulp.watch([path.watch.html], gulp.series("html:build"));
  gulp.watch([path.watch.js], gulp.series("js:build"));
  gulp.watch([path.watch.imgFiles], gulp.series("image:build"));
  gulp.watch([path.watch.style], gulp.series("style:build"));
  gulp.watch([path.watch.fonts], gulp.series("fonts:build"));
});


gulp.task("default",
  gulp.series("clean", "build", gulp.parallel("serve", "watch"))
);
