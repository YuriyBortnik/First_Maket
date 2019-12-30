var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css_main'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});