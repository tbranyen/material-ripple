var del         = require('del'),
  gulp          = require('gulp'),
  rename        = require('gulp-rename'),
  uglify        = require('gulp-uglify'),
  postcss       = require('gulp-postcss'),
  autoprefixer  = require('autoprefixer'),
  cssnano       = require('cssnano');

// clean dist folder
gulp.task('clean', function () {
  del.sync(['./dist/**/*']);
});

// JS build
gulp.task('build:JS', function () {
  return gulp.src('./src/js/index.js')
    .pipe(rename('ripple.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename('ripple.min.js'))
    .pipe(gulp.dest('./dist'));
});

// Sass and CSS build
gulp.task('build:CSS', function () {
  var preprocessors = [
    autoprefixer({browsers: ['last 2 versions']}),
    cssnano()
  ];

  return gulp.src('./src/style/ripple.css')
    .pipe(postcss(preprocessors))
    .pipe(rename('ripple.min.css'))
    .pipe(gulp.dest('./dist'));
});

// Watcher
gulp.task('watch', function () {
  function log (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  }

  // watch JS
  gulp.watch('./src/js/**/*.js', ['build:JS'])
    .on('change', function (event) {
      log(event);
    });

  // watch CSS
  gulp.watch('./src/style/**/*.scss', ['build:CSS'])
    .on('change', function (event) {
      log(event);
    });
});

gulp.task('default', ['build']);

gulp.task('build', ['clean', 'build:JS', 'build:CSS']);

gulp.task('build-development', ['build', 'watch']);
