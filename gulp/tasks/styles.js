var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/style/style.css')
  	.pipe(postcss([cssimport, mixins, cssvars, cssnested, autoprefixer]))
  	.on('error', function(errorInfo){
  		console.log(errorInfo.toString());
  		this.emit('end');
  	})
  	.pipe(gulp.dest('./app/temp/style'));
});