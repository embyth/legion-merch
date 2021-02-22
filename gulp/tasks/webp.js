import {paths} from '../paths.js';
import pkg from 'gulp';
import changed from 'gulp-changed';
import gulpWebp from 'gulp-webp';

const {source} = paths;
const {src, dest} = pkg;
const quality = 80;

export const webp = () => src(`${source.images.content}**/*.{jpg,jpeg,png}`)
  .pipe(changed(source.images.content, {extension: `.webp`}))
  .pipe(gulpWebp({quality}))
  .pipe(dest(source.images.content));
