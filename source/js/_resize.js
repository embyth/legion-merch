'use strict';

(function () {
  function cartResizeHandler() {
    if (document.querySelector('.page--inner')) {
      const cartBody = document.getElementById('cart-pop');
      const cartOverlay = document.querySelector('.cart__overlay');
      let viewportHeight = window.innerHeight;
      // let cartHeight = viewportHeight;
      let siteHeaderHeight = document.querySelector('#site-header').offsetHeight;
      let cartHeight = viewportHeight - siteHeaderHeight;
      cartOverlay.style.height = cartHeight + 'px';
      cartBody.style.height = cartHeight + 'px';
    }
  }

  function menuResizeHandler() {
    if (document.querySelector('.page--inner')) {
      const menuBody = document.querySelector('.site-nav');
      const menuOverlay = document.querySelector('.site-nav__overlay');
      let viewportHeight = window.innerHeight;
      let siteHeaderHeight = document.querySelector('#site-header').offsetHeight;
      let siteFooterHeight = document.querySelector('#site-footer').offsetHeight;
      let menuHeight;

      if (window.innerWidth >= window.CONSTANTS.BREAKPOINT.DESKTOP) {
        menuHeight = viewportHeight - siteHeaderHeight - siteFooterHeight;
        menuBody.style.height = menuHeight + 'px';
      } else if (window.innerWidth >= window.CONSTANTS.BREAKPOINT.TABLET) {
        menuHeight = viewportHeight - siteHeaderHeight;
        menuOverlay.style.height = menuHeight + 'px';
        menuBody.style.height = menuHeight + 'px';
      } else if (window.innerWidth >= window.CONSTANTS.BREAKPOINT.MOBILE) {
        menuHeight = viewportHeight - siteHeaderHeight;
        menuBody.style.height = menuHeight + 'px';
      }
    }
  }

  function productInfoResizeHandler() {
    if (window.innerWidth >= window.CONSTANTS.BREAKPOINT.DESKTOP) {
      const productInfo = document.querySelector('.product__info');
      let viewportHeight = window.innerHeight;
      let siteHeaderHeight = document.querySelector('#site-header').offsetHeight;
      productInfo.style.height = viewportHeight - siteHeaderHeight + 'px';
    }
  }

  function activate(element) {
    const cartBody = document.getElementById('cart-pop');
    const menuBody = document.querySelector('.site-nav');
    const productInfo = document.querySelector('.product__info');

    switch (element) {
      case cartBody:
        cartResizeHandler();
        window.addEventListener('resize', cartResizeHandler);
        break;
      case menuBody:
        menuResizeHandler();
        window.addEventListener('resize', menuResizeHandler);
        break;
      case productInfo:
        productInfoResizeHandler();
        window.addEventListener('resize', productInfoResizeHandler);
        break;
    }
  }

  function disable(element) {
    const cartBody = document.getElementById('cart-pop');
    const menuBody = document.querySelector('.site-nav');
    const productInfo = document.querySelector('.product__info');

    switch (element) {
      case cartBody:
        window.removeEventListener('resize', cartResizeHandler);
        break;
      case menuBody:
        window.removeEventListener('resize', menuResizeHandler);
        break;
      case productInfo:
        window.removeEventListener('resize', productInfoResizeHandler);
        break;
    }
  }

  window.resize = {
    activate: activate,
    disable: disable
  };
})();
