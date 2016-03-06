var del         = require('del'),
  gulp          = require('gulp'),
  sass          = require('gulp-sass'),
  nconf         = require('nconf'),
  rename        = require('gulp-rename'),
  uglify        = require('gulp-uglify'),
  postcss       = require('gulp-postcss'),
  sourcemaps    = require('gulp-sourcemaps'),
  autoprefixer  = require('autoprefixer'),
  cssnano       = require('cssnano'),
  browserify    = require('browserify'),
  source        = require('vinyl-source-stream'),
  buffer        = require('vinyl-buffer');

nconf.argv()
  .env()
  .file({file: 'config.json'});

var debug = nconf.get('debug');

// clean dist folder
gulp.task('clean', function () {
  del.sync(['./dist/**/*']);
});

// JS build
gulp.task('build:JS', function () {
  var b = browserify({
    entries: './src/js/index.js',
    debug: true,
  });

  if (debug) {
    return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(rename('ripple.js'))
      .pipe(gulp.dest('./dist'))
      .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('ripple.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'));
  }

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
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

  if (debug) {
    return gulp.src('./src/style/ripple.scss')
      .pipe(rename('style.css'))
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
        .pipe(postcss(preprocessors))
        .pipe(rename('ripple.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'));
  }

  return gulp.src('./src/style/ripple.scss')
    .pipe(rename('style.css'))
    .pipe(sass().on('error', sass.logError))
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
