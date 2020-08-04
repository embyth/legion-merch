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

    const cartClose = cartBody.querySelector('.cart__close');
    cartClose.addEventListener('click', cartCloseClickHandler);
    cartOverlay.addEventListener('click', cartCloseClickHandler);
    document.addEventListener('keydown', cartCloseKeyKodeHandler);
  }

  function cartCloseClickHandler(evt) {
    evt.preventDefault();
    const cartBody = document.getElementById('cart-pop');
    const cartOverlay = document.querySelector('.cart__overlay');
    const cartClose = cartBody.querySelector('.cart__close');

    cartBody.classList.remove('cart--open');
    cartOverlay.classList.remove('cart__overlay--visible');
    window.utils.showBodyScroll();

    cartClose.removeEventListener('click', cartCloseClickHandler);
    cartOverlay.removeEventListener('click', cartCloseClickHandler);
    document.removeEventListener('keydown', cartCloseKeyKodeHandler);
  }

  function cartCloseKeyKodeHandler(evt) {
    if (window.utils.isEscPressed(evt)) {
      cartCloseClickHandler(evt);
    }
  }

  function activate() {
    const cartToggler = document.querySelector('.user-nav__button--cart');
    const cartBody = document.getElementById('cart-pop');

    cartToggler.addEventListener('click', cartOpenClickHandler);

    window.resize.activate(cartBody);
  }

  function disable() {
    const cartToggler = document.querySelector('.user-nav__button--cart');
    const cartBody = document.getElementById('cart-pop');

    cartToggler.removeEventListener('click', cartOpenClickHandler);
    window.resize.disable(cartBody);
  }

  window.cart = {
    activate: activate,
    disable: disable
  };
})();
