var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var requirejsOptimize = require('gulp-requirejs-optimize');
var watch = require('gulp-watch'); 
var sftp = require('gulp-sftp');

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

gulp.task('deploy', function () {
  return gulp.src('**')
        .pipe(sftp({
          host: 'piter33.dns-rus.net',
          user: 'schpil',
          pass: '7307084bdd7db15c81d19432a2507a52',
          remotePath: '/home/schpil/dooob.ru/wp/zem/wp-content/themes/zem'
        }));
});