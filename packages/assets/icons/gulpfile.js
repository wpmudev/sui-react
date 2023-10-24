/**
 * Supported Packages
 * List here all dependencies necessary to run required tasks.
 *
 * @since 1.0.0
 */
const path = require("path")
const gulp = require("gulp")
const rename = require("gulp-rename")
const sass = require("gulp-sass")(require("sass"))
const cleanCSS = require("gulp-clean-css")
const autoprefixer = require("gulp-autoprefixer")
const header = require("gulp-header")
const prettier = require("gulp-prettier")
const ts = require("gulp-typescript")
const { exec } = require("child_process")

/**
 * Development Paths & Files
 *
 * @since 1.0.0
 */

const currentWorkingPath = process.cwd()
const { input, output, name } = require(path.join(
	currentWorkingPath,
	"package.json",
))

const packageName = name
const fileName = packageName.replace("@wpmudev/", "")

const inputSource = path.join(currentWorkingPath, input)
const inputStyles = path.join(inputSource, "scss/" + fileName + ".scss")

const outputSource = path.join(currentWorkingPath, output)
const outputStyles = path.join(currentWorkingPath, output + "/css")

/**
 * WPMU DEV Banner
 * Print this on SUI scripts.
 *
 * @since 1.0.0
 */

const banner = [
	"/*!",
	" * WPMU DEV Shared UI",
	`${fileName !== "sui-icons" ? " * Icons Pack (" + fileName + ")" : ""}`,
	" * ",
	" * Copyright 2023 Incsub (https://incsub.com)",
	" * Licensed under GPL-2.0 (http://www.gnu.org/licenses/gpl-2.0.html)",
	" */",
	"",
].join("\n")

/**
 * List of Supported Browsers
 *
 * @since 1.0.0
 */

const browsersList = ["last 2 version", "> 1%"]

/**
 * Building functions.
 * Compile and copy to output folder.
 *
 * @since 1.0.0
 */

function compile() {
	return gulp
		.src(inputStyles)
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(autoprefixer(browsersList))
		.pipe(header(banner))
		.pipe(prettier())
		.pipe(gulp.dest(outputStyles))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(outputStyles))
		.on("finish", function () {
			console.log("📦 " + packageName + " finished compiling.")
		})
}

function copyFonts() {
	return gulp
		.src(inputSource + "/fonts/**")
		.pipe(gulp.dest(outputSource + "/fonts"))
		.on("finish", function () {
			console.log("📦 " + packageName + " finished copying files.")
		})
}

function copySVG() {
	return gulp
		.src(inputSource + "/svg/**")
		.pipe(gulp.dest(outputSource + "/svg"))
		.on("finish", function () {
			console.log("📦 " + packageName + " finished copying files.")
		})
}

function tsBuild(cb) {
	exec("npx tsup", (err, stdout, stderr) => {
		console.log(stdout)
		console.error(stderr)
		cb(err)
	})
}

/**
 * Run tasks.
 * Use Gulp to run compiling tasks.
 *
 * @since 1.0.0
 */

exports.default = gulp.series(tsBuild, compile, copyFonts, copySVG)
