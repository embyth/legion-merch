'use strict';

(function () {
  // Preventing animation on page load by class
  function activate() {
    setTimeout(function () {
      if (document.body.classList.contains('preload')) {
        document.body.classList.remove('preload');
      }
    }, 500);
  }

  window.preload = {
    activate: activate
  };
})();
