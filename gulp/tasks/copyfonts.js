/**
 * Created by stimpik on 11.02.2017.
 */
'use strict';

module.exports = function() {
    $.gulp.task('copyfonts', function () {
        return  $.gulp.src('./source/fonts/*')
            .pipe($.gulp.dest($.config.root +'/assets/fonts/'))
    });
}

