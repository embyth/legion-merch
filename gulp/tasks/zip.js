import {paths} from '../paths.js';
import pkg from 'gulp';
import gzip from 'gulp-zip';

const {destination, dist} = paths;
const {src, dest} = pkg;

const leadingZero = (number) => number < 10 ? `0${number}` : number;

const getDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = leadingZero(now.getMonth() + 1);
  const day = leadingZero(now.getDate());
  const hours = leadingZero(now.getHours());
  const minutes = leadingZero(now.getMinutes());
  const seconds = leadingZero(now.getSeconds());

  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
};

export const zip = () => {
  let dateTime = getDateTime();
  let fileName = `dist-${dateTime}.zip`;

  return src(`${destination.root}**/*.*`)
    .pipe(gzip(fileName))
    .pipe(dest(dist));
};
