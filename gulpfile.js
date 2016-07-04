var gulp = require('gulp');
var zip = require('gulp-zip');
var path = require('path');
var folders = require('gulp-folders');

gulp.task('build',function(){
    return gulp.src(['Appliance/**/*.*', '!Appliance/Tasks/*', '!Appliance/**/other/**'])
        .on('data', function(file){
        })
        .pipe(gulp.dest(function(){
            var data = new Date;
            var month;

            function getMonth (){
                switch (data.getMonth()){
                    case    0:
                        month = '01';
                        break;
                    case    9:
                        month = '10';
                        break;
                    default :
                        if(data.getMonth().toString().length != 1){
                            month = data.getMonth() + 1;
                        }
                        else{
                            if(data.getMonth() != 0){
                                month =  '0' + (data.getMonth() + 1).toString();
                            }
                            else{
                                month = '01'
                            }

                        }
                }
            }

            getMonth();
            return 'Amendments_'+data.getDate()+'_'+month;
        }));
});

gulp.task('archive', function(){
    return gulp.src('Amendmends/npm-debug.log')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('Amendmends/'));
});

gulp.task('fold', folders('Amendmends/Amendments_26_04', function(folder){
    //This will loop over all folders inside pathToFolder main, secondary
    //Return stream so gulp-folders can concatenate all of them
    //so you still can use safely use gulp multitasking

    return gulp.src(path.join('Amendmends/Amendments_26_04', folder, '**/*.*'))
        .pipe(gulp.dest('dist'));
}));