'use strict';
var gulp       = require('gulp')
var concat     = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')
var plumber    = require('gulp-plumber')
var rename     = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')
var uglify     = require('gulp-uglify')
var wrap       = require("gulp-wrap")

gulp.task('js', function () {
  return gulp.src(['src/js/**/module.js', 'src/js/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(wrap('(function(){ "use strict"; <%= contents %> })();'))
      .pipe(concat('EventBus.js'))
      .pipe(ngAnnotate())
      .pipe(gulp.dest('dist/js'))
      .pipe(uglify())
      .pipe(rename('EventBus.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('js:watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})
