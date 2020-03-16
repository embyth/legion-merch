'use strict';

// SVG Sprite
svg4everybody(); // eslint-disable-line

// JavaScript Page Toggler
const pageBody = document.querySelector('.page');
if (pageBody.classList.contains('page--no-js')) {
  pageBody.classList.remove('page--no-js');
}

// Creating attributes for buttons
let glitchButtons = document.querySelectorAll('.button--glitch');

for (let i = 0; i < glitchButtons.length; i++) {
  let content = glitchButtons[i].textContent.toUpperCase();
  let attr = document.createAttribute('data-text');
  attr.value = content;
  glitchButtons[i].setAttributeNode(attr);
}
