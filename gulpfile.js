/**
 * Supported Packages
 * List here all dependencies necessary to run required tasks.
 *
 * @since 1.0.0
 */
const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');
const prettier = require('gulp-prettier');

/**
 * Development Paths & Files
 *
 * @since 1.0.0
 */

const currentWorkingPath = process.cwd();
const { input, output, name } = require(path.join(
	currentWorkingPath,
	'package.json'
));

const packageName = name;
const fileName = packageName.replace('@wpmudev/', '');

const inputSource = path.join(currentWorkingPath, input);
const outputSource = path.join(currentWorkingPath, output);

/**
 * WPMU DEV Banner
 * Print this on SUI scripts.
 *
 * @since 1.0.0
 */

const banner = [
	'/*!',
	' * WPMU DEV Shared UI',
	`${fileName !== 'sui-css' ? ' * CSS Framework (' + fileName + ')' : ''}`,
	' * ',
	' * Copyright 2018 - 2023 Incsub (https://incsub.com)',
	' * Licensed under GPL-2.0 (http://www.gnu.org/licenses/gpl-2.0.html)',
	' */',
	'',
].join('\n');

/**
 * List of Supported Browsers
 *
 * @since 1.0.0
 */

const browsersList = ['last 2 version', '> 1%'];

/**
 * Building functions.
 * Compile and copy to output folder.
 *
 * @since 1.0.0
 */

function compile() {
	return gulp
		.src(inputSource + '/scss/**/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(autoprefixer(browsersList))
		.pipe(header(banner))
		.pipe(prettier())
		.pipe(gulp.dest(outputSource + '/css'))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(outputSource + '/css'))
		.on('finish', function () {
			console.log('📦 ' + packageName + ' finished compiling.');
		});
}

function copy() {
	return gulp
		.src(inputSource + '/**/**/**/**')
		.pipe(gulp.dest(outputSource))
		.on('finish', function () {
			console.log('📦 ' + packageName + ' finished copying files.');
		});
}

/**
 * Run tasks.
 * Use Gulp to run compiling tasks.
 *
 * @since 1.0.0
 */

exports.default = gulp.series(compile);
