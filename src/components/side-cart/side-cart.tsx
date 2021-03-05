import * as React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../../store/app/app";
import { getIsSideCartOpen } from "../../store/app/selectors";

import { PageCategories } from "../../helpers/const";

interface SideCartProps {
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  isSideCartOpen: boolean;
  onCartCloseEvent(): void;
}

class SideCart extends React.PureComponent<SideCartProps, {}> {
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
    const { isSideCartOpen, onCartCloseEvent } = this.props;

    return (
      <React.Fragment>
        <div
          className={`overlay cart__overlay ${
            isSideCartOpen && `cart__overlay--visible`
          }`}
          onClick={onCartCloseEvent}
        ></div>
        <div
          className={`cart ${isSideCartOpen && `cart--open`}`}
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
                <span className="cart__item-quantity--empty">пусто</span>
                <small className="cart__item-quantity--fill">
                  <span className="cart__item-quantity--value">2</span>
                  &nbsp;вещи
                </small>
              </p>
            </header>

            <ul className="cart__list">
              <li className="cart__item cart__item--empty">
                <p className="cart__info-empty">
                  Корзина пуста!
                  <br />
                  <a className="cart__info-empty--link" href="catalog.html">
                    Самое время начать покупки
                  </a>
                </p>
              </li>

              <li className="cart__item">
                <div className="cart__image-wrapper">
                  <a className="cart__image-link" href="starina.html">
                    <img
                      className="cart__image"
                      src="/img/products/wycc-h-starina.jpg"
                      alt="Худи черного цвета «Starina»"
                    />
                  </a>
                </div>
                <div className="cart__item-info">
                  <h3 className="cart__item-name">
                    <a className="cart__item-link" href="starina.html">
                      Starina
                    </a>
                  </h3>
                  <p className="cart__item-description">
                    Размер:&nbsp;
                    <span className="cart__item-size--value">Large</span>
                    <br />
                    Количество:&nbsp;
                    <span className="cart__item-quantity--value">1</span>
                    <br />
                    Цена:&nbsp;
                    <span className="cart__item-price--value">1000.00</span>
                    &nbsp;&#8381;
                  </p>
                  <button
                    className="cart__item-remove"
                    type="button"
                    aria-label="Убрать из корзины"
                  >
                    Убрать
                  </button>
                </div>
              </li>

              <li className="cart__item">
                <div className="cart__image-wrapper">
                  <a
                    className="cart__image-link"
                    href="dont-make-me-beast.html"
                  >
                    <img
                      className="cart__image"
                      src="/img/products/beast-t-front.jpg"
                      alt="Футболка черного цвета «Dont Make Me Beast»"
                    />
                  </a>
                </div>
                <div className="cart__item-info">
                  <h3 className="cart__item-name">
                    <a
                      className="cart__item-link"
                      href="dont-make-me-beast.html"
                    >
                      Dont make me beast
                    </a>
                  </h3>
                  <p className="cart__item-description">
                    Размер:&nbsp;
                    <span className="cart__item-size--value">X-Large</span>
                    <br />
                    Количество:&nbsp;
                    <span className="cart__item-quantity--value">1</span>
                    <br />
                    Цена:&nbsp;
                    <span className="cart__item-price--value">1500.00</span>
                    &nbsp;&#8381;
                  </p>
                  <button
                    className="cart__item-remove"
                    type="button"
                    aria-label="Убрать из корзины"
                  >
                    Убрать
                  </button>
                </div>
              </li>
            </ul>

            <footer className="cart__footer">
              <p className="cart__footer-total">
                Всего&nbsp;|&nbsp;
                <span className="cart__footer-total--value">2500.00</span>
                &nbsp;руб
              </p>
              <div className="cart__footer-buttons">
                <a
                  className="cart__footer-link"
                  href="cart.html"
                  aria-label="Перейти на страницу корзины"
                >
                  В&nbsp;корзину
                </a>
                <a
                  className="cart__footer-link"
                  href="404.html"
                  aria-label="Перейти на страницу оформления заказа"
                >
                  Оформить&nbsp;
                  <br />
                  заказ
                </a>
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
});

const mapDispatchToProps = (dispatch) => ({
  onCartCloseEvent() {
    dispatch(ActionCreator.closeSideCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);
