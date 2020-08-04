'use strict';

(function () {
  // Login logic
  function openPasswordRestoreClickHandler(evt) {
    evt.preventDefault();
    const passwordRestoreBody = document.getElementById('form-restore');
    const loginBody = document.getElementById('form-login');

    passwordRestoreBody.classList.add('form--open');
    passwordRestoreBody.classList.remove('form--hide');
    loginBody.classList.add('form--hide');
  }

  function closePasswordRestoreClickHandler(evt) {
    evt.preventDefault();
    const passwordRestoreBody = document.getElementById('form-restore');
    const loginBody = document.getElementById('form-login');

    passwordRestoreBody.classList.remove('form--open');
    passwordRestoreBody.classList.add('form--hide');
    loginBody.classList.remove('form--hide');
  }

  function activate() {
    const passwordRestoreCaller = document.querySelector('.form__restore--caller');
    const passwordRestoreClose = document.querySelector('.form__restore--close');
    passwordRestoreCaller.addEventListener('click', openPasswordRestoreClickHandler);
    passwordRestoreClose.addEventListener('click', closePasswordRestoreClickHandler);
  }

  function disable() {
    const passwordRestoreCaller = document.querySelector('.form__restore--caller');
    const passwordRestoreClose = document.querySelector('.form__restore--close');
    passwordRestoreCaller.removeEventListener('click', openPasswordRestoreClickHandler);
    passwordRestoreClose.removeEventListener('click', closePasswordRestoreClickHandler);
  }

  window.login = {
    activate: activate,
    disable: disable
  };
})();
