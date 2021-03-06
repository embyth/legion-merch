import {createSelector} from "reselect";

import NameSpace from "../name-space";
import {StateInterface} from "./data";
import {ProductInterface} from "../../helpers/my-types";

export const getProducts = (state: StateInterface): Array<ProductInterface> => state[NameSpace.DATA].products;
export const getProductsRequestStatus = (state: StateInterface): string => state[NameSpace.DATA].productsRequestStatus;
export const getIsLoading = (state: StateInterface): boolean => state[NameSpace.DATA].isLoading;
export const getIsLoadError = (state: StateInterface): boolean => state[NameSpace.DATA].isLoadError;

const getExtraProps = (state, extraProps) => extraProps;

export const getProductByAlias = createSelector(
    getProducts,
    getExtraProps,
    (products, ownProps) => {
      const productAlias = ownProps.routeProps.match.params.alias;
      return products.find((product) => product.alias === productAlias);
    }
);

export const getProductsByCategory = createSelector(
    getProducts,
    getExtraProps,
    (products, ownProps) => {
      const productsCategory = ownProps.routeProps.match.params.category;

      return productsCategory
        ? products.filter((product) => product.category.alias === productsCategory)
        : products;
    }
);

export const getProductsCategories = createSelector(
    getProducts,
    (products) => {
      return products
        .filter((item, index, arr) =>
          index === arr.findIndex((temp) =>
            temp.category.alias === item.category.alias
          )
        )
        .map((item) => item.category);
    }
);
