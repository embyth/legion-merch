'use strict';

(function () {
  // SVG Sprite
  svg4everybody(); // eslint-disable-line

  // JavaScript Page Toggler
  if (document.querySelector('.page').classList.contains('page--no-js')) {
    document.querySelector('.page').classList.remove('page--no-js');
  }

  const isGlitchButtons = document.querySelector('.button--glitch');
  if (isGlitchButtons) window.button.glitch();

  const cartNode = document.querySelector('#cart-pop');
  if (cartNode) window.cart.activate();

  const isSizeTablePage = document.querySelector('.size');
  if (isSizeTablePage) window.size.activate();

  const isLoginPage = document.getElementById('form-login');
  if (isLoginPage) window.login.activate();

  const isProductPage = document.querySelector('.product');
  if (isProductPage) window.product.activate();

  const isSearchNode = document.getElementById('search-pop');
  if (isSearchNode) window.search.activate();

  const isContactPage = document.querySelector('#form-contact');
  if (isContactPage) {
    window.form.activate();
    window.validation.activate();
  }

  const isFrontPage = document.querySelector('.page--front');
  if (isFrontPage) {
    window.menu.activateFrontPageMenu();
  }

  const isInnerPage = document.querySelector('.page--inner');
  if (isInnerPage) {
    window.menu.activateInnerPageMenu();
    window.preload.activate();
  }
})();
