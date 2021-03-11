import {extend} from "../../helpers/utils";
import {AuthorizationStatus} from "../../helpers/const";

interface UserActionInterface {
  type: string;
  payload?: string | boolean;
}

export interface StateInterface {
  authorizationStatus?: string;
  isAuthorizationError?: boolean;
  isAuthorizationProcessFinished?: boolean;
}

export const initialState: StateInterface = {
  authorizationStatus: AuthorizationStatus.NOT_AUTH,
  isAuthorizationError: false,
  isAuthorizationProcessFinished: false,
};

export const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  CLEAR_AUTHORIZATION_ERROR: `CLEAR_AUTHORIZATION_ERROR`,
  FINISH_AUTHORIZATION_PROCESS: `FINISH_AUTHORIZATION_PROCESS`,
};

export const ActionCreator = {
  setAuthorizationStatus: (status: string): UserActionInterface => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    };
  },

  showAuthorizationError: (): UserActionInterface => {
    return {
      type: ActionType.SHOW_AUTHORIZATION_ERROR,
      payload: true,
    };
  },

  finishAuthorizationProcess: (): UserActionInterface => {
    return {
      type: ActionType.FINISH_AUTHORIZATION_PROCESS,
      payload: true,
    };
  },

  clearAuthorizationError: (): UserActionInterface => {
    return {
      type: ActionType.CLEAR_AUTHORIZATION_ERROR,
      payload: false,
    };
  },
};

export const reducer = (state = initialState, action: UserActionInterface): StateInterface => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload as string,
      });

    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: action.payload as boolean,
      });

    case ActionType.FINISH_AUTHORIZATION_PROCESS:
      return extend(state, {
        isAuthorizationProcessFinished: action.payload as boolean,
      });

    case ActionType.CLEAR_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: action.payload as boolean,
      });

    default:
      return state;
  }
};
