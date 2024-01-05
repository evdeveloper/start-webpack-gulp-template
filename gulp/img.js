const path = require('./path/path.js');

module.exports = function () {
  $.gulp.task('img:build', () => {
    return $.gulp.src([path.path.src.img, '!src/images/icons/**/*', path.path.src.imgComp])
      .pipe($.plugins.changed(path.path.build.img))
      .pipe($.plugins.plumber())
      .pipe($.gulp.dest(path.path.build.img)) // Copy all original img files
      // .pipe($.plugins.tinypng(process.env.TINYPNG_KEY_API))
      .pipe($.plugins.webp({ quality: 60 })) // Options WebP: https://github.com/imagemin/
      .pipe($.gulp.dest(path.path.build.img))
  })
}
