import gulp from 'gulp'
import config from './gulp/config'
import clean from './gulp/tasks/clean'
import server from './gulp/tasks/server'
import {scriptsBuild, scriptsWatch} from './gulp/tasks/scripts'
import {pugBuild, pugWatch} from './gulp/tasks/pug'
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import {assetsBuild, assetsWatch} from './gulp/tasks/assets'
import {imagesBuild, imagesWatch} from './gulp/tasks/images'

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    scriptsBuild,
    pugBuild,
    assetsBuild,
    stylesBuild,
    imagesBuild,
  ),
);

export const watch = gulp.series(
  // build,
  server,
  gulp.parallel(
    scriptsWatch,
    pugWatch,
    assetsWatch,
    stylesWatch,
    imagesWatch
  )
);

exports.stylesWatch = stylesWatch
