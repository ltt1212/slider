var gulp = require('gulp');
var less = require('gulp-less');
// var imagemin = require('gulp-imagemin');
// var uglify = require('gulp-uglify');

gulp.task('less',function(){
    return gulp.src('less/main.less')
        .pipe(less())
        // .pipe(cssmin({
        //     advanced: false,
        //     compatibility: 'ie7',
        //     keepBreaks: true,
        //     keepSpecialComments: '*'
        // }))
        .pipe(gulp.dest('css'));
})
// gulp.task('png', function () {
//     return gulp.src('src/images/*')
//         .pipe(imagemin({
//             progressive: true
//         }))
//         .pipe(gulp.dest('dist/images'));
// });
// gulp.watch('src',['compile-less','concat','png']);

gulp.task('default',['less'], function(){
    return gulp.watch(['less/main.less'],['less']);
});
