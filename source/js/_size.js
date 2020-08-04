'use strict';

(function () {
  // Products Size Table
  function productTypeButtonClickHandler(evt) {
    evt.preventDefault();
    let target = evt.target;
    let arr = target.id.split('-');

    document.querySelectorAll('.size__button').forEach(function (button) {
      button.classList.remove('size__button--active');
    });
    target.classList.add('size__button--active');

    document.querySelectorAll('.size__item').forEach(function (item) {
      item.classList.remove('size__item--active');
    });
    document.getElementById(arr[1] + '-body').classList.add('size__item--active');
  }

  function sizeLabelClickHandler(evt) {
    evt.preventDefault();
    let target = evt.target;
    let arr = target.id.split('-');

    document.querySelectorAll('#' + arr[1] + '-body .size__label').forEach(function (button) {
      button.classList.remove('size__label--active');
    });
    target.classList.add('size__label--active');

    document.querySelectorAll('#' + arr[1] + '-body .size__table-row').forEach(function (row) {
      row.classList.remove('size__table-row--active');
    });
    document.querySelector('#row-' + arr[1] + '-' + arr[2]).classList.add('size__table-row--active');
  }

  function activate() {
    const sizeButtons = document.querySelectorAll('.size__button');
    const sizeLabels = document.querySelectorAll('.size__label');

    sizeButtons.forEach(function (button) {
      button.addEventListener('click', productTypeButtonClickHandler);
    });
    sizeLabels.forEach(function (label) {
      label.addEventListener('click', sizeLabelClickHandler);
    });
  }

  function disable() {
    const sizeButtons = document.querySelectorAll('.size__button');
    const sizeLabels = document.querySelectorAll('.size__label');

    sizeButtons.forEach(function (button) {
      button.removeEventListener('click', productTypeButtonClickHandler);
    });
    sizeLabels.forEach(function (label) {
      label.removeEventListener('click', sizeLabelClickHandler);
    });
  }

  window.size = {
    activate: activate,
    disable: disable
  };
})();
