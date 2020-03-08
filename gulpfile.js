'use strict';

// Plug in Modules

// General Modules
const
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  ignore = require('gulp-ignore'),
  del = require('del'),

  // CSS Modules
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),

  // JS Modules
  babel = require('gulp-babel'),
  terser = require('gulp-terser'),

  // Image Modules
  imagemin = require('gulp-imagemin'),
  jpegoptim = require('imagemin-jpegoptim'),
  webp = require('gulp-webp'),
  svgstore = require('gulp-svgstore'),

  // Font Modules
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),

  // Other
  browserSync = require('browser-sync').create('Local Server'),
  concat = require('gulp-concat'),
  sourcemap = require('gulp-sourcemaps'),
  lintspaces = require('gulp-lintspaces'),
  htmlmin = require('gulp-htmlmin'),
  zip = require('gulp-zip'),
  gulpif = require('gulp-if');

// Project Settings

let settings = {
  vendorStyles: true,
  vendorScripts: true,
  svgSprite: true
};

// Project Paths
let paths = {
  src: {
    root: './source/',
    styles: './source/sass/',
    scripts: './source/js/',
    fonts: './source/fonts/',
    images: {
      all: './source/img/',
      content: './source/img/content/',
      icons: './source/img/icons/'
    }
  },
  dest: {
    root: './build/',
    styles: './build/css/',
    scripts: './build/js/',
    fonts: './build/fonts/',
    images: {
      all: './build/img/',
      content: './build/img/content/'
    }
  },
  vendor: {
    scripts: [
      // './node_modules/jquery/dist/jquery.min.js', // Optional jQuery plug-in (npm i --save-dev jquery)
      // './node_modules/bootstrap/dist/js/bootstrap.min.js', // Optional Bootstrap plug-in (npm i --save-dev bootstrap)
      './node_modules/picturefill/dist/picturefill.min.js',
      './node_modules/svg4everybody/dist/svg4everybody.min.js',
      './node_modules/@babel/polyfill/dist/polyfill.min.js'
    ],
    styles: [
      // './node_modules/bootstrap/dist/css/bootstrap.min.css', // Optional Bootstrap plug-in (npm i --save-dev bootstrap)
      './node_modules/normalize.css/normalize.css'
    ]
  }
};

// Defining enviroment
const isDev = !process.env.NODE_ENV;
const isProd = !!process.env.NODE_ENV;

// Gulp Tasks

// Custom Styles
gulp.task('styles', function () {
  return gulp.src(paths.src.styles + '*.scss')
    .pipe(plumber())
    .pipe(gulpif(isDev, sourcemap.init()))
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(csso({ forceMediaMerge: true, comments: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(isDev, sourcemap.write('.')))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(gulpif(isDev, browserSync.stream()));
});

// Scripts & JS Libraries
gulp.task('scripts', function () {
  return gulp.src(paths.src.scripts + '**/*.js')
    .pipe(gulpif(isDev, sourcemap.init()))
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.dest.scripts))
    .pipe(terser()) // Minify js (opt.)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(isDev, sourcemap.write('.')))
    .pipe(gulp.dest(paths.dest.scripts));
});

// Images
// Responsive Images
var quality = 80; // Responsive images quality

// Image Optimization
gulp.task('images', function () {
  return gulp.src(paths.src.images.all + '**/*.{png,jpg,svg}')
    .pipe(newer(paths.dest.images.all))
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      jpegoptim({ quality: quality, progressive: true }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { removeTitle: true },
          { cleanupNumericValues: { floatPrecision: 1 } }
        ]
      })
    ]))
    .pipe(gulp.dest(paths.dest.images.all));
});

// Converting images to WebP
gulp.task('webp', function () {
  return gulp.src(paths.src.images.content + '**/*.{jpg,png}')
    .pipe(newer(paths.dest.images.content))
    .pipe(webp({ quality: quality }))
    .pipe(gulp.dest(paths.dest.images.content));
});

// SVG Sprite
gulp.task('svgsprite', function (done) {
  if (!settings.svgSprite) return done();
  return gulp.src(paths.src.images.icons + '**/*.svg')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { removeTitle: true },
          { removeAttrs: { attrs: '(stroke|fill)' } },
          { cleanupNumericValues: { floatPrecision: 1 } }
        ]
      })
    ]))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(paths.dest.images.all));
});

// Clean Images
gulp.task('cleanimg', function () {
  return del([paths.dest.images.all], { force: true });
});

// Font Modules
// Font Converter
gulp.task('fonts', function () {
  return gulp.src(paths.src.fonts + '**/*.ttf')
    .pipe(newer(paths.dest.fonts))
    .pipe(ttf2woff())
    .pipe(gulp.dest(paths.dest.fonts))
    .pipe(gulp.src(paths.src.fonts + '**/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(paths.dest.fonts));
});

// Coping fonts
gulp.task('copyfonts', function () {
  return gulp.src(paths.src.fonts + '**/*.{woff,woff2}')
    .pipe(newer(paths.dest.fonts))
    .pipe(gulp.dest(paths.dest.fonts));
});

// Optimizing HTML
gulp.task('html', function () {
  return gulp.src(paths.src.root + '**/*.html')
    .pipe(newer(paths.dest.root))
    .pipe(gulpif(isProd,
      htmlmin({
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true
      })
    ))
    .pipe(gulp.dest(paths.dest.root));
});

// Copying Vendor Scripts
gulp.task('vendorscripts', function (done) {
  if (!settings.vendorScripts) return done();
  return gulp.src(paths.vendor.scripts)
    .pipe(newer(paths.dest.scripts))
    .pipe(gulp.dest(paths.dest.scripts))
    .pipe(ignore.exclude('*.min.js'))
    .pipe(terser()) // Minify js (opt.)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dest.scripts));
});

// Copying Vendor Styles
gulp.task('vendorstyles', function (done) {
  if (!settings.vendorStyles) return done();
  return gulp.src(paths.vendor.styles)
    .pipe(newer(paths.dest.styles))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(ignore.exclude('*.min.css'))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dest.styles));
});

// Deleting 'build' folder
gulp.task('clean', function () {
  return del(paths.dest.root);
});

// Local Server
gulp.task('server', function (done) {
  browserSync.init({
    server: {
      baseDir: paths.dest.root
    },
    notify: false,
    open: true,
    cors: true,
    ui: false,
    reloadOnRestart: true,
    // online: false, // Work offline without internet connection
    // tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
  });

  done();
});

// Archiving project
const leadingZero = number => number < 10 ? `0${number}` : number;

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

gulp.task('zip', function () {
  let dateTime = getDateTime();
  let fileName = `dist-${dateTime}.zip`;

  return gulp.src(paths.dest.root + '**/*.*')
    .pipe(zip(fileName))
    .pipe(gulp.dest('./dist'));
});

// Linting according to editorconfig
gulp.task('lintspaces', function () {
  return gulp.src([
    '*.json',
    '*.md',
    './gulpfile.js',
    paths.src.root + '*.html',
    paths.src.scripts + '**/*.js',
    paths.src.images.all + '**/*.svg',
    paths.src.styles + '**/*.{scss,sass}'
  ])
    .pipe(lintspaces({ editorconfig: '.editorconfig' }))
    .pipe(lintspaces.reporter());
});

// Watching files
gulp.task('watch', function () {
  gulp.watch(paths.src.root + '*.html').on('all', gulp.series('html', browserSync.reload));
  gulp.watch(paths.src.fonts + '**/*.{ttf,woff,woff2}').on('all', gulp.series('fonts', 'copyfonts', browserSync.reload));
  gulp.watch(paths.src.scripts + '**/*.js').on('all', gulp.series('scripts', browserSync.reload));
  gulp.watch(paths.src.styles + '**/*.{sass,scss}').on('all', gulp.series('styles'));
  gulp.watch(paths.src.images.all + '**/*.{jpg,png,svg}').on('all', gulp.series('images', browserSync.reload));
  gulp.watch(paths.src.images.icons + '**/*.svg').on('all', gulp.series('svgsprite', browserSync.reload));
  gulp.watch(paths.src.images.content + '**/*.{png,jpg}').on('all', gulp.series('webp', browserSync.reload));
});

// Building project
gulp.task('build', gulp.series('clean', gulp.parallel('fonts', 'copyfonts', 'html', 'vendorstyles', 'styles', 'vendorscripts', 'scripts', 'images', 'webp', 'svgsprite')));

// Building project in dev mode and starting local server
gulp.task('default', gulp.series('build', 'server', 'watch'));
