const gulp = require('gulp');
const mocha = require('gulp-mocha');

// gulp.src("__tests__/basic.js", { read: false })
//     .pipe(mocha({ reporter: 'spec', exit: true }))
//     .on('error', console.error)



gulp.src("__tests__/types.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)