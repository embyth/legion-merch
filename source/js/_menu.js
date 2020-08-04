'use strict';

(function () {
  // Menu
  // Front Page Menu Handlers
  function frontPageMenuOpenClickHandler(evt) {
    evt.preventDefault();
    const menuButton = document.querySelector('.menu-toggler');
    const menuBody = document.querySelector('.site-nav');
    const menuOverlay = document.querySelector('.site-nav__overlay');
    const menuClose = document.querySelector('.site-nav__close-button');

    menuBody.classList.add('site-nav--open');
    menuOverlay.classList.add('site-nav__overlay--visible');
    menuButton.classList.add('menu-toggler--opened');

    window.utils.hideBodyScroll();

    menuClose.addEventListener('click', frontPageMenuCloseClickHandler);
    menuOverlay.addEventListener('click', frontPageMenuCloseClickHandler);
    document.addEventListener('keydown', frontPageMenuCloseKeyDownHandler);
  }

  function frontPageMenuCloseClickHandler(evt) {
    evt.preventDefault();
    const menuButton = document.querySelector('.menu-toggler');
    const menuBody = document.querySelector('.site-nav');
    const menuOverlay = document.querySelector('.site-nav__overlay');
    const menuClose = document.querySelector('.site-nav__close-button');

    menuButton.classList.remove('menu-toggler--opened');
    menuBody.classList.remove('site-nav--open');
    menuOverlay.classList.remove('site-nav__overlay--visible');

    window.utils.showBodyScroll();

    menuClose.removeEventListener('click', frontPageMenuCloseClickHandler);
    menuOverlay.removeEventListener('click', frontPageMenuCloseClickHandler);
    document.removeEventListener('keydown', frontPageMenuCloseKeyDownHandler);
  }

  function frontPageMenuCloseKeyDownHandler(evt) {
    if (window.utils.isEscPressed(evt)) {
      frontPageMenuCloseClickHandler(evt);
    }
  }

  // Inner page Menu Handlers
  function innerPageMenuClickHandler(evt) {
    evt.preventDefault();
    const menuButton = document.querySelector('.menu-toggler');
    const menuBody = document.querySelector('.site-nav');
    const menuOverlay = document.querySelector('.site-nav__overlay');

    menuBody.classList.toggle('site-nav--open');
    menuOverlay.classList.toggle('site-nav__overlay--visible');
    menuButton.classList.toggle('menu-toggler--opened');

    if (document.body.classList.contains('page--no-overflow')) {
      document.body.classList.remove('page--no-overflow');
    } else {
      document.body.classList.add('page--no-overflow');
    }

    if (menuBody.classList.contains('site-nav--open')) {
      document.addEventListener('keydown', innerPageMenuCloseKeyDownHandler);
    } else {
      document.removeEventListener('keydown', innerPageMenuCloseKeyDownHandler);
    }
  }

  function innerPageMenuCloseKeyDownHandler(evt) {
    if (window.utils.isEscPressed(evt)) {
      innerPageMenuClickHandler(evt);
    }
  }

  function activateFrontPageMenu() {
    const menuButton = document.querySelector('.menu-toggler');
    menuButton.addEventListener('click', frontPageMenuOpenClickHandler);
  }

  function disableFrontPageMenu() {
    const menuButton = document.querySelector('.menu-toggler');
    menuButton.removeEventListener('click', frontPageMenuOpenClickHandler);
  }

  function activateInnerPageMenu() {
    const menuButton = document.querySelector('.menu-toggler');
    const menuBody = document.querySelector('.site-nav');
    const menuOverlay = document.querySelector('.site-nav__overlay');
    menuButton.addEventListener('click', innerPageMenuClickHandler);
    menuOverlay.addEventListener('click', innerPageMenuClickHandler);
    window.resize.activate(menuBody);
  }

  function disableInnerPageMenu() {
    const menuButton = document.querySelector('.menu-toggler');
    const menuBody = document.querySelector('.site-nav');
    const menuOverlay = document.querySelector('.site-nav__overlay');
    menuButton.removeEventListener('click', innerPageMenuClickHandler);
    menuOverlay.removeEventListener('click', innerPageMenuClickHandler);
    window.resize.disable(menuBody);
  }

  window.menu = {
    activateFrontPageMenu: activateFrontPageMenu,
    disableFrontPageMenu: disableFrontPageMenu,
    activateInnerPageMenu: activateInnerPageMenu,
    disableInnerPageMenu: disableInnerPageMenu
  };
})();
