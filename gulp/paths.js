const dirs = {
  src: `./markup/`,
  dest: `./public/`
};

export const paths = {
  source: {
    root: dirs.src,
    styles: dirs.src + `sass/`,
    scripts: dirs.src + `js/`,
    fonts: dirs.src + `fonts/`,
    images: {
      all: dirs.src + `img/`,
      content: dirs.src + `img/content/`,
      icons: dirs.src + `img/icons/`
    }
  },
  destination: {
    root: dirs.dest,
    styles: dirs.dest + `css/`,
    scripts: dirs.dest + `js/`,
    fonts: dirs.dest + `fonts/`,
    images: {
      all: dirs.dest + `img/`,
      content: dirs.dest + `img/content/`
    }
  },
  dist: `./dist`,
  vendor: {
    styles: [
      `./node_modules/normalize.css/normalize.css`,
    ],
  }
};
