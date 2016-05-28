var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('default', ['server', 'watch']);

gulp.task('server', function () {
    connect.server({
        root: './',
        livereload: true
    });   
});

gulp.task('watch', function () {
    gulp.watch('./**', function (event) {
        gulp.src(event.path)
            .pipe(connect.reload());
    });
})
