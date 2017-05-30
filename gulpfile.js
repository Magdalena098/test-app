var gulp = require('gulp');
    sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/src/assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/src/assets/css'))
});


gulp.task('watch', ['sass'], function(){
  gulp.watch('app/src/assets/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html'); 
})




