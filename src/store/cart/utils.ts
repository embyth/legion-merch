import {getProducts} from "../data/selectors";
import {getCartProducts} from "./selectors";

import {CartProductInterface, ProductInterface} from "../../helpers/my-types";
import {CartUserAction} from "../../helpers/const";

const updateCartProducts = (cartProducts: Array<CartProductInterface>, item: CartProductInterface, index: number): Array<CartProductInterface> => {
  if (item.itemQuantity === 0) {
    return [
      ...cartProducts.slice(0, index),
      ...cartProducts.slice(index + 1)
    ];
  }

  if (index === -1) {
    return [
      ...cartProducts,
      item
    ];
  }

  return [
    ...cartProducts.slice(0, index),
    item,
    ...cartProducts.slice(index + 1)
  ];
};

const updateCartItem = (product: ProductInterface, item: CartProductInterface | Record<string, never> = {}, size: string, userAction: number): CartProductInterface => {
  const {itemQuantity = 0, itemTotal = 0} = item;

  const quantity = userAction === CartUserAction.REMOVE ? -itemQuantity : userAction;

  return {
    ...product,
    selectedSize: {
      key: size,
      label: product.sizes[size].label,
    },
    itemQuantity: itemQuantity + quantity as number,
    itemTotal: +(itemTotal + quantity * product.price.value).toFixed(2),
  };
};

export const updateCart = (productId: number, size: string, state: unknown, userAction: number): Array<CartProductInterface> => {
  const products = getProducts(state);
  const cartProducts = getCartProducts(state);

  if (products.length === 0) {
    return [];
  }

  const targetProduct = products.find((product) => product.id === productId);
  const productIndex = cartProducts.findIndex((product) => product.id === productId && product.selectedSize.key === size);
  const product = cartProducts[productIndex];

  const newItem = updateCartItem(targetProduct, product, size, userAction);
  const updatedCartProducts = updateCartProducts(cartProducts, newItem, productIndex);

  return updatedCartProducts;
};

export const updateTotalCost = (cartProducts: Array<CartProductInterface>): number => {
  return +cartProducts.reduce((acc, product) => product.itemTotal + acc, 0).toFixed(2);
};
