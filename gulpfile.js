var gulp = require('gulp');
var mocha = require('gulp-mocha');


gulp.task('test', function (done) {
        var mochaErr;
        gulp.src('src/**/*.spec.js')
            .pipe(mocha({
                reporter: 'spec',
                require: [
                    './mocha.conf.js'
                ],
                timeout: 12000
            }))
            .on('error', function (err) {
                mochaErr = err;
                done(mochaErr);
            })
            // .pipe(istanbul.writeReports())
            .on('end', function () {
                done(mochaErr);
                process.exit();
            });
    });
