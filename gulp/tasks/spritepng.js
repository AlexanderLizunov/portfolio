/**
 * Created by stimpik on 11.02.2017.
 */
'use strict';

module.exports = function() {
    $.gulp.task('spritepng', function () {
                return  $.gulp.src('./source/icons/*.*')
                .pipe($.gp.spritesmith({
                    imgName: 'sprite.png',
                    cssName: 'sprite.css',
                }))
        .pipe($.gulp.dest($.config.root +'/assets/sprite/'))
    })
}
