import NameSpace from "../name-space";
import {StateInterface} from "./user";

export const getAuthorizationStatus = (state: StateInterface): string => state[NameSpace.USER].authorizationStatus;
export const getIsAuthorizationError = (state: StateInterface): boolean => state[NameSpace.USER].isAuthorizationError;
export const getIsAuthorizationProcessFinished = (state: StateInterface): boolean => state[NameSpace.USER].isAuthorizationProcessFinished;
