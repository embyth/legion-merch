import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/app/app";
import {getIsSideCartOpen} from "../../store/app/selectors";
import {Operations as CartOperations} from "../../store/cart/cart";
import {getCartProducts, getCartTotalCost} from "../../store/cart/selectors";

import {AppRoute, PageCategories} from "../../helpers/const";
import {CartProductInterface} from "../../helpers/my-types";

interface SideCartProps {
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
  isSideCartOpen: boolean;
  cartProducts: Array<CartProductInterface> | [];
  cartTotalCost: number;
  onCartCloseEvent(): void;
  onProductRemoveButtonClick(productId: number, size: string): void;
}

class SideCart extends React.PureComponent<SideCartProps> {
  private myCart: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.myCart = React.createRef();

    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.handleCartHeight = this.handleCartHeight.bind(this);
  }

  private onEscKeyDown(evt) {
    if (evt.keyCode === 27) {
      this.props.onCartCloseEvent();
    }
  }

  private handleCartHeight() {
    if (this.props.currentPage.category !== PageCategories.MAIN) {
      const headerHeight = +document.querySelector<HTMLElement>(`.site-header`)
        .offsetHeight;

      this.myCart.current.style.height = `${
        window.innerHeight - headerHeight
      }px`;
    }
  }

  private getCartItems() {
    const {cartProducts, onProductRemoveButtonClick} = this.props;

    return (cartProducts as Array<CartProductInterface>).map((product) => (
      <li key={`${product.id}-${product.selectedSize.label}`} className="cart__item">
        <div className="cart__image-wrapper">
          <Link to={`${AppRoute.PRODUCT.path}/${product.alias}`} className="cart__image-link">
            <img className="cart__image" src={product.pictures[0]}
              alt="Футболка черного цвета «Dont Make Me Beast»" />
          </Link>
        </div>
        <div className="cart__item-info">
          <h3 className="cart__item-name">
            <Link to={`${AppRoute.PRODUCT.path}/${product.alias}`} className="cart__item-link">{product.name}</Link>
          </h3>
          <p className="cart__item-description">
            Размер:&nbsp;<span className="cart__item-size--value">{product.selectedSize.label}</span><br />
            Количество:&nbsp;<span className="cart__item-quantity--value">{product.itemQuantity}</span><br />
            Цена:&nbsp;<span className="cart__item-price--value">{product.itemTotal}</span>&nbsp;&#8372;
          </p>
          <button className="cart__item-remove" type="button" aria-label="Убрать из корзины" onClick={() => {
            onProductRemoveButtonClick(product.id, product.selectedSize.key);
          }}>Убрать</button>
        </div>
      </li>
    ));
  }

  componentDidMount() {
    this.handleCartHeight();

    if (this.props.isSideCartOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentDidUpdate() {
    this.handleCartHeight();

    if (this.props.isSideCartOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    } else {
      document.removeEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.onEscKeyDown);
  }

  render() {
    const {isSideCartOpen, cartProducts, cartTotalCost, onCartCloseEvent} = this.props;
    const totalProductsAmount = (cartProducts as Array<CartProductInterface>).reduce((acc, product) => product.itemQuantity + acc, 0);

    return (
      <React.Fragment>
        <div
          className={`overlay cart__overlay ${
            isSideCartOpen && `cart__overlay--visible`
          }`}
          onClick={onCartCloseEvent}
        ></div>
        <div
          className={`cart ${isSideCartOpen && `cart--open`} ${
            cartProducts.length === 0 && `cart--empty`
          }`}
          id="cart-pop"
          ref={this.myCart}
        >
          <div className="cart__inner">
            <header className="cart__header">
              <button
                className="cart__close"
                type="button"
                aria-label="Скрыть корзину"
                onClick={onCartCloseEvent}
              ></button>
              <p className="cart__item-quantity">
                <span className="cart__item-quantity--empty">empty</span>
                <small className="cart__item-quantity--fill">
                  <span className="cart__item-quantity--value">{totalProductsAmount}</span>
                  &nbsp;{totalProductsAmount === 1 ? `item` : `items`}
                </small>
              </p>
            </header>

            <ul className="cart__list">
              {
                cartProducts.length === 0
                  ? (
                    <li className="cart__item cart__item--empty">
                      <p className="cart__info-empty">
                        Корзина пуста!
                        <br />
                        <Link to={AppRoute.CATALOG.path} className="cart__info-empty--link">
                          Самое время начать покупки
                        </Link>
                      </p>
                    </li>
                  )
                  : this.getCartItems()
              }
            </ul>

            <footer className="cart__footer">
              <p className="cart__footer-total">
                Всего&nbsp;|&nbsp;
                <span className="cart__footer-total--value">{cartTotalCost}</span>
                &nbsp;грн
              </p>
              <div className="cart__footer-buttons">
                <Link
                  to={AppRoute.CART.path}
                  className="cart__footer-link"
                  aria-label="Перейти на страницу корзины"
                >
                  В&nbsp;корзину
                </Link>
                <Link
                  to={AppRoute.CHECKOUT.path}
                  className="cart__footer-link"
                  aria-label="Перейти на страницу оформления заказа"
                >
                  Оформить&nbsp;
                  <br />
                  заказ
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isSideCartOpen: getIsSideCartOpen(state),
  cartProducts: getCartProducts(state),
  cartTotalCost: getCartTotalCost(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartCloseEvent() {
    dispatch(ActionCreator.closeSideCart());
  },

  onProductRemoveButtonClick(productId, size) {
    dispatch(CartOperations.removeProductFromCart(productId, size));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);
