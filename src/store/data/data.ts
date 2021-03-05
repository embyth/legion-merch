import { ProductInterface } from "../../helpers/my-types";
import { RequestStatus } from "../../helpers/const";
import { extend } from "../../helpers/utils";

interface DataActionInterface {
  type: string;
  payload?: Array<ProductInterface> | ProductInterface | boolean | string;
}

interface InitialStateInterface {
  productsRequestStatus?: string;
  products?: Array<ProductInterface> | [];
  isLoading?: boolean;
  isLoadError?: boolean;
}

export const initialState: InitialStateInterface = {
  productsRequestStatus: RequestStatus.NOT_SENT,
  products: [],
  isLoading: true,
  isLoadError: false,
};

export const ActionType = {
  LOAD_PRODUCTS: `LOAD_PRODUCTS`,
  SET_PRODUCTS_REQUEST_STATUS: `SET_PRODUCTS_REQUEST_STATUS`,
  CATCH_LOAD_ERROR: `CATCH_LOAD_ERROR`,
  FINISH_LOADING: `FINISH_LOADING`,
};

export const ActionCreator = {
  loadProducts: (products: Array<ProductInterface>) => ({
    type: ActionType.LOAD_PRODUCTS,
    payload: products,
  }),

  setProductsRequestStatus: (status: string) => ({
    type: ActionType.SET_PRODUCTS_REQUEST_STATUS,
    payload: status,
  }),

  catchLoadError: () => ({
    type: ActionType.CATCH_LOAD_ERROR,
    payload: true,
  }),

  finishLoading: () => ({
    type: ActionType.FINISH_LOADING,
    payload: false,
  }),
};

export const Operations = {
  loadProducts: () => (dispatch, getState, api) => {
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
}

export const reducer = (state = initialState, action: DataActionInterface) => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return extend(state, {
        products: action.payload as Array<ProductInterface>,
      });

    case ActionType.SET_PRODUCTS_REQUEST_STATUS:
      return extend(state, {
        productsRequestStatus: action.payload as string,
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