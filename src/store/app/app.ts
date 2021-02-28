import {extend} from "../../helpers/utils";

interface AppStateActionInterface {
  type: string;
  payload?: boolean;
}

interface InitialStateInterface {
  isSideMenuOpen?: boolean;
}

export const initialState: InitialStateInterface = {
  isSideMenuOpen: false,
};

export const ActionType = {
  CHANGE_SIDE_MENU_STATE: `CHANGE_SIDE_MENU_STATE`,
};

export const ActionCreator = {
  changeSideMenuState: (isOpened: boolean) => {
    return {
      type: ActionType.CHANGE_SIDE_MENU_STATE,
      payload: isOpened,
    };
  },
};

export const reducer = (state = initialState, action: AppStateActionInterface) => {
  switch(action.type) {
    case ActionType.CHANGE_SIDE_MENU_STATE:
      return extend(state, {
        isSideMenuOpen: action.payload,
      });

    default:
      return state;
  }
}
