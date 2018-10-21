var gulp = require('gulp'),
	lost = require('lost'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
	return gulp.src('../css/sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('../css/development/'));
});

gulp.task('postcss', function() {
	return gulp.src('/home/affe/quantanalyst/quantanalyst/static/css/development/*.css')
	.pipe(postcss([lost()]))
	.pipe(autoprefixer('last 5 versions', 'Android >= 2.3', 'ChromeAndroid >= 20'))
	.pipe(gulp.dest('/home/affe/quantanalyst/quantanalyst/static/css/production/'));
});

gulp.task('gulppug', function() {
	return gulp.src('../../templates/pug/*.pug')
	// .pipe(pug())
	.pipe(pug({pretty: false}))
	.pipe(gulp.dest('../../templates/'));
});

gulp.task('watch', function() {
	gulp.watch('../../templates/pug/*.pug', gulp.series('gulppug'));
	gulp.watch('../css/sass/*.sass', gulp.series('sass'));
	gulp.watch('../css/development/*.css', gulp.series('postcss'));
});
