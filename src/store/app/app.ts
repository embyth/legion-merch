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
  OPEN_SIDE_MENU: `OPEN_SIDE_MENU`,
  CLOSE_SIDE_MENU: `CLOSE_SIDE_MENU`,
};

export const ActionCreator = {
  changeSideMenuState: () => {
    return {
      type: ActionType.CHANGE_SIDE_MENU_STATE,
    };
  },

  openSideMenu: () => {
    return {
      type: ActionType.OPEN_SIDE_MENU,
    };
  },

  closeSideMenu: () => {
    return {
      type: ActionType.CLOSE_SIDE_MENU,
    };
  },
};

export const reducer = (state = initialState, action: AppStateActionInterface) => {
  switch(action.type) {
    case ActionType.CHANGE_SIDE_MENU_STATE:
      return extend(state, {
        isSideMenuOpen: !state.isSideMenuOpen,
      });

    case ActionType.OPEN_SIDE_MENU:
      return extend(state, {
        isSideMenuOpen: true,
      });

    case ActionType.CLOSE_SIDE_MENU:
      return extend(state, {
        isSideMenuOpen: false,
      });

    default:
      return state;
  }
}
