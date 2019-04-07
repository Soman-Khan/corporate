var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestingCss = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack');


function html(done){
    console.log('Changes happened in html');
    browserSync.reload();
    done();
}

function styles(){
    console.log('Changes happened in CSS file');
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, cssvars, nestingCss, autoprefixer]))
    // .on('error', function(errorInfo){
    //     console.log(errorInfo.toString());
    //     this.emit('end');
    // })
    .pipe(gulp.dest('./app/temp/styles'));
}

function cssInject(){
    return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
}

function scripts(done){
    webpack( require('./webpack.config.js'), function(err,stats){
        if(err){
            console.log(err.toString());
        }
        console.log(stats.toString());
        done();
    });
}

function scriptsRefresh(callback){
    console.log('Changes happened in JS');
    browserSync.reload();
    callback();
}




function watch(done){
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/**/*.html', html);
    gulp.watch('./app/assets/styles/**/*.css', gulp.series(styles,cssInject));
    gulp.watch('./app/assets/scripts/**/*.js', gulp.series(scripts,scriptsRefresh));
    done();
}

gulp.task("html",html);
gulp.task("scripts",scripts);
gulp.task("watch",watch);

// exports.html = html;
// exports.styles = styles;
// exports.watch = watch;
// exports.default = gulp.parallel(html,styles);
