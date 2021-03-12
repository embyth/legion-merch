import {createSelector} from "reselect";

import NameSpace from "../name-space";
import {StateInterface} from "./data";
import {ProductInterface, CollectionInterface} from "../../helpers/my-types";

export const getProducts = (state: StateInterface): Array<ProductInterface> => state[NameSpace.DATA].products;
export const getCollections = (state: StateInterface): Array<CollectionInterface> => state[NameSpace.DATA].collections;
export const getSourceProducts = (state: StateInterface): Array<ProductInterface> => state[NameSpace.DATA].sourceProducts;
export const getProductsRequestStatus = (state: StateInterface): string => state[NameSpace.DATA].productsRequestStatus;
export const getCollectionsRequestStatus = (state: StateInterface): string => state[NameSpace.DATA].collectionsRequestStatus;
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

export const getCollectionByAlias = createSelector(
    getCollections,
    getExtraProps,
    (collections, ownProps) => {
      const collectionAlias = ownProps.routeProps.match.params.collection;
      return collections.find((collection) => collection.alias === collectionAlias);
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

export const getProductsByCollection = createSelector(
    getProducts,
    getCollections,
    getExtraProps,
    (products, collections, ownProps) => {
      const productsCollection = ownProps.routeProps.match.params.collection;

      if (!productsCollection) {
        return collections;
      }

      if (products.length === 0 || collections.length === 0) {
        return [];
      }

      const targetCollectionId = collections.find((collection) => collection.alias === productsCollection).id;

      return productsCollection
        ? products.filter((product) => product.collection.id === targetCollectionId)
        : [];
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

export const getProductBySearchQuery = createSelector(
    getProducts,
    getExtraProps,
    (products, ownProps) => {
      const routeQuery = ownProps.routeProps.match.params.query;
      const searchQuery = routeQuery ? routeQuery.replace(/\s\s+/g, ` `).toLowerCase() : null;

      return (searchQuery && products.length > 0)
        ? products.filter((product) => product.name.toLowerCase().includes(searchQuery)
            || product.category.label.toLowerCase().includes(searchQuery)
            || product.description.toLowerCase().includes(searchQuery))
        : [];
    }
);
