import {ThunkAction} from "redux-thunk";
import {AxiosInstance} from "axios";
import produce from "immer";

import {getSettingsToUpdate} from "./utils";
import {ProductInterface, CollectionInterface} from "../../helpers/my-types";
import {RequestStatus} from "../../helpers/const";
import {extend} from "../../helpers/utils";

export interface ProductStockSettings {
  index: number;
  size: string;
  stock: number;
}
export interface DataActionInterface {
  type: string;
  payload?: Array<ProductInterface> | Array<CollectionInterface> | ProductStockSettings | boolean | string;
}

export interface StateInterface {
  productsRequestStatus?: string;
  collectionsRequestStatus?: string;
  products?: Array<ProductInterface> | [];
  collections?: Array<CollectionInterface> | [];
  sourceProducts?: Array<ProductInterface> | [];
  isLoading?: boolean;
  isLoadError?: boolean;
}

export const initialState: StateInterface = {
  productsRequestStatus: RequestStatus.NOT_SENT,
  collectionsRequestStatus: RequestStatus.NOT_SENT,
  products: [],
  collections: [],
  sourceProducts: [],
  isLoading: true,
  isLoadError: false,
};

export const ActionType = {
  LOAD_PRODUCTS: `LOAD_PRODUCTS`,
  LOAD_COLLECTIONS: `LOAD_COLLECTIONS`,
  UPDATE_PRODUCT_STOCK: `UPDATE_PRODUCT_STOCK`,
  SET_PRODUCTS_REQUEST_STATUS: `SET_PRODUCTS_REQUEST_STATUS`,
  SET_COLLECTIONS_REQUEST_STATUS: `SET_COLLECTIONS_REQUEST_STATUS`,
  CATCH_LOAD_ERROR: `CATCH_LOAD_ERROR`,
  FINISH_LOADING: `FINISH_LOADING`,
};

export const ActionCreator = {
  loadProducts: (products: Array<ProductInterface>): DataActionInterface => ({
    type: ActionType.LOAD_PRODUCTS,
    payload: products,
  }),

  loadCollections: (collections: Array<CollectionInterface>): DataActionInterface => ({
    type: ActionType.LOAD_COLLECTIONS,
    payload: collections,
  }),

  updateProductStock: (settings: ProductStockSettings): DataActionInterface => ({
    type: ActionType.UPDATE_PRODUCT_STOCK,
    payload: settings,
  }),

  setProductsRequestStatus: (status: string): DataActionInterface => ({
    type: ActionType.SET_PRODUCTS_REQUEST_STATUS,
    payload: status,
  }),

  setCollectionsRequestStatus: (status: string): DataActionInterface => ({
    type: ActionType.SET_COLLECTIONS_REQUEST_STATUS,
    payload: status,
  }),

  catchLoadError: (): DataActionInterface => ({
    type: ActionType.CATCH_LOAD_ERROR,
    payload: true,
  }),

  finishLoading: (): DataActionInterface => ({
    type: ActionType.FINISH_LOADING,
    payload: false,
  }),
};

export const Operations = {
  loadProducts: (): ThunkAction<Promise<void>, StateInterface, AxiosInstance, DataActionInterface> => (dispatch, getState, api) => {
    dispatch(ActionCreator.setProductsRequestStatus(RequestStatus.SENDING));

    return api.get(`/products`)
      .then((response) => {
        dispatch(ActionCreator.loadProducts(response.data));
        dispatch(ActionCreator.setProductsRequestStatus(RequestStatus.SUCCESS));
        dispatch(ActionCreator.finishLoading());
      })
      .catch(() => {
        dispatch(ActionCreator.setProductsRequestStatus(RequestStatus.ERROR));
        dispatch(ActionCreator.catchLoadError());
      });
  },

  loadCollections: (): ThunkAction<Promise<void>, StateInterface, AxiosInstance, DataActionInterface> => (dispatch, getState, api) => {
    dispatch(ActionCreator.setCollectionsRequestStatus(RequestStatus.SENDING));

    return api.get(`/collections`)
      .then((response) => {
        dispatch(ActionCreator.loadCollections(response.data));
        dispatch(ActionCreator.setCollectionsRequestStatus(RequestStatus.SUCCESS));
        dispatch(ActionCreator.finishLoading());
      })
      .catch(() => {
        dispatch(ActionCreator.setCollectionsRequestStatus(RequestStatus.ERROR));
        dispatch(ActionCreator.catchLoadError());
      });
  },

  updateProductStock: (productId: number, size: string, userAction: string, userQuantity?: number): ThunkAction<void, StateInterface, AxiosInstance, DataActionInterface> => (dispatch, getState) => {
    const settings = getSettingsToUpdate(productId, size, getState(), userAction, userQuantity);
    dispatch(ActionCreator.updateProductStock(settings));
  },
};

export const reducer = (state = initialState, action: DataActionInterface): StateInterface => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return extend(state, {
        products: action.payload as Array<ProductInterface>,
        sourceProducts: action.payload as Array<ProductInterface>,
      });

    case ActionType.LOAD_COLLECTIONS:
      return extend(state, {
        collections: action.payload as Array<CollectionInterface>,
      });

    case ActionType.UPDATE_PRODUCT_STOCK:
      return produce(state, (draft) => {
        const {index, size, stock} = action.payload as ProductStockSettings;
        draft.products[index].sizes[size].stock = stock;
      });

    case ActionType.SET_PRODUCTS_REQUEST_STATUS:
      return extend(state, {
        productsRequestStatus: action.payload as string,
      });

    case ActionType.SET_COLLECTIONS_REQUEST_STATUS:
      return extend(state, {
        collectionsRequestStatus: action.payload as string,
      });

    case ActionType.CATCH_LOAD_ERROR:
      return extend(state, {
        isLoadError: action.payload as boolean,
      });

    case ActionType.FINISH_LOADING:
      return extend(state, {
        isLoading: action.payload as boolean,
      });

    default:
      return state;
  }
};
