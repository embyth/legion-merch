'use strict';

(function () {
  // Cart
  function cartOpenClickHandler(evt) {
    evt.preventDefault();

    const cartBody = document.getElementById('cart-pop');
    const cartOverlay = document.querySelector('.cart__overlay');

    cartBody.classList.add('cart--open');
    cartOverlay.classList.add('cart__overlay--visible');
    window.utils.hideBodyScroll();
  }

  function cartCloseClickHandler(evt) {
    evt.preventDefault();
    var target = evt.target;
    const cartBody = document.getElementById('cart-pop');
    const cartOverlay = document.querySelector('.cart__overlay');
    const cartClose = cartBody.querySelector('.cart__close');

    if (target === cartClose || target === cartOverlay) {
      cartBody.classList.remove('cart--open');
      cartOverlay.classList.remove('cart__overlay--visible');
      window.utils.showBodyScroll();
    }
  }

  function activate() {
    const cartToggler = document.querySelector('.user-nav__button--cart');
    const cartBody = document.getElementById('cart-pop');
    const cartClose = cartBody.querySelector('.cart__close');
    const cartOverlay = document.querySelector('.cart__overlay');

    cartToggler.addEventListener('click', cartOpenClickHandler);
    cartClose.addEventListener('click', cartCloseClickHandler);
    cartOverlay.addEventListener('click', cartCloseClickHandler);
    window.resize.activate(cartBody);
  }

  function disable() {
    const cartToggler = document.querySelector('.user-nav__button--cart');
    const cartBody = document.getElementById('cart-pop');
    const cartClose = cartBody.querySelector('.cart__close');
    const cartOverlay = document.querySelector('.cart__overlay');

    cartToggler.removeEventListener('click', cartOpenClickHandler);
    cartClose.removeEventListener('click', cartCloseClickHandler);
    cartOverlay.removeEventListener('click', cartCloseClickHandler);
    window.resize.disable(cartBody);
  }

  window.cart = {
    activate: activate,
    disable: disable
  };
})();
