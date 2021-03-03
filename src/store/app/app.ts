import {extend, showBodyScroll, hideBodyScroll, toggleBodyScroll} from "../../helpers/utils";

interface AppStateActionInterface {
  type: string;
  payload?: boolean;
}

interface InitialStateInterface {
  isSideMenuOpen?: boolean;
  isSearchPopupOpen?: boolean;
  isSideCartOpen?: boolean;
}

export const initialState: InitialStateInterface = {
  isSideMenuOpen: false,
  isSearchPopupOpen: false,
  isSideCartOpen: false,
};

export const ActionType = {
  CHANGE_SIDE_MENU_STATE: `CHANGE_SIDE_MENU_STATE`,
  OPEN_SIDE_MENU: `OPEN_SIDE_MENU`,
  CLOSE_SIDE_MENU: `CLOSE_SIDE_MENU`,
  OPEN_SEARCH_POPUP: `OPEN_SEARCH_POPUP`,
  CLOSE_SEARCH_POPUP: `CLOSE_SEARCH_POPUP`,
  CHANGE_SIDE_CART_STATE: `CHANGE_SIDE_CART_STATE`,
  OPEN_SIDE_CART: `OPEN_SIDE_CART`,
  CLOSE_SIDE_CART: `CLOSE_SIDE_CART`,
  HANDLE_PAGE_CHANGE: `HANDLE_PAGE_CHANGE`,
};

export const ActionCreator = {
  changeSideMenuState: () => {
    toggleBodyScroll();

    return {
      type: ActionType.CHANGE_SIDE_MENU_STATE,
    };
  },

  openSideMenu: () => {
    hideBodyScroll();

    return {
      type: ActionType.OPEN_SIDE_MENU,
    };
  },

  closeSideMenu: () => {
    showBodyScroll();

    return {
      type: ActionType.CLOSE_SIDE_MENU,
    };
  },

  openSearchPopup: () => {
    hideBodyScroll();

    return {
      type: ActionType.OPEN_SEARCH_POPUP,
    };
  },

  closeSearchPopup: () => {
    showBodyScroll();

    return {
      type: ActionType.CLOSE_SEARCH_POPUP,
    };
  },

  changeSideCartState: () => {
    toggleBodyScroll();

    return {
      type: ActionType.CHANGE_SIDE_CART_STATE,
    };
  },

  openSideCart: () => {
    hideBodyScroll();

    return {
      type: ActionType.OPEN_SIDE_CART,
    };
  },

  closeSideCart: () => {
    showBodyScroll();

    return {
      type: ActionType.CLOSE_SIDE_CART,
    };
  },

  handlePageChange: () => {
    showBodyScroll();

    return {
      type: ActionType.HANDLE_PAGE_CHANGE,
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

    case ActionType.CHANGE_SIDE_CART_STATE:
      return extend(state, {
        isSideCartOpen: !state.isSideCartOpen,
      });

    case ActionType.OPEN_SIDE_CART:
      return extend(state, {
        isSideCartOpen: true,
      });

    case ActionType.CLOSE_SIDE_CART:
      return extend(state, {
        isSideCartOpen: false,
      });

    case ActionType.HANDLE_PAGE_CHANGE:
      return extend(state, {
        isSearchPopupOpen: false,
        isSideCartOpen: false,
        isSideMenuOpen: false,
      });

    default:
      return state;
  }
}
