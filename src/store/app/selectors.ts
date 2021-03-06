import NameSpace from "../name-space";
import {StateInterface} from "./app";

export const getIsSideMenuOpen = (state: StateInterface): boolean => state[NameSpace.APP].isSideMenuOpen;
export const getIsSearchPopupOpen = (state: StateInterface): boolean => state[NameSpace.APP].isSearchPopupOpen;
export const getIsSideCartOpen = (state: StateInterface): boolean => state[NameSpace.APP].isSideCartOpen;
