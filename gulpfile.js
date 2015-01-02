'use strict';
var fs = require('fs')
var gulp = require('gulp')

fs.readdirSync(__dirname + '/gulp').forEach(function (module) {
  require(__dirname + '/gulp/' + module)
})

gulp.task('build', ['js'])//, ['rev'])
gulp.task('build-and-test', ['build', 'test'])
gulp.task('watch', ['js:watch'])
gulp.task('default', ['watch'])