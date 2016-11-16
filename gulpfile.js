var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function() {
    gulp.src('./public/src/js/modules/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('commonScript', function() {
    gulp.src('./public/src/js/mjmodule.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist'));
});
gulp.task('moduleScript', function(){
    gulp.src('./public/src/js/modules/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./public/dist/modules'))
        .pipe(rename('index.min.js'))
        .pipe(uglify({preserveComments: 'all'}))
        .pipe(gulp.dest('./public/dist/modules'));
});

gulp.task('default', function(){
    gulp.watch('./public/src/js/modules/*.js', ['lint', 'moduleScript']);
    gulp.watch('./public/src/js/mjmodule.js', ['commonScript']);
});
