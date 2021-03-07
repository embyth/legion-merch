import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getCartProducts, getCartTotalCost} from "../../store/cart/selectors";

import CartItem from "../cart-item/cart-item";

import {AppRoute} from "../../helpers/const";
import {CartProductInterface} from "../../helpers/my-types";

interface CartPageProps {
  cartProducts: Array<CartProductInterface>;
  cartTotalCost: number;
}

const CartPage: React.FC<CartPageProps> = ({cartProducts, cartTotalCost}: CartPageProps) => (
  <main className="main-content" id="main-content">

    <h1 className="visually-hidden">Ваша корзина</h1>

    <section className={`page-cart ${cartProducts.length === 0 && `page-cart--empty`}`}>
      <h2 className="page-title">Корзина</h2>

      <table className="page-cart__table" cellSpacing="0" cellPadding="0">
        <caption className="visually-hidden">Информация о вещах в вашей корзине</caption>

        <thead className="page-cart__header">
          <tr className="page-cart__item page-cart__item--header">
            <th className="page-cart__header-data">Товар</th>
            <th className="page-cart__header-data">Наименование</th>
            <th className="page-cart__header-data">Размер</th>
            <th className="page-cart__header-data">Количество</th>
            <th className="page-cart__header-data">Цена</th>
          </tr>
        </thead>

        <tbody className="page-cart__body">
          {cartProducts.length === 0
            ? (
              <tr className="page-cart__item page-cart__item--empty">
                <td className="page-cart__empty" colSpan={6}>
                  <p>
                  Корзина пуста!<br />
                    <Link to={AppRoute.CATALOG.path} className="page-cart__empty--link">Самое время начать покупки</Link>
                  </p>
                </td>
              </tr>
            ) : (
              cartProducts.map((product) => (
                <CartItem key={`${product.id}-${product.selectedSize.key}`} cartProduct={product} />
              ))
            )}
        </tbody>

        <tfoot className="page-cart__footer">
          <tr className="page-cart__item page-cart__item--footer">
            <td className="page-cart__footer-subtotal" colSpan={6}>
              <p>
                <span className="page-cart__footer-subtotal--text">Всего:&nbsp;</span>
                <b className="page-cart__footer-subtotal--value">{cartTotalCost}</b>
                <span className="page-cart__footer-subtotal--text">&nbsp;грн</span>
              </p>
            </td>
          </tr>
          <tr className="page-cart__item page-cart__item--footer">
            <td className="page-cart__footer-buttons" colSpan={6}>
              <Link to={AppRoute.CHECKOUT.path} className="page-cart__footer-button button button--primary button--glitch"
                aria-label="Перейти на страницу корзины">Оформить&nbsp;заказ</Link>
              <span className="page-cart__footer-separator">- или -</span>
              <Link to={AppRoute.CATALOG.path} className="page-cart__footer-button button button--primary button--glitch"
                aria-label="Перейти на страницу оформления заказа">Продолжить&nbsp;покупки</Link>
            </td>
          </tr>
        </tfoot>
      </table>

    </section>
  </main>
);

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  cartTotalCost: getCartTotalCost(state),
});

export default connect(mapStateToProps)(CartPage);
