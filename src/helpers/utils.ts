interface ExtendInterface {
  <T>(state: T, newStateValue: T): T;
}

export const extend: ExtendInterface = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};
