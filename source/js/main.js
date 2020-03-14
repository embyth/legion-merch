'use strict';

// SVG Sprite
svg4everybody(); // eslint-disable-line

// JavaScript Page Toggler
const pageBody = document.querySelector('.page');
if (pageBody.classList.contains('page--no-js')) {
  pageBody.classList.remove('page--no-js');
}

// Menu Toggler
let menuButtons = document.querySelectorAll('.menu-toggler');
let menuClose = document.querySelector('.site-nav__close-button');
let menuOverlay = document.querySelector('.site-nav__overlay');

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    menuButtons[i].classList.toggle('menu-toggler--opened');
  });

  menuClose.addEventListener('click', function (event) {
    event.preventDefault();
    menuButtons[i].classList.toggle('menu-toggler--opened');
  });

  menuOverlay.addEventListener('click', function (event) {
    event.preventDefault();
    menuButtons[i].classList.toggle('menu-toggler--opened');
  });
}


// Creating attributes for buttons
let glitchButtons = document.querySelectorAll('.button--glitch');

for (let i = 0; i < glitchButtons.length; i++) {
  let content = glitchButtons[i].textContent.toUpperCase();
  let attr = document.createAttribute('data-text');
  attr.value = content;
  glitchButtons[i].setAttributeNode(attr);
}
