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
	return gulp.src(['../css/sass/css_modules/*','../css/sass/*.sass' ])
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer('last 5 versions', 'Android >= 2.3', 'ChromeAndroid >= 20'))
			.pipe(concat('quantanalyst.css'))
			.pipe(gulp.dest('../css/production/'))
			.pipe(uglifycss())
			.pipe(rename('quantanalyst.min.css'))
		.pipe(gulp.dest('../css/production/'));
});


gulp.task('javascript', () => {
	return gulp.src('../js/es6/modules/*.js')
			.pipe(concat('quantanalyst_es6_build.js'))
			.pipe(gulp.dest('../js/es6/'))
			.pipe(babel({
				presets: ['@babel/env']
			}))
			.pipe(rename('quantanalyst.js'))
			.pipe(gulp.dest('../js/production/'))
			.pipe(uglifyjs())
			.pipe(rename('quantanalyst.min.js'))
		.pipe(gulp.dest('../js/production/'));
});


gulp.task('watch', () => {
	gulp.watch('../css/sass/*.sass', gulp.series('css'));
	gulp.watch('../js/es6/modules/*.js', gulp.series('javascript'));
});
