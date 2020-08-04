'use strict';

(function () {
  function nameInputHandler(evt) {
    evt.target.classList.remove('form__input--error');
    if (evt.target.validity.valueMissing) {
      evt.target.classList.add('form__input--error');
      evt.target.setCustomValidity('У вас должно быть имя!');
    } else {
      evt.target.classList.remove('form__input--error');
      evt.target.setCustomValidity('');
    }
  }

  function emailInputHandler(evt) {
    evt.target.classList.remove('form__input--error');
    if (evt.target.validity.typeMismatch) {
      evt.target.classList.add('form__input--error');
      evt.target.setCustomValidity('Боец, я ожидаю здесь увидить электронную почту!');
    } else if (evt.target.validity.valueMissing) {
      evt.target.classList.add('form__input--error');
      evt.target.setCustomValidity('Электронная почта обязательна!');
    } else {
      evt.target.classList.remove('form__input--error');
      evt.target.setCustomValidity('');
    }
  }

  function reasonChangeHandler(evt) {
    evt.target.style.borderColor = '';

    let items = evt.target.querySelectorAll('option');
    if (items[0].selected === true) {
      evt.target.style.borderColor = 'red';
      evt.target.setCustomValidity('Выберите причину обращения к нам!');
    } else {
      evt.target.style.borderColor = '';
      evt.target.setCustomValidity('');
    }
  }

  function messageInputHandler(evt) {
    evt.target.classList.remove('form__input--error');

    if (evt.target.validity.valueMissing) {
      evt.target.classList.add('form__input--error');
      evt.target.setCustomValidity('Опишите вашу проблему!');
    } else {
      evt.target.classList.remove('form__input--error');
      evt.target.setCustomValidity('');
    }
  }

  function activate() {
    const nameInput = document.querySelector('#user-name');
    nameInput.addEventListener('input', nameInputHandler);
    nameInput.addEventListener('invalid', nameInputHandler);

    const emailInput = document.querySelector('#user-email');
    emailInput.addEventListener('input', emailInputHandler);
    emailInput.addEventListener('invalid', emailInputHandler);

    const reasonInput = document.querySelector('#contact-reason');
    reasonInput.addEventListener('change', reasonChangeHandler);
    reasonInput.addEventListener('invalid', reasonChangeHandler);

    const messageInput = document.querySelector('#user-message');
    messageInput.addEventListener('input', messageInputHandler);
    messageInput.addEventListener('invalid', messageInputHandler);
  }

  function disable() {
    const nameInput = document.querySelector('#user-name');
    nameInput.removeEventListener('input', nameInputHandler);
    nameInput.removeEventListener('invalid', nameInputHandler);

    const emailInput = document.querySelector('#user-email');
    emailInput.removeEventListener('input', emailInputHandler);
    emailInput.removeEventListener('invalid', emailInputHandler);

    const reasonInput = document.querySelector('#contact-reason');
    reasonInput.removeEventListener('change', reasonChangeHandler);
    reasonInput.removeEventListener('invalid', reasonChangeHandler);

    const messageInput = document.querySelector('#user-message');
    messageInput.removeEventListener('input', messageInputHandler);
    messageInput.removeEventListener('invalid', messageInputHandler);
  }

  window.validation = {
    activate: activate,
    disable: disable
  };
})();
