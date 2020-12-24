const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const { logError } = require("gulp-sass");

gulp.task("sass", () => {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("Error", logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./sass/**/*.scss", gulp.series(["sass"]));
  gulp.watch(["./*.html", "./**/*.js"]).on("change", browserSync.reload);
});
