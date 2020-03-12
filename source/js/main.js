'use strict';

// SVG Sprite
svg4everybody(); // eslint-disable-line

// JavaScript Page Toggler
const pageBody = document.querySelector('.page');
if (pageBody.classList.contains('page--no-js')) {
  pageBody.classList.remove('page--no-js');
}

// Menu Toggler
const toggleButton = document.querySelector('.menu-toggler');
const siteNavigation = document.querySelector('.site-nav');

if (toggleButton) {
  toggleButton.addEventListener('click', function (event) {
    event.preventDefault();
    siteNavigation.classList.toggle('site-nav--closed');
    this.classList.toggle('menu-toggler--opened');
  });
}
