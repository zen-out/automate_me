const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.src("__tests__/tests.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)
gulp.src("__tests__/compare.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)