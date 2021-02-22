import {paths} from '../paths.js';
import fs from 'fs';
import pkg from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import imageminJpegoptim from 'imagemin-jpegoptim';

const {source, destination} = paths;
const quality = 80;
const {src, dest} = pkg;

export const images = (done) => {
  const svgoPlugins = [
    {removeViewBox: false},
    {removeTitle: true},
    {cleanupNumericValues: {floatPrecision: 1}}
  ];

  const imageminPlugins = [
    imagemin.optipng(),
    imageminJpegoptim({max: quality, progressive: true}),
    imagemin.svgo({
      plugins: svgoPlugins
    })
  ];

  src([
    `${source.images.all}**/*.{jpeg,jpg,png,svg}`,
    `!${source.images.all}sprite.svg`,
    `!${source.images.icons}**/*.{jpeg,jpg,png,svg}`
  ])
    .pipe(changed(destination.images.all))
    .pipe(imagemin(imageminPlugins))
    .pipe(dest(destination.images.all));

  src(`${source.images.content}**/*.webp`)
    .pipe(changed(destination.images.content))
    .pipe(dest(destination.images.content));

  if (fs.existsSync(`${source.images.all}sprite.svg`)) {
    src(`${source.images.all}sprite.svg`)
      .pipe(changed(destination.images.all))
      .pipe(dest(destination.images.all));
  }

  done();
};
