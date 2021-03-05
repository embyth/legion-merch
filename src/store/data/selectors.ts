import NameSpace from "../name-space";

export const getProducts = (state) => state[NameSpace.DATA].products;
export const getProductsRequestStatus = (state) => state[NameSpace.DATA].productsRequestStatus;
export const getIsLoading = (state) => state[NameSpace.DATA].isLoading;
export const getIsLoadError = (state) => state[NameSpace.DATA].isLoadError;

export const getProductByAlias = (state, ownProps) => {
  const products = getProducts(state);
  const productAlias = ownProps.routeProps.match.params.alias;
  return products.find((product) => product.alias === productAlias);
};

export const getProductsByCategory = (state, ownProps) => {
  const products = getProducts(state);
  const productsCategory = ownProps.routeProps.match.params.category;

  return productsCategory
    ? products.filter((product) => product.category.alias === productsCategory)
    : products;
};
