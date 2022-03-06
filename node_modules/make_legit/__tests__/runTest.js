const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.src("__tests__/formats.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)


gulp.src("__tests__/index.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)