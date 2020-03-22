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

if (searchToggler) {
  searchToggler.addEventListener('click', function (event) {
    event.preventDefault();
    searchBody.classList.toggle('search--open');
    document.body.classList.toggle('page--no-overflow');

    window.setTimeout(function () {
      searchField.focus();
    }, 100);
  });

  searchClose.addEventListener('click', function (event) {
    event.preventDefault();
    searchBody.classList.toggle('search--open');
    document.body.classList.toggle('page--no-overflow');
  });
}

// Cart
let cartToggler = document.querySelector('.user-nav__button--cart');
let cartBody = document.getElementById('cart-pop');
let cartClose = document.querySelector('.cart__close');
let cartOverlay = document.querySelector('.cart__overlay');

if (cartToggler) {
  cartToggler.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    document.body.classList.toggle('page--no-overflow');
  });

  cartClose.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    document.body.classList.toggle('page--no-overflow');
  });

  cartOverlay.addEventListener('click', function (event) {
    event.preventDefault();
    cartBody.classList.toggle('cart--open');
    cartOverlay.classList.toggle('cart__overlay--visible');
    document.body.classList.toggle('page--no-overflow');
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
    document.body.classList.toggle('page--no-overflow');
  });

  menuOverlay.addEventListener('click', function (event) {
    event.preventDefault();
    menuButton.classList.toggle('menu-toggler--opened');
    menuBody.classList.toggle('site-nav--open');
    menuOverlay.classList.toggle('site-nav__overlay--visible');
    document.body.classList.toggle('page--no-overflow');
  });

  if (menuClose) {
    menuClose.addEventListener('click', function (event) {
      event.preventDefault();
      menuButton.classList.toggle('menu-toggler--opened');
      menuBody.classList.toggle('site-nav--open');
      menuOverlay.classList.toggle('site-nav__overlay--visible');
      document.body.classList.toggle('page--no-overflow');
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
let selectSize = document.querySelector('.product__size');

if (selectSize) {
  selectSize.addEventListener('change', function () {
    selectSize.blur();
  });
}

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

/* eslint-enable */
