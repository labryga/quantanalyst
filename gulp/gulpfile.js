var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	uglifyjs = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	rename = require('gulp-rename');
	

gulp.task('css', () => {
	return gulp.src([
			'../staticfiles/css/sass/normalize.css',
			'../staticfiles/css/sass/html.sass',
			'../staticfiles/css/sass/header.sass',
			'../staticfiles/css/sass/main.sass',
			'../staticfiles/css/sass/footer.sass'])
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer('last 5 versions', 'Android >= 2.3', 'ChromeAndroid >= 20'))
			.pipe(concat('quantanalyst.css'))
			.pipe(gulp.dest('../staticfiles/css/production/'))
			.pipe(uglifycss())
			.pipe(rename('quantanalyst.min.css'))
		.pipe(gulp.dest('../staticfiles/css/production/'));
});


gulp.task('javascript', () => {
	return gulp.src('../staticfiles/js/es6/modules/*.js')
			.pipe(concat('quantanalyst_es6_build.js'))
			.pipe(gulp.dest('../staticfiles/js/es6/'))
			.pipe(babel({
				presets: ['@babel/env']
			}))
			.pipe(rename('quantanalyst.js'))
			.pipe(gulp.dest('../staticfiles/js/production/'))
			.pipe(uglifyjs())
			.pipe(rename('quantanalyst.min.js'))
		.pipe(gulp.dest('../staticfiles/js/production/'));
});


gulp.task('watch', () => {
	gulp.watch('../staticfiles/css/sass/*', gulp.series('css'));
	gulp.watch('../staticfiles/js/es6/modules/*.js', gulp.series('javascript'));
});
