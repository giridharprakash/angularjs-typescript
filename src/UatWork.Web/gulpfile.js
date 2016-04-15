var gulp = require('gulp');
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true });
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var colors = $.util.colors;
var envenv = $.util.env;

gulp.task("clean-js", function (done)
{
    del([config.clientJsPath + "*.*"]).then(paths =>
    {
        log(paths);
        done();
    });

});

gulp.task("clean-css", function (done)
{
    del([config.clientCssPath + "*.*"]).then(paths =>
    {
        log(paths);
        done();
    });

});

gulp.task("copyFabric", ["clean-js"], function ()
{
    return gulp.src(config.fabricComponentJsfile)
        .pipe(gulp.dest(config.clientJsPath));
});

gulp.task("copy-normalizecss", ["clean-css"], function ()
{
    return gulp.src(config.sourceCssPath + "normalize.css")
        .pipe(gulp.dest(config.clientCssPath));
});

gulp.task("scss-css", ["copy-normalizecss"], function ()
{
    log('Compiling SCSS --> CSS');

    return gulp
        .src(config.sourceSCSSPath)
        .pipe($.plumber({
            errorHandler: onError
        })) // exit gracefully if something fails after this
        .pipe($.sass())
//        .on('error', errorLogger) // more verbose and dupe output. requires emit.
        .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .pipe(gulp.dest(config.clientCssPath));
});

gulp.task('browserify', ['template-cache'], function ()
{
    // Grabs the app.js file
    return browserify({ entries: ['./wwwroot/scripts/templates.js', './Content/scripts/app.Component.js'] })
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        //.pipe($.uglify())
        // saves it the public/js/ directory
        .pipe(gulp.dest('./wwwroot/scripts/'));
});

gulp.task('template-cache', function ()
{
    return gulp.src(config.sourceHtmlPath)
      .pipe($.angularTemplatecache(config.templateCache.file, config.templateCache.options))
      .pipe(gulp.dest('./wwwroot/scripts/'));
});


gulp.task("dev-build", ["copyFabric", "scss-css", "browserify"], function ()
{

});

gulp.task("default", ["dev-build"]);


function onError(exception)
{
    log(exception);
}

function log(msg)
{
    if (typeof (msg) === 'object')
    {
        for (var item in msg)
        {
            if (msg.hasOwnProperty(item))
            {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else
    {
        $.util.log($.util.colors.blue(msg));
    }
}
