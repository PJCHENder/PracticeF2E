var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


//	在 cmd 中輸入 gulp concat 執行
gulp.task('concat', function(){
	return gulp.src('./source/js/**/*.js')	//	資料來源
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/javascript'))	//	儲存目的
})

//	在 cmd 中輸入 gulp sass 執行
gulp.task('sass', function(){
	return gulp.src('./source/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./public/stylesheets'))
})

//	監控資料夾中資料有無變更
gulp.task('watch', function(){
	gulp.watch('./source/js/**/*.js', ['concat'])
	gulp.watch('./source/sass/**/*.sass', ['sass'])	
})

//	在 cmd 中輸入 gulp 執行
gulp.task('default', ['concat', 'sass', 'watch']);
