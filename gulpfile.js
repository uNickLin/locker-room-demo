'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	debug = require('gulp-debug'),
	pug = require('gulp-pug'),
	tiny = require('gulp-tinypng-nokey'),
	imagemin = require('gulp-imagemin'),
	changed = require('gulp-changed');

// convert pug to html
gulp.task('pug', function buildHTML() {
	return gulp.src('pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream());
});

// convert sass to css
gulp.task('sass', function () {
	return gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

//  compress js
gulp.task('js', function () {
	return gulp.src(['js/vendor/jquery.min.js', 'js/vendor/bootstrap.min.js', 'js/vendor/*.js', 'js/component/*.js', 'js/default.js', 'js/*.js'])
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});

// minimize img files
gulp.task('imgmin', function () {
	return gulp.src(['img/**'])
		.pipe(changed('dist/img'))
		.pipe(imagemin())
		// .pipe(tiny())
		.pipe(debug({
			title: 'img'
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('img', function () {
	return gulp.src(['img/**'])

		.pipe(imagemin())
		// .pipe(tiny())
		.pipe(debug({
			title: 'img'
		}))
		.pipe(gulp.dest('dist/img'));
});

// server
gulp.task('serve', function () {
	browserSync.init({
		server: "./dist/"
	});
});

// 監看
gulp.task('watch', function () {
	gulp.watch('pug/**/*.pug', ['pug']);
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('img/**', ['img', 'imgmin']);
});

// type ‘gulp’ in terminal to start server and watch change
gulp.task('default', ['serve', 'watch']);
