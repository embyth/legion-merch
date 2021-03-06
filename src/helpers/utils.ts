interface ExtendInterface {
  <T>(state: T, newStateValue: T): T;
}

export const extend: ExtendInterface = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const hideBodyScroll = (): void => {
  document.body.classList.add(`page--no-overflow`);
};

export const showBodyScroll = (): void => {
  document.body.classList.remove(`page--no-overflow`);
};

export const toggleBodyScroll = (): void => {
  if (document.body.classList.contains(`page--no-overflow`)) {
    showBodyScroll();
  } else {
    hideBodyScroll();
  }
};
