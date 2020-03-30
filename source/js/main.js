'use strict';

// SVG Sprite
svg4everybody(); // eslint-disable-line

// JavaScript Page Toggler
const pageBody = document.querySelector('.page');
if (pageBody.classList.contains('page--no-js')) {
  pageBody.classList.remove('page--no-js');
}

// Preventing animation on page load by class
setTimeout(function () {
  if (pageBody.classList.contains('preload')) {
    pageBody.classList.remove('preload');
  }
}, 500);

// Height Setter Script For Overlays And Pop-Ups Elements (Inner Pages)
let siteHeaderHeight = document.querySelector('.site-header');
let siteFooterHeight = document.querySelector('.site-footer');
let productInfo = document.querySelector('.product__info');
let height;

if (siteHeaderHeight) {
  siteHeaderHeight = siteHeaderHeight.clientHeight;
}

if (siteFooterHeight) {
  siteFooterHeight = siteFooterHeight.clientHeight;
}

let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

if (productInfo) {
  if (viewportWidth >= 1366) {
    productInfo.style.height = viewportHeight - siteHeaderHeight - siteFooterHeight + 'px';
  }
}

if (viewportWidth >= 1366) {
  height = viewportHeight - siteHeaderHeight - siteFooterHeight;
} else {
  height = viewportHeight - siteHeaderHeight;
}

window.addEventListener('resize', () => {
  let siteHeaderHeight = document.querySelector('.site-header');
  let siteFooterHeight = document.querySelector('.site-footer');
  let productInfo = document.querySelector('.product__info');

  if (siteHeaderHeight) {
    siteHeaderHeight = siteHeaderHeight.clientHeight;
  }

  if (siteFooterHeight) {
    siteFooterHeight = siteFooterHeight.clientHeight;
  }

  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;

  if (productInfo) {
    if (viewportWidth >= 1366) {
      productInfo.style.height = viewportHeight - siteHeaderHeight - siteFooterHeight + 'px';
    }
  }

  if (viewportWidth >= 1366) {
    height = viewportHeight - siteHeaderHeight - siteFooterHeight;
  } else {
    height = viewportHeight - siteHeaderHeight;
  }

  if (document.body.classList.contains('page--inner')) {
    menuBody.style.height = height + 'px';
    menuOverlay.style.height = height + 'px';
  }

  if (document.body.classList.contains('page--inner')) {
    let cartHeight = viewportHeight - siteHeaderHeight;
    cartOverlay.style.height = cartHeight + 'px';
    cartBody.style.height = cartHeight + 'px';
  }
});

// Pop-Up Togglers
// Search
let searchToggler = document.querySelector('.user-nav__button--search');
let searchBody = document.getElementById('search-pop');
let searchClose = document.querySelector('.search__close');
let searchField = document.getElementById('search-field');

if (searchBody) {
  searchToggler.addEventListener('click', function (event) {
    event.preventDefault();
    searchBody.classList.toggle('search--open');

    if (!document.body.classList.contains('page--no-overflow')) {
      document.body.classList.add('page--no-overflow');
    } else {
      document.body.classList.remove('page--no-overflow');
    }

    window.setTimeout(function () {
      searchField.focus();
    }, 100);
  });

  searchClose.addEventListener('click', function (event) {
    event.preventDefault();
    searchBody.classList.toggle('search--open');
    if (document.body.classList.contains('page--no-overflow')) {
      document.body.classList.remove('page--no-overflow');
    }
  });
}

// Cart
let cartToggler = document.querySelector('.user-nav__button--cart');
let cartBody = document.getElementById('cart-pop');
let cartClose = document.querySelector('.cart__close');
let cartOverlay = document.querySelector('.cart__overlay');

if (cartBody) {
  cartToggler.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    if (!document.body.classList.contains('page--no-overflow')) {
      document.body.classList.add('page--no-overflow');
    } else {
      document.body.classList.remove('page--no-overflow');
    }
  });

  cartClose.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    if (document.body.classList.contains('page--no-overflow')) {
      document.body.classList.remove('page--no-overflow');
    }
  });

  cartOverlay.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    if (document.body.classList.contains('page--no-overflow')) {
      document.body.classList.remove('page--no-overflow');
    }
  });

  if (document.body.classList.contains('page--inner')) {
    let cartHeight = viewportHeight - siteHeaderHeight;
    cartOverlay.style.height = cartHeight + 'px';
    cartBody.style.height = cartHeight + 'px';
  }
}

// Menu
let menuButton = document.querySelector('.menu-toggler');
let menuBody = document.querySelector('.site-nav');
let menuClose = document.querySelector('.site-nav__close-button');
let menuOverlay = document.querySelector('.site-nav__overlay');

if (menuButton) {
  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    menuBody.classList.toggle('site-nav--open');
    menuOverlay.classList.toggle('site-nav__overlay--visible');
    menuButton.classList.toggle('menu-toggler--opened');
    if (!document.body.classList.contains('page--no-overflow')) {
      document.body.classList.add('page--no-overflow');
    } else {
      document.body.classList.remove('page--no-overflow');
    }
  });

  menuOverlay.addEventListener('click', function (event) {
    event.preventDefault();
    menuButton.classList.toggle('menu-toggler--opened');
    menuBody.classList.toggle('site-nav--open');
    menuOverlay.classList.toggle('site-nav__overlay--visible');
    if (document.body.classList.contains('page--no-overflow')) {
      document.body.classList.remove('page--no-overflow');
    }
  });

  if (menuClose) {
    menuClose.addEventListener('click', function (event) {
      event.preventDefault();
      menuButton.classList.toggle('menu-toggler--opened');
      menuBody.classList.toggle('site-nav--open');
      menuOverlay.classList.toggle('site-nav__overlay--visible');
      if (document.body.classList.contains('page--no-overflow')) {
        document.body.classList.remove('page--no-overflow');
      }
    });
  }

  if (document.body.classList.contains('page--inner')) {
    menuBody.style.height = height + 'px';
    menuOverlay.style.height = height + 'px';
  }
}

// Creating attributes for buttons
let glitchButtons = document.querySelectorAll('.button--glitch');

Array.prototype.forEach.call(glitchButtons, function (el) {
  let content = el.textContent.toUpperCase();
  let attr = document.createAttribute('data-text');
  attr.value = content;
  el.setAttributeNode(attr);
});

// Select Focus Behavior
let selectSize = document.querySelectorAll('.product__size, .form__select');

if (selectSize) {
  Array.prototype.forEach.call(selectSize, function (el) {
    el.addEventListener('change', function () {
      el.blur();
    });
  });
}

// Select And Label Behavior
let selectField = document.querySelector('.form__select');
let selectLabel = document.querySelector('.form__label--select');

if (selectField) {
  let selectOptions = selectField.getElementsByTagName('option');

  selectField.addEventListener('click', function () {
    for (var i = 1; i < selectOptions.length; i++) {
      if (selectOptions[i].selected) {
        selectLabel.style.cssText = `
          top: 0;
          transform: none;
          cursor: default;
        `;
      }
    }
  });
}

// Select Disable Text Adder
let sizeOptions = document.querySelector('.product__size');

if (sizeOptions) {
  sizeOptions = sizeOptions.getElementsByTagName('option');

  Array.prototype.forEach.call(sizeOptions, function (option) {
    if (option.disabled) {
      let optionText = option.textContent;
      option.textContent = optionText + ' - Распродано';
      return;
    }
  });
}


// TextArea Auto Hieght Setter
let messageField = document.getElementById('user-message');

if (messageField) {
  let inputHeight = document.querySelector('input').offsetHeight;
  messageField.style.height = inputHeight + 'px';

  messageField.addEventListener('input', function () {
    messageField.style.height = (messageField.scrollHeight) + 1 + 'px';
  });
}

// Error Input Style Handler
if (document.querySelector('.form__form-field')) {
  inputErrorHandler();
}

function inputErrorHandler() {
  let submitted = false;

  // On submit, run evaluation and prevent if necessary
  const form = document.querySelector('.form__form-field');
  form.onsubmit = () => {
    submitted = true;
    setTimeout(() => {
      submitted = false;
    }, 0);
  };

  // Iterate over fields in form
  let invalidOnSubmit = false;

  let field = form.querySelectorAll('input, textarea, select');
  for (let i = 1; i < field.length; i++) {

    Array.from(field, el => el.addEventListener('invalid', function () {

      if (submitted && !invalidOnSubmit) {
        invalidOnSubmit = true;
        setTimeout(() => {
          invalidOnSubmit = false;
        }, 1000);

        el.focus();
      }

      el.classList.add('form__input--error');

      // Reset invalid state & error message on `input` event, trigger validation check
      const inputHandler = () => {
        el.classList.remove('form__input--error');
        el.checkValidity();
      };
      el.oninput = inputHandler;
    }));
  }
}

// Password Reset Toggler
let passwordRestoreBody = document.getElementById('form-restore');
let loginBody = document.getElementById('form-login');
let passwordRestoreCaller = document.querySelector('.form__restore--caller');
let passwordRestoreClose = document.querySelector('.form__restore--close');

if (passwordRestoreCaller) {
  passwordRestoreCaller.addEventListener('click', function (event) {
    event.preventDefault();
    passwordRestoreBody.classList.toggle('form--open');
    passwordRestoreBody.classList.toggle('form--hide');
    loginBody.classList.toggle('form--hide');
  });

  passwordRestoreClose.addEventListener('click', function (event) {
    event.preventDefault();
    passwordRestoreBody.classList.toggle('form--open');
    passwordRestoreBody.classList.toggle('form--hide');
    loginBody.classList.toggle('form--hide');
  });
}

// Size Table Product Type Switch
let tshirtButton = document.getElementById('size-tshirt');
let hoodieButton = document.getElementById('size-hoodie');
let pantsButton = document.getElementById('size-pants');
let tshirtBody = document.getElementById('tshirt-body');
let hoodieBody = document.getElementById('hoodie-body');
let pantsBody = document.getElementById('pants-body');

if (tshirtButton) {
  tshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    hoodieButton.classList.remove('size__button--active');
    pantsButton.classList.remove('size__button--active');
    tshirtButton.classList.add('size__button--active');
    hoodieBody.classList.remove('size__item--active');
    pantsBody.classList.remove('size__item--active');
    tshirtBody.classList.add('size__item--active');
  });
}

if (hoodieButton) {
  hoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    pantsButton.classList.remove('size__button--active');
    tshirtButton.classList.remove('size__button--active');
    hoodieButton.classList.add('size__button--active');
    pantsBody.classList.remove('size__item--active');
    tshirtBody.classList.remove('size__item--active');
    hoodieBody.classList.add('size__item--active');
  });
}

if (pantsButton) {
  pantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    tshirtButton.classList.remove('size__button--active');
    hoodieButton.classList.remove('size__button--active');
    pantsButton.classList.add('size__button--active');
    tshirtBody.classList.remove('size__item--active');
    hoodieBody.classList.remove('size__item--active');
    pantsBody.classList.add('size__item--active');
  });
}

// Size Table Size Switch
let sizeSwitch = document.getElementById('size-switch');

if (sizeSwitch) {

  // Tshirt Section
  let xsTshirtButton = document.getElementById('size-tshirt-xs');
  let xsTshirtRow = document.getElementById('row-tshirt-xs');
  let sTshirtButton = document.getElementById('size-tshirt-s');
  let sTshirtRow = document.getElementById('row-tshirt-s');
  let mTshirtButton = document.getElementById('size-tshirt-m');
  let mTshirtRow = document.getElementById('row-tshirt-m');
  let lTshirtButton = document.getElementById('size-tshirt-l');
  let lTshirtRow = document.getElementById('row-tshirt-l');
  let xlTshirtButton = document.getElementById('size-tshirt-xl');
  let xlTshirtRow = document.getElementById('row-tshirt-xl');
  let xxlTshirtButton = document.getElementById('size-tshirt-xxl');
  let xxlTshirtRow = document.getElementById('row-tshirt-xxl');

  xsTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    sTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.remove('size__label--active');
    xsTshirtButton.classList.add('size__label--active');

    sTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.remove('size__table-row--active');
    xsTshirtRow.classList.add('size__table-row--active');
  });

  sTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    xsTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.remove('size__label--active');
    sTshirtButton.classList.add('size__label--active');

    xsTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.remove('size__table-row--active');
    sTshirtRow.classList.add('size__table-row--active');
  });

  mTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    xsTshirtButton.classList.remove('size__label--active');
    sTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.add('size__label--active');

    xsTshirtRow.classList.remove('size__table-row--active');
    sTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.add('size__table-row--active');
  });

  lTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    xsTshirtButton.classList.remove('size__label--active');
    sTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.add('size__label--active');

    xsTshirtRow.classList.remove('size__table-row--active');
    sTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.add('size__table-row--active');
  });

  xlTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    xsTshirtButton.classList.remove('size__label--active');
    sTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.add('size__label--active');

    xsTshirtRow.classList.remove('size__table-row--active');
    sTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.add('size__table-row--active');
  });

  xxlTshirtButton.addEventListener('click', function (event) {
    event.preventDefault();
    xsTshirtButton.classList.remove('size__label--active');
    sTshirtButton.classList.remove('size__label--active');
    mTshirtButton.classList.remove('size__label--active');
    lTshirtButton.classList.remove('size__label--active');
    xlTshirtButton.classList.remove('size__label--active');
    xxlTshirtButton.classList.add('size__label--active');

    xsTshirtRow.classList.remove('size__table-row--active');
    sTshirtRow.classList.remove('size__table-row--active');
    mTshirtRow.classList.remove('size__table-row--active');
    lTshirtRow.classList.remove('size__table-row--active');
    xlTshirtRow.classList.remove('size__table-row--active');
    xxlTshirtRow.classList.add('size__table-row--active');
  });

  // Hoodie Section
  let xshoodieButton = document.getElementById('size-hoodie-xs');
  let xshoodieRow = document.getElementById('row-hoodie-xs');
  let shoodieButton = document.getElementById('size-hoodie-s');
  let shoodieRow = document.getElementById('row-hoodie-s');
  let mhoodieButton = document.getElementById('size-hoodie-m');
  let mhoodieRow = document.getElementById('row-hoodie-m');
  let lhoodieButton = document.getElementById('size-hoodie-l');
  let lhoodieRow = document.getElementById('row-hoodie-l');
  let xlhoodieButton = document.getElementById('size-hoodie-xl');
  let xlhoodieRow = document.getElementById('row-hoodie-xl');
  let xxlhoodieButton = document.getElementById('size-hoodie-xxl');
  let xxlhoodieRow = document.getElementById('row-hoodie-xxl');

  xshoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    shoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.remove('size__label--active');
    xshoodieButton.classList.add('size__label--active');

    shoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.remove('size__table-row--active');
    xshoodieRow.classList.add('size__table-row--active');
  });

  shoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    xshoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.remove('size__label--active');
    shoodieButton.classList.add('size__label--active');

    xshoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.remove('size__table-row--active');
    shoodieRow.classList.add('size__table-row--active');
  });

  mhoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    xshoodieButton.classList.remove('size__label--active');
    shoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.add('size__label--active');

    xshoodieRow.classList.remove('size__table-row--active');
    shoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.add('size__table-row--active');
  });

  lhoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    xshoodieButton.classList.remove('size__label--active');
    shoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.add('size__label--active');

    xshoodieRow.classList.remove('size__table-row--active');
    shoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.add('size__table-row--active');
  });

  xlhoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    xshoodieButton.classList.remove('size__label--active');
    shoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.add('size__label--active');

    xshoodieRow.classList.remove('size__table-row--active');
    shoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.add('size__table-row--active');
  });

  xxlhoodieButton.addEventListener('click', function (event) {
    event.preventDefault();
    xshoodieButton.classList.remove('size__label--active');
    shoodieButton.classList.remove('size__label--active');
    mhoodieButton.classList.remove('size__label--active');
    lhoodieButton.classList.remove('size__label--active');
    xlhoodieButton.classList.remove('size__label--active');
    xxlhoodieButton.classList.add('size__label--active');

    xshoodieRow.classList.remove('size__table-row--active');
    shoodieRow.classList.remove('size__table-row--active');
    mhoodieRow.classList.remove('size__table-row--active');
    lhoodieRow.classList.remove('size__table-row--active');
    xlhoodieRow.classList.remove('size__table-row--active');
    xxlhoodieRow.classList.add('size__table-row--active');
  });

  // Pants Section
  let xspantsButton = document.getElementById('size-pants-xs');
  let xspantsRow = document.getElementById('row-pants-xs');
  let spantsButton = document.getElementById('size-pants-s');
  let spantsRow = document.getElementById('row-pants-s');
  let mpantsButton = document.getElementById('size-pants-m');
  let mpantsRow = document.getElementById('row-pants-m');
  let lpantsButton = document.getElementById('size-pants-l');
  let lpantsRow = document.getElementById('row-pants-l');
  let xlpantsButton = document.getElementById('size-pants-xl');
  let xlpantsRow = document.getElementById('row-pants-xl');
  let xxlpantsButton = document.getElementById('size-pants-xxl');
  let xxlpantsRow = document.getElementById('row-pants-xxl');

  xspantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    spantsButton.classList.remove('size__label--active');
    mpantsButton.classList.remove('size__label--active');
    lpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.remove('size__label--active');
    xspantsButton.classList.add('size__label--active');

    spantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.remove('size__table-row--active');
    xspantsRow.classList.add('size__table-row--active');
  });

  spantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    xspantsButton.classList.remove('size__label--active');
    mpantsButton.classList.remove('size__label--active');
    lpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.remove('size__label--active');
    spantsButton.classList.add('size__label--active');

    xspantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.remove('size__table-row--active');
    spantsRow.classList.add('size__table-row--active');
  });

  mpantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    xspantsButton.classList.remove('size__label--active');
    spantsButton.classList.remove('size__label--active');
    lpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.remove('size__label--active');
    mpantsButton.classList.add('size__label--active');

    xspantsRow.classList.remove('size__table-row--active');
    spantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.add('size__table-row--active');
  });

  lpantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    xspantsButton.classList.remove('size__label--active');
    spantsButton.classList.remove('size__label--active');
    mpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.remove('size__label--active');
    lpantsButton.classList.add('size__label--active');

    xspantsRow.classList.remove('size__table-row--active');
    spantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.add('size__table-row--active');
  });

  xlpantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    xspantsButton.classList.remove('size__label--active');
    spantsButton.classList.remove('size__label--active');
    mpantsButton.classList.remove('size__label--active');
    lpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.add('size__label--active');

    xspantsRow.classList.remove('size__table-row--active');
    spantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.add('size__table-row--active');
  });

  xxlpantsButton.addEventListener('click', function (event) {
    event.preventDefault();
    xspantsButton.classList.remove('size__label--active');
    spantsButton.classList.remove('size__label--active');
    mpantsButton.classList.remove('size__label--active');
    lpantsButton.classList.remove('size__label--active');
    xlpantsButton.classList.remove('size__label--active');
    xxlpantsButton.classList.add('size__label--active');

    xspantsRow.classList.remove('size__table-row--active');
    spantsRow.classList.remove('size__table-row--active');
    mpantsRow.classList.remove('size__table-row--active');
    lpantsRow.classList.remove('size__table-row--active');
    xlpantsRow.classList.remove('size__table-row--active');
    xxlpantsRow.classList.add('size__table-row--active');
  });
}

// Remove Hover Event After Click
let controlButtons = document.querySelectorAll('.bg-controls__button');

Array.prototype.forEach.call(controlButtons, function (button) {
  button.addEventListener('mouseout', function () {
    button.blur();
  });
  return;
});

// Product Images Slider
/* eslint-disable */
let swiper = Swiper;
let init = false;

// Which media query
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1365px)');
  let aboveMobile = window.matchMedia('(min-width: 1366px)');

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        grabCursor: true,
        pagination: {
          el: '.product__gallery-controls',
          clickable: true,
          bulletClass: 'product__gallery-controls-dot',
          bulletActiveClass: 'product__gallery-controls-dot--current',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        a11y: {
          prevSlideMessage: 'Предыдущее фото',
          nextSlideMessage: 'Следующие фото',
          paginationBulletMessage: 'Перейти к фото номер {{index}}'
        },
      });
    }
  }

  // Disable (for tablet)
  else if (aboveMobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        allowTouchMove: false,
        a11y: {
          prevSlideMessage: 'Предыдущее фото',
          nextSlideMessage: 'Следующие фото',
          paginationBulletMessage: 'Перейти к фото номер {{index}}'
        },
      });
    }
  }
}

// On Load
window.addEventListener('load', function () {
  swiperMode();
});

// On Resize
window.addEventListener('resize', function () {
  swiperMode();
});

// Index Page Images Background Showcase
let isIndex = document.querySelector('.page--front');

function swiperIndex() {
  let desktopOnly = window.matchMedia('(min-width: 1366px)');
  let initIndex = false;

  if (desktopOnly.matches) {
    if (!initIndex) {
      initIndex = true;
      swiper = new Swiper('.swiper-container', {
        loop: true,
        direction: 'vertical',
        slidesPerView: 1,
        speed: 700,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.bg-controls__button--next',
          prevEl: '.bg-controls__button--prev',
        },
      });
    }
  }
}


// On Load
window.addEventListener('load', function () {
  if (isIndex) {
    swiperIndex();
  }
});

// On Resize
window.addEventListener('resize', function () {
  if (isIndex) {
    swiperIndex();
  }
});


/* eslint-enable */
