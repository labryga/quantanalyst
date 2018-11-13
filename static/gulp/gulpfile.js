var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	minify = require('gulp-babel-minify');
	


gulp.task('sass', () => {
	return gulp.src('../css/sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('../css/development/'));
});

gulp.task('postcss', () => {
	return gulp.src('/home/affe/quantanalyst/quantanalyst/static/css/development/*.css')
	.pipe(postcss([lost()]))
	.pipe(autoprefixer('last 5 versions', 'Android >= 2.3', 'ChromeAndroid >= 20'))
	.pipe(gulp.dest('/home/affe/quantanalyst/quantanalyst/static/css/production/'));
});

gulp.task('gulppug', () => {
	return gulp.src('../../templates/pug/*.pug')
	// .pipe(pug())
	.pipe(pug({pretty: false}))
	.pipe(gulp.dest('../../templates/'));
});

gulp.task('concat', () => {
	return gulp.src('../js/es6/modules/*.js')
	  .pipe(concat('quantanalyst.js'))
	  .pipe(gulp.dest('../js/es6/'));
} );

gulp.task('babel', () => {
	return gulp.src('../js/es6/*.js')
	.pipe(babel({
		presets: ['@babel/env'],
	}))
	.pipe(gulp.dest('../js/'));
} );

gulp.task('minify', () => {
	return gulp.src('../js/quantanalyst.js')
	.pipe(minify())
	pipe(gulp.dest('../js/'));
});


gulp.task('watch', () => {
	gulp.watch('../../templates/pug/*.pug', gulp.series('gulppug'));
	gulp.watch('../css/sass/*.sass', gulp.series('sass'));
	gulp.watch('../css/development/*.css', gulp.series('postcss'));
	gulp.watch('../js/es6/modules/*.js', gulp.series('concat'));
	gulp.watch('../js/es6/*.js', gulp.series('babel'));
	gulp.watch('../js/*.js', gulp.series('minify'));
});
