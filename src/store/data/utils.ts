import {getProducts, getSourceProducts} from "../data/selectors";
import {ProductInterface} from "../../helpers/my-types";
import {CartUserAction} from "../../helpers/const";
import {ProductStockSettings} from "./data";

export const getSettingsToUpdate = (
    productId: number, size: string, state: unknown, userAction: string, userQuantity?: number
): ProductStockSettings => {
  const products = getProducts(state);
  const sourceProducts = getSourceProducts(state);

  const targetProduct = products.find((product: ProductInterface) => product.id === productId);
  const productIndex = products.findIndex((product: ProductInterface) => product.id === productId);

  const sourceTargerProduct = sourceProducts.find((product: ProductInterface) => product.id === productId);

  const currentStock = targetProduct.sizes[size].stock;
  const sourcedStock = sourceTargerProduct.sizes[size].stock;
  let productUpdatedStock;
  switch (userAction) {
    case CartUserAction.ADD:
      productUpdatedStock = (currentStock > 0) ? currentStock - 1 : currentStock;
      break;
    case CartUserAction.REMOVE:
      productUpdatedStock = sourcedStock;
      break;
    case CartUserAction.CUSTOM:
      productUpdatedStock = (sourcedStock >= userQuantity) ? sourcedStock - userQuantity : 0;
      break;

    default:
      productUpdatedStock = currentStock + 1;
  }

  return {
    index: productIndex,
    size,
    stock: productUpdatedStock,
  };
};
