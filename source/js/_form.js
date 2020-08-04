'use strict';

(function () {
  // Textarea Height Setter
  function userMessageInputHandler() {
    const messageField = document.getElementById('user-message');

    messageField.style.height = 'auto';
    messageField.style.height = (messageField.scrollHeight) + 1 + 'px';
  }

  // Select Label Behavior
  function selectChangeHandle() {
    const selectField = document.querySelector('.form__select');
    const selectLabel = document.querySelector('.form__label--select');
    const selectOptions = selectField.getElementsByTagName('option');

    for (var i = 1; i < selectOptions.length; i++) {
      if (selectOptions[i].selected) {
        selectLabel.style.cssText = `
        top: 0;
        transform: none;
        cursor: default;
      `;
      }
    }
  }

  function activate() {
    const messageField = document.getElementById('user-message');
    const selectField = document.querySelector('.form__select');

    messageField.addEventListener('input', userMessageInputHandler);
    selectField.addEventListener('change', selectChangeHandle);
  }

  function disable() {
    const messageField = document.getElementById('user-message');
    const selectField = document.querySelector('.form__select');

    messageField.removeEventListener('input', userMessageInputHandler);
    selectField.removeEventListener('change', selectChangeHandle);
  }

  window.form = {
    activate: activate,
    disable: disable
  };
})();
