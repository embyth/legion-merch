import * as React from "react";
import SwiperCore, { Pagination, EffectFade, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PageHeader from "../page-header/page-header";
import SideMenu from "../side-menu/side-menu";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";

import { ProductInterface } from "../../helpers/my-types";
import {
  productCarouselParams,
  Pages,
  AppMediaQuery,
} from "../../helpers/const";

import { productItem } from "../../mocks/product";

SwiperCore.use([Pagination, EffectFade, A11y]);

interface ProductPageProps {
  product: ProductInterface;
}

interface ProductPageState {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

class ProductPage extends React.PureComponent<
  ProductPageProps,
  ProductPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
      isTablet: window.matchMedia(AppMediaQuery.TABLET).matches,
      isMobile: window.matchMedia(AppMediaQuery.MOBILE).matches,
    };

    this.updateMediaBreakpoints = this.updateMediaBreakpoints.bind(this);
  }

  private updateMediaBreakpoints() {
    this.setState({
      isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
      isTablet: window.matchMedia(AppMediaQuery.TABLET).matches,
      isMobile: window.matchMedia(AppMediaQuery.MOBILE).matches,
    });
  }

  componentDidMount() {
    window.addEventListener(`resize`, this.updateMediaBreakpoints);
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.updateMediaBreakpoints);
  }

  render() {
    const { isDesktop, isTablet, isMobile } = this.state;
    const {
      MOBILE: mobileSwiperParams,
      DESKTOP: desktopSwiperParams,
    } = productCarouselParams;

    return (
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
              {isMobile && <Breadcrumbs product={productItem} />}

              {isDesktop ? (
                <Swiper
                  className="product__image-gallery"
                  direction={desktopSwiperParams.direction}
                  slidesPerView={desktopSwiperParams.slidesPerView}
                  allowTouchMove={desktopSwiperParams.allowTouchMove}
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
              ) : (
                <Swiper
                  className="product__image-gallery"
                  pagination={mobileSwiperParams.pagination}
                  a11y={mobileSwiperParams.a11y}
                  effect={mobileSwiperParams.effect}
                  direction={mobileSwiperParams.direction}
                  grabCursor={mobileSwiperParams.grabCursor}
                  slidesPerView={mobileSwiperParams.slidesPerView}
                  loop={mobileSwiperParams.loop}
                  autoHeight={mobileSwiperParams.autoHeight}
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
              )}

              <div className="product__info">
                {(isDesktop || isTablet) && (
                  <Breadcrumbs product={productItem} />
                )}
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
                <p className="product__description">
                  {productItem.description}
                </p>
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
  }
}

export default ProductPage;
