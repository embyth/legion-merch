# :hocho: Legion Merch

[![Build status][travis-image]][travis-url] [![Dependency status][dependency-image]][dependency-url]

Legion Web Store 

Author: [Rostyslav Miniukov](https://github.com/embyth/)

[Project Demo](https://embyth.github.io/legion-merch/)

---

## Project Structure

```bash
.
├── build/            # project build directory (created automatically)
├── dist/             # directory in which the assembled project is archived (created automatically)
├── source/           # directory for placing project source files
│   ├── fonts/        # fonts directory
│   ├── img/          # images directory
│   │   └── content/  # content images directory for converting to webp format
│   │   └── products/ # product photos directory
│   │   └── icons/    # vector images directory for generating svg sprite
│   │   └── logo/     # vector logo images directory
│   ├── js/           # JavaScript directory
│   │   └── lib /     # Vendor JavaScript Librarys directory
│   ├── sass/         # styles directory
│   └── *.html        # pages mark-up files
├── .babelrc          # Babel config
├── .editorconfig     # Editor config
├── .eslintrc.json    # ESLint config
├── .gitattributes    # Git attributes file
├── .gitignore        # Git ignore file
├── .npmrc            # npm config
├── .stylelintrc.json # stylelint config
├── .travis.yml       # Travis CI config
├── gulpfile.js       # Gulp tasks file
├── package.json      # npm dependencies and project settings file
├── package-lock.json # npm lock-file
└── README.md         # project documents
```

[travis-image]: https://travis-ci.org/embyth/legion-merch.svg?branch=master
[travis-url]: https://travis-ci.org/embyth/legion-merch
[dependency-image]: https://david-dm.org/embyth/legion-merch/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/embyth/legion-merch?type=dev
