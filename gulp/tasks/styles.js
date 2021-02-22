import {paths} from '../paths.js';
import pkg from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import wait from 'gulp-wait';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import {browserSync} from './server.js';

import process from 'process';

const isDev = !process.env.NODE_ENV;
const {source, destination} = paths;
const {src, dest} = pkg;

export const styles = () => {
  const sassOptions = {
    outputStyle: `expanded`,
    sourceComments: true,
    includePaths: [source.styles]
  };
  const postCssPlugins = [autoprefixer()];
  const cssoOptions = {
    forceMediaMerge: true,
    comments: false
  };

  return src(`${source.styles}style.{scss,sass}`, {sourcemaps: true})
    .pipe(plumber())
    .pipe(wait(200))
    .pipe(sass(sassOptions)).on(`error`, sass.logError)
    .pipe(postcss(postCssPlugins))
    .pipe(csso(cssoOptions))
    .pipe(rename({suffix: `.min`}))
    .pipe(gulpIf(isDev, dest(destination.styles, {sourcemaps: true}), dest(destination.styles)))
    .pipe(gulpIf(isDev, browserSync.stream()));
};
