'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var karma = require('gulp-karma');

var testFiles = [
  'bower_components/angular/angular.js',
  'dist/js/EventBus.js',
  'test/karma/**/*.spec.js'
];

gulp.task('test', function () {
  return gulp.src(testFiles)
    .pipe(plumber())
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
});

gulp.task('test:watch', function () {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
