"use strict";

const preloaderElement = document.querySelector(`.preloader`);
const glitchLogo = preloaderElement.querySelector(`.loader`);
const loadingText = preloaderElement.querySelector(`.loading`);

const animationTime = 2100;
let isAnimationDone = false;

const timerStart = Date.now();
const loaderAnimationTimeout = setTimeout(() => {
  showLoadingText();
  isAnimationDone = true;
}, animationTime);

const showLoadingText = () => {
  loadingText.style.cssText = `
    transition: all 1.5s ease;
    visibility: visible;
    opacity: 1;
  `;
};

const hidePreloader = () => {
  glitchLogo.style.cssText = `
    transition: all 1.5s ease, width 0s 1.5s;
    opacity: 0;
    visibility: hidden;
    background-color: transparent;
    z-index: 1;
    width: 0;
  `;
  loadingText.style.cssText = `
    opacity: 0;
    visibility: hidden;
  `;
};

const destroyPreloader = () => {
  hidePreloader();
  document.body.classList.remove(`page--no-overflow`);

  setTimeout(() => {
    preloaderElement.remove();
  }, 1500);
};

const destroyAfterAnimationComplete = () => {
  const timerRemainingTime = animationTime - (Date.now() - timerStart);
  setTimeout(destroyPreloader, timerRemainingTime);
};

window.onload = () => {
  clearTimeout(loaderAnimationTimeout);

  isAnimationDone ? destroyPreloader(): destroyAfterAnimationComplete();
};
