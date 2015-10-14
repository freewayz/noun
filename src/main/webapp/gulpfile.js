var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


gulp.task('browserify', function () {
    browserify('./src/js/nounOnline.js')
    .transform('reactify')
    .bundle()
    .pipe(source('safhrms-main.js'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('copy', function () {
    gulp.src('src/nounOnline.html').pipe(gulp.dest('dist'))
});


gulp.task('default', ['browserify', 'copy'], function () {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});


