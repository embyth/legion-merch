import {ThunkAction} from "redux-thunk";
import {AxiosInstance} from "axios";

import {updateCart, updateTotalCost} from "./utils";

import {extend} from "../../helpers/utils";
import {CartProductInterface} from "../../helpers/my-types";
import {CartUserAction} from "../../helpers/const";

interface CartActionInterface {
  type: string;
  payload?: number | Array<CartProductInterface> | [];
}

export interface StateInterface {
  cartProducts?: Array<CartProductInterface> | [];
  cartTotalCost?: number;
}

export const initialState: StateInterface = {
  cartProducts: [],
  cartTotalCost: 0,
};

export const ActionType = {
  UPDATE_CART_PRODUCTS: `UPDATE_CART_PRODUCTS`,
  UPDATE_CART_TOTAL: `UPDATE_CART_TOTAL`,
};

export const ActionCreator = {
  updateCartProducts: (updatedProducts: Array<CartProductInterface>): CartActionInterface => {
    return {
      type: ActionType.UPDATE_CART_PRODUCTS,
      payload: updatedProducts,
    };
  },

  updateCartTotalPrice: (value: number): CartActionInterface => {
    return {
      type: ActionType.UPDATE_CART_TOTAL,
      payload: value,
    };
  },
};

export const Operations = {
  addProductToCart: (productId: number, size: string): ThunkAction<void, unknown, AxiosInstance, CartActionInterface> => (dispatch, getState) => {
    const updatedCartProducts = updateCart(productId, size, getState(), CartUserAction.ADD);
    const updatedTotalCartCost = updateTotalCost(updatedCartProducts);
    dispatch(ActionCreator.updateCartProducts(updatedCartProducts));
    dispatch(ActionCreator.updateCartTotalPrice(updatedTotalCartCost));
  },

  removeProductFromCart: (productId: number, size: string): ThunkAction<void, unknown, AxiosInstance, CartActionInterface> => (dispatch, getState) => {
    const updatedCartProducts = updateCart(productId, size, getState(), CartUserAction.REMOVE);
    const updatedTotalCartCost = updateTotalCost(updatedCartProducts);
    dispatch(ActionCreator.updateCartProducts(updatedCartProducts));
    dispatch(ActionCreator.updateCartTotalPrice(updatedTotalCartCost));
  },

  setCustomQuantityOnProduct: (productId: number, size: string, quantity: number): ThunkAction<void, unknown, AxiosInstance, CartActionInterface> => (dispatch, getState) => {
    const updatedCartProducts = updateCart(productId, size, getState(), CartUserAction.CUSTOM, quantity);
    const updatedTotalCartCost = updateTotalCost(updatedCartProducts);
    dispatch(ActionCreator.updateCartProducts(updatedCartProducts));
    dispatch(ActionCreator.updateCartTotalPrice(updatedTotalCartCost));
  },
};

export const reducer = (
    state = initialState, action: CartActionInterface
): StateInterface => {
  switch (action.type) {
    case ActionType.UPDATE_CART_PRODUCTS:
      return extend(state, {
        cartProducts: action.payload as Array<CartProductInterface> | [],
      });

    case ActionType.UPDATE_CART_TOTAL:
      return extend(state, {
        cartTotalCost: action.payload as number,
      });

    default:
      return state;
  }
};
