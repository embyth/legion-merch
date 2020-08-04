'use strict';

(function () {
  // Creating attributes for buttons
  function setGlitchAttrForButton() {
    let glitchButtons = document.querySelectorAll('.button--glitch');

    glitchButtons.forEach(function (button) {
      let content = button.textContent.toUpperCase();
      button.setAttribute('data-text', content);
    });
  }

  window.button = {
    glitch: setGlitchAttrForButton
  };
})();
