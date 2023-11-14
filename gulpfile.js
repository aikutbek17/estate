var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

// or...

gulp.task("server", function () {
  browserSync.init({
    proxy: "http://127.0.0.1:5500/#",
  });
});
gulp.task("default", gulp.parallel("server"));
