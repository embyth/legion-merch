import * as React from "react";
import SwiperCore, { Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PageHeader from "../page-header/page-header";
import SideMenu from "../side-menu/side-menu";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";

import { ProductInterface } from "../../helpers/my-types";
import { productCarouselParams, Pages } from "../../helpers/const";

import { productItem } from "../../mocks/product";

SwiperCore.use([Pagination, A11y, EffectFade]);

interface ProductPageProps {
  product: ProductInterface;
}

const ProductPage: React.FC<ProductPageProps> = ({
  product,
}: ProductPageProps) => (
  <div className="page page--inner">
    <PageHeader currentPage={Pages.PRODUCT} />
    <SideMenu currentPage={Pages.PRODUCT} />

    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">
        {`${productItem.category} цвета ${productItem.color} «${productItem.name}»`}
      </h1>

      <section className="product">
        <h2 className="visually-hidden">Информация о товаре</h2>
        <div className="product__inner">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a href="index.html" className="breadcrumbs__link">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a href="catalog.html" className="breadcrumbs__link">
                Новинки
              </a>
            </li>
            <li className="breadcrumbs__item">{productItem.name}</li>
          </ul>

          <Swiper
            className="product__image-gallery"
            a11y={productCarouselParams.a11y}
            pagination={productCarouselParams.pagination}
            effect={productCarouselParams.effect}
            direction={productCarouselParams.direction}
            grabCursor={productCarouselParams.grabCursor}
            slidesPerView={productCarouselParams.slidesPerView}
          >
            {productItem.pictures.map((pic, index) => (
              <SwiperSlide key={pic}>
                <img
                  src={pic}
                  alt="Белая футболка с перечеркнутым текстом зритель и надписью актер"
                />
              </SwiperSlide>
            ))}
            <div className="product__gallery-controls"></div>
          </Swiper>

          <div className="product__info">
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a href="index.html" className="breadcrumbs__link">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="catalog.html" className="breadcrumbs__link">
                  Новинки
                </a>
              </li>
              <li className="breadcrumbs__item">{productItem.name}</li>
            </ul>
            <h3 className="product__name">{productItem.name}</h3>
            <strong
              className="product__price"
              aria-label={`Цена ${productItem.price.value} ${productItem.price.currency}`}
            >
              <span className="product__price--value">
                {productItem.price.value}
              </span>
              &nbsp;&#8372;
            </strong>
            <p className="product__description">{productItem.description}</p>
            <ul className="product__care-info">
              <li>{productItem.about.comp}</li>
              <li>{productItem.about.wash}</li>
            </ul>

            <form
              action="https://echo.htmlacademy.ru"
              method="post"
              className="product__add-bag"
            >
              <div className="product__size-select">
                <label className="visually-hidden" htmlFor="product-size">
                  Выбрать размер
                </label>
                <select
                  className="product__size"
                  name="product-size"
                  id="product-size"
                >
                  {Object.entries(productItem.sizes).map(
                    ([sizeLabel, sizeValue]) => (
                      <option
                        key={sizeLabel}
                        value={sizeLabel}
                      >{`${sizeValue.label} - ${sizeValue.stock} шт`}</option>
                    )
                  )}
                </select>
                <svg className="product__select-svg" width="15" height="15">
                  <use xlinkHref="img/sprite.svg#icon-caret"></use>
                </svg>
              </div>
              <button
                className="product__submit button button--primary button--glitch"
                name="submit"
                value="Add to Bag"
                type="submit"
              >
                В корзину
              </button>
            </form>

            <ul className="product__helpers">
              <li className="product__helper-item">
                <a
                  href="size-tables.html"
                  className="product__helper-link"
                  target="_blank"
                >
                  Таблица&nbsp;размеров
                </a>
              </li>
              <li className="product__helper-item">
                <a
                  href="delivery.html"
                  className="product__helper-link"
                  target="_blank"
                >
                  Доставка&nbsp;&amp;&nbsp;Возврат
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <PageFooter />
    <SearchPopup />
    <SideCart />
  </div>
);

export default ProductPage;
