import * as React from "react";

const SideCart: React.FC = () => (
  <React.Fragment>
    <div className="overlay cart__overlay"></div>
    <div className="cart" id="cart-pop">
      <div className="cart__inner">
        <header className="cart__header">
          <button
            className="cart__close"
            type="button"
            aria-label="Скрыть корзину"
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
                  src="img/products/wycc-h-starina.jpg"
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
              <a className="cart__image-link" href="dont-make-me-beast.html">
                <img
                  className="cart__image"
                  src="img/products/beast-t-front.jpg"
                  alt="Футболка черного цвета «Dont Make Me Beast»"
                />
              </a>
            </div>
            <div className="cart__item-info">
              <h3 className="cart__item-name">
                <a className="cart__item-link" href="dont-make-me-beast.html">
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

export default SideCart;
