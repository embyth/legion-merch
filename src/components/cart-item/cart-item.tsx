import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {Operations as CartOperations} from "../../store/cart/cart";
import {Operations as DataOperations} from "../../store/data/data";

import {AppRoute, CartUserAction} from "../../helpers/const";
import {CartProductInterface} from "../../helpers/my-types";

interface CartItemProps {
  cartProduct: CartProductInterface;
  onProductRemoveButtonClick(productId: number, size: string): void;
  onProductQuantityChange(productId: number, size: string, quantity: number): void;
}

const CartItem: React.FC<CartItemProps> = ({cartProduct, onProductRemoveButtonClick, onProductQuantityChange}: CartItemProps) => (
  <tr className="page-cart__item page-cart__item--product">
    <td className="page-cart__item-image">
      <Link to={`${AppRoute.PRODUCT.path}/${cartProduct.alias}`} className="page-cart__image-link">
        <img className="page-cart__image" src={cartProduct.pictures[0]} alt="Худи черного цвета «Starina»" />
      </Link>
    </td>
    <td className="page-cart__item-name">
      <h3 className="page-cart__item-title">
        <Link to={`${AppRoute.PRODUCT.path}/${cartProduct.alias}`} className="page-cart__item-link">{cartProduct.name}</Link>
      </h3>
    </td>
    <td className="page-cart__item-size">
      <p className="page-cart__size">
        <span className="page-cart__size-text">Размер&nbsp;–&nbsp;</span><b className="page-cart__size-value">{cartProduct.selectedSize.label}</b>
      </p>
    </td>
    <td className="page-cart__item-quantity">
      <input
        className="page-cart__quantity-input"
        name="item-quantity" type="number"
        value={cartProduct.itemQuantity}
        min={1}
        autoComplete="off"
        onChange={(evt) => {
          evt.preventDefault();
          onProductQuantityChange(cartProduct.id, cartProduct.selectedSize.key, +evt.target.value);
        }}
      />
    </td>
    <td className="page-cart__item-price">
      <p className="page-cart__price">
        <span className="page-cart__price-text">Цена&nbsp;–&nbsp;</span><strong
          className="page-cart__price-value">{cartProduct.itemTotal}<span className="ruble-symbol">&nbsp;&#8372;</span></strong>
      </p>
    </td>
    <td className="page-cart__item-remove">
      <button
        className="page-cart__remove-button"
        type="button"
        aria-label="Убрать из корзины"
        onClick={(evt) => {
          evt.preventDefault();
          onProductRemoveButtonClick(cartProduct.id, cartProduct.selectedSize.key);
        }}>Убрать</button>
    </td>
  </tr>
);

const mapDispatchToProps = (dispatch) => ({
  onProductRemoveButtonClick(productId, size) {
    dispatch(CartOperations.removeProductFromCart(productId, size));
    dispatch(DataOperations.updateProductStock(productId, size, CartUserAction.REMOVE));
  },

  onProductQuantityChange(productId, size, quantity) {
    dispatch(CartOperations.setCustomQuantityOnProduct(productId, size, quantity));
    dispatch(DataOperations.updateProductStock(productId, size, CartUserAction.CUSTOM, quantity));
  },
});

export default connect(null, mapDispatchToProps)(CartItem);
