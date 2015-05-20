// requiring modules
var gulp = require('gulp');
var sass = require('gulp-sass');
//var livereload = require('gulp-liverelaod');

//livereload({start: true});

// sass function
gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
    console.log('css has been written');
    //.pipe(livereload());
    //console.log('live relaoded');
});

//gulp.task('livereload');


// watcher
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', [sass]);
    //livereload.listen();
});

// default function
gulp.task('default', ['watch']);