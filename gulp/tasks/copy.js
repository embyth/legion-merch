import {paths} from '../paths.js';
import pkg from 'gulp';

const {vendor, source, destination} = paths;
const {src, dest} = pkg;

export const copy = (done) => {
  src(vendor.styles)
    .pipe(dest(`${destination.styles}libs/`));
  src(`${source.root}*.ico`)
    .pipe(dest(destination.root));

  done();
};
