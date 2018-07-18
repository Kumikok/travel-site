var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function(){
	console.log("saved HTML file");
});
gulp.task('cssInjection', ['styles'], function(){
	return gulp.src('./app/temp/style/style.css')
		.pipe(browserSync.stream());
});

gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	watch('./app/index.html', function(){
		gulp.start('html');
		browserSync.reload();
	});
	watch('./app/assets/style/**/*.css', function(){
		gulp.start('cssInjection');
	});

});