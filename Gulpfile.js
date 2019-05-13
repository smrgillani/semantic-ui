'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/build'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});


/**
 * Default task
 */
gulp.task('default', ['sass','sass:watch']);
