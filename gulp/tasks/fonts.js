import {paths} from '../paths.js';
import pkg from 'gulp';
import changed from 'gulp-changed';

const {source, destination} = paths;
const {src, dest} = pkg;

export const fonts = () =>
  src(`${source.fonts}**/*.{woff,woff2}`)
    .pipe(changed(destination.fonts))
    .pipe(dest(destination.fonts));
