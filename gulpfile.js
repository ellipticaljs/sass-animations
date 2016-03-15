
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');


///tasks

gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp sassdoc|fade|slide|bounce|flip|attention|light-speed|roll|rotate|all|hardware-accelerate"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());
});

gulp.task('fade', function () {
    compileSass('fade');
});

gulp.task('slide', function () {
    compileSass('slide');
});

gulp.task('bounce', function () {
    compileSass('bounce');
});

gulp.task('flip', function () {
    compileSass('flip');
});

gulp.task('attention', function () {
    compileSass('attention');
});

gulp.task('light-speed', function () {
    compileSass('light-speed');
});

gulp.task('roll', function () {
    compileSass('roll');
});

gulp.task('rotate', function () {
    compileSass('rotate');
});

gulp.task('all', function () {
    compileSass('all');
});


gulp.task('hardware-accelerate', function () {
    compileSass('hardware-accelerate');
});


///private
function compileSass(src){
    gulp.src('./src/' + src + '.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}
