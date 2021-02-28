import {extend} from "../../helpers/utils";

interface AppStateActionInterface {
  type: string;
  payload?: boolean;
}

interface InitialStateInterface {
  isSideMenuOpen?: boolean;
  isSearchPopupOpen?: boolean;
}

export const initialState: InitialStateInterface = {
  isSideMenuOpen: false,
  isSearchPopupOpen: false,
};

export const ActionType = {
  CHANGE_SIDE_MENU_STATE: `CHANGE_SIDE_MENU_STATE`,
  OPEN_SIDE_MENU: `OPEN_SIDE_MENU`,
  CLOSE_SIDE_MENU: `CLOSE_SIDE_MENU`,
  OPEN_SEARCH_POPUP: `OPEN_SEARCH_POPUP`,
  CLOSE_SEARCH_POPUP: `CLOSE_SEARCH_POPUP`,
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

  openSearchPopup: () => {
    return {
      type: ActionType.OPEN_SEARCH_POPUP,
    };
  },

  closeSearchPopup: () => {
    return {
      type: ActionType.CLOSE_SEARCH_POPUP,
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

    case ActionType.OPEN_SEARCH_POPUP:
      return extend(state, {
        isSearchPopupOpen: true,
      });

    case ActionType.CLOSE_SEARCH_POPUP:
      return extend(state, {
        isSearchPopupOpen: false,
      });

    default:
      return state;
  }
}
