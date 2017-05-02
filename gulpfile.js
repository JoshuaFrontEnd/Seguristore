var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('servidor', function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

// gulp.task('servidor', function() {
//     browserSync.init({
//         proxy: "http://localhost/www/10.03.16%20Web%20Physiolift/html/",
//         files: ["**/*.php"]
//     });
// });

gulp.task('watch', function () {
	gulp.watch('./js/*.js').on('change', reload);
	gulp.watch('./css/*.css').on('change', reload);
	gulp.watch('*.html').on('change', reload);
});


gulp.task('default', ['watch','servidor']);