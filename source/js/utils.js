'use strict';

(function () {
  window.CONSTANTS = {
    KEY_CODE: {
      ENTER: 13,
      ESC: 27
    },
    BREAKPOINT: {
      MOBILE: 320,
      TABLET: 768,
      DESKTOP: 1366
    }
  };
  window.utils = {
    isEscPressed: function (evt) {
      return (evt.keyCode === window.CONSTANTS.KEY_CODE.ESC);
    },
    isEnterPressed: function (evt) {
      return (evt.keyCode === window.CONSTANTS.KEY_CODE.ENTER);
    },
    looseFocusOnElement: function (evt) {
      evt.target.blur();
    },
    hideBodyScroll: function () {
      if (!document.body.classList.contains('page--no-overflow')) {
        document.body.classList.add('page--no-overflow');
      }
    },
    showBodyScroll: function () {
      if (document.body.classList.contains('page--no-overflow')) {
        document.body.classList.remove('page--no-overflow');
      }
    }
  };
})();
