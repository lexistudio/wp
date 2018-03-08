var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var requirejsOptimize = require('gulp-requirejs-optimize');
var watch = require('gulp-watch'); 

gulp.task('css', function () {
  gulp.src('./assets/css/stylus/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('min', function() {
  return gulp.src('./assets/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('js', function () {
  return gulp.src('./assets/js/require/app.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function() {
  watch('./assets/css/**/*.styl', function(event) {
    gulp.start('css');
  });
});

gulp.task('default', ['css', 'watch']);