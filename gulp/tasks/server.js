import {paths} from '../paths.js';
import {create as bsCreate} from 'browser-sync';

export const browserSync = bsCreate(`Local Server`);

export const server = (done) => {
  browserSync.init({
    server: paths.destination.root,
    cors: true,
    open: true,
    notify: false,
    ui: false,
    reloadOnRestart: true,
    port: 4242,
    // online: false, // Work offline without internet connection
    // tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
  });

  done();
};
