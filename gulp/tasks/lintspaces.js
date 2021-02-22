import {paths} from '../paths.js';
import pkg from 'gulp';
import gulpLintspaces from 'gulp-lintspaces';

const {src} = pkg;

export const lintspaces = () =>
  src([
    `*.json`,
    `*.md`,
    `./gulpfile.js/**/*.js`,
    `${paths.source.root}*.html`,
    `${paths.source.scripts}**/*.js`,
    `${paths.source.images}**/*.svg`,
    `${paths.source.styles}**/*.{scss,sass}`,
    `!${paths.source.scripts}lib/**/*.js`,
    `!${paths.source.styles}lib/**/*.{sass,scss}`,
  ])
    .pipe(gulpLintspaces({editorconfig: `.editorconfig`}))
    .pipe(gulpLintspaces.reporter());
