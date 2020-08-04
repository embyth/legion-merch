'use strict';

(function () {
  // Search
  function searchOpenClickHandler(evt) {
    evt.preventDefault();

    const searchBody = document.getElementById('search-pop');
    const searchField = document.getElementById('search-field');
    const searchClose = document.querySelector('.search__close');

    searchBody.classList.add('search--open');

    window.utils.hideBodyScroll();

    setTimeout(() => searchField.focus(), 100);

    searchClose.addEventListener('click', searchCloseClickHandler);
    document.addEventListener('keydown', searchCloseKeyDownHandler);
  }

  function searchCloseClickHandler(evt) {
    evt.preventDefault();

    const searchBody = document.getElementById('search-pop');
    const searchClose = document.querySelector('.search__close');

    window.utils.showBodyScroll();

    searchBody.classList.remove('search--open');

    searchClose.removeEventListener('click', searchCloseClickHandler);
    document.removeEventListener('keydown', searchCloseKeyDownHandler);
  }

  function searchCloseKeyDownHandler(evt) {
    if (window.utils.isEscPressed(evt)) {
      searchCloseClickHandler(evt);
    }
  }

  function activate() {
    const searchToggler = document.querySelector('.user-nav__button--search');
    searchToggler.addEventListener('click', searchOpenClickHandler);
  }

  function disable() {
    const searchToggler = document.querySelector('.user-nav__button--search');
    searchToggler.removeEventListener('click', searchOpenClickHandler);
  }

  window.search = {
    activate: activate,
    disable: disable
  };
})();
