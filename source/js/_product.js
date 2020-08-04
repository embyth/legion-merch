'use strict';

(function () {
  // Select Disable Text Adder
  function checkForSoldSize() {
    const selectSize = document.querySelector('.product__size');
    selectSize.querySelectorAll('option').forEach(function (option) {
      if (option.disabled) {
        option.textContent += ' - Распродано';
      }
    });
  }

  function activate() {
    checkForSoldSize();
    const productInfo = document.querySelector('.product__info');
    window.resize.activate(productInfo);
    const selectSize = document.querySelector('.product__size');
    selectSize.addEventListener('change', window.utils.looseFocusOnElement);
  }

  function disable() {
    const productInfo = document.querySelector('.product__info');
    window.resize.disable(productInfo);
    const selectSize = document.querySelector('.product__size');
    selectSize.removeEventListener('change', window.utils.looseFocusOnElement);
  }

  window.product = {
    activate: activate,
    disable: disable
  };
})();
