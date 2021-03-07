import NameSpace from "../name-space";
import {StateInterface} from "./cart";
import {CartProductInterface} from "../../helpers/my-types";

export const getCartProducts = (state: StateInterface): Array<CartProductInterface> | [] => state[NameSpace.CART].cartProducts;
export const getCartTotalCost = (state: StateInterface): number => state[NameSpace.CART].cartTotalCost;
export const getCartTotalItems = (state: StateInterface): number => state[NameSpace.CART].cartTotalItems;
