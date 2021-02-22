import {convertfonts as convertFontsTask} from './gulp/tasks/convertfonts.js';
import {copy} from './gulp/tasks/copy.js';
import {fonts} from './gulp/tasks/fonts.js';
import {icons} from './gulp/tasks/icons.js';
import {images} from './gulp/tasks/images.js';
import {lintspaces as lintspacesTask} from './gulp/tasks/lintspaces.js';
import {server} from './gulp/tasks/server.js';
import {styles} from './gulp/tasks/styles.js';
import {watcher} from './gulp/tasks/watcher.js';
import {webp as webpTask} from './gulp/tasks/webp.js';
import {zip as zipTask} from './gulp/tasks/zip.js';
import pkg from 'gulp';

const {series, parallel} = pkg;

export const build = parallel(copy, fonts, styles, images);

export const zip = series(zipTask);
export const webp = series(webpTask);
export const sprite = series(icons);
export const convertfonts = series(convertFontsTask);
export const lintspaces = series(lintspacesTask);
export default series(build, server, watcher);
