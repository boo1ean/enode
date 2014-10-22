var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var template_cache = require('gulp-angular-templatecache');
var run_sequence = require('run-sequence');

var config = {
	styles: {
		src: [
			'./front/styles/reset.styl',
			'./front/styles/main.styl'
		],

		dist: 'app.css',
		dest: './static'
	},

	templates: {
		src: './front/modules/**/*.html',
		dest: './front/.template-cache'
	},

	js: {
		src: [
			'./vendor/lodash/dist/lodash.min.js',
			'./vendor/jquery/dist/jquery.js',

			'./vendor/jquery/dist/jquery.js',
			'./vendor/store-js/store.js',

			'./vendor/angular/angular.js',
			'./front/template-cache/*.js',
			'./vendor/angular-route/angular-route.js',
			'./vendor/angular-resource/angular-resource.js',

			'./front/app.js',
			'./front/routes.js',
			'./front/modules/**/*.js',
			'./front/services/*.js',
			'./front/resources/*.js',

			'./front/.template-cache/*.js'
		],

		dist: 'app.js',
		dest: './static'
	}
};

gulp.task('styles', function() {
	gulp.src(config.styles.src)
		.pipe(stylus())
		.pipe(concat(config.styles.dist))
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task('templates', function() {
	gulp.src(config.templates.src)
		.pipe(template_cache({ module: 'app.templates' }))
		.pipe(gulp.dest(config.templates.dest));
});

gulp.task('js', function() {
	gulp.src(config.js.src)
		.pipe(concat(config.js.dist))
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('build', function() {
	run_sequence(['templates', 'styles'], ['js']);
});

gulp.task('watch', ['build'], function() {
	gulp.watch(['./front/**/*.*'], ['build']);
});

gulp.task('default', ['watch']);
