var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('servidor', function() {
    browserSync.init({
        server: {
            baseDir: "./html"
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
	gulp.watch('./html/js/*.js').on('change', reload);
	gulp.watch('./html/css/*.css').on('change', reload);
	gulp.watch('./html/*.html').on('change', reload);
});


gulp.task('default', ['watch','servidor']);