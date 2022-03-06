const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.src("test.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)