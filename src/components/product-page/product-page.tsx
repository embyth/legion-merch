import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import SwiperCore, {Pagination, EffectFade, A11y} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {
  getProductByAlias,
  getProductsRequestStatus,
} from "../../store/data/selectors";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";

import {ProductInterface} from "../../helpers/my-types";
import {productCarouselParams} from "../../helpers/swiper-params";
import {AppRoute, RequestStatus} from "../../helpers/const";

SwiperCore.use([Pagination, EffectFade, A11y]);

interface ProductPageProps {
  product: ProductInterface;
  productsRequestStatus: string;
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({
  product,
  productsRequestStatus,
  mediaQueries,
}: ProductPageProps) => {
  const {
    DESKTOP: desktopSwiperParams,
    MOBILE: mobileSwiperParams,
  } = productCarouselParams;
  const {isDesktop, isTablet, isMobile} = mediaQueries;

  if (productsRequestStatus !== RequestStatus.SUCCESS) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <main className="main-content" id="main-content">
        <h1 className="visually-hidden">
          {`${product.type} цвета ${product.color} «${product.name}»`}
        </h1>

        <section className="product">
          <h2 className="visually-hidden">Информация о товаре</h2>
          <div className="product__inner">
            {isMobile && <Breadcrumbs product={product} />}

            {isDesktop ? (
              <Swiper
                className="product__image-gallery"
                direction={desktopSwiperParams.direction}
                slidesPerView={desktopSwiperParams.slidesPerView}
                allowTouchMove={desktopSwiperParams.allowTouchMove}
                spaceBetween={desktopSwiperParams.spaceBetween}
              >
                {product.pictures.map((pic, index) => (
                  <SwiperSlide key={pic}>
                    <img
                      src={pic}
                      alt={`${product.type} цвета ${product.color} «${
                        product.name
                      }», ${index + 1} из ${product.pictures.length}`}
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
                {product.pictures.map((pic, index) => (
                  <SwiperSlide key={pic}>
                    <img
                      src={pic}
                      alt={`${product.type} цвета ${product.color} «${
                        product.name
                      }», ${index + 1} из ${product.pictures.length}`}
                    />
                  </SwiperSlide>
                ))}
                <div className="product__gallery-controls"></div>
              </Swiper>
            )}

            <div className="product__info">
              {(isDesktop || isTablet) && <Breadcrumbs product={product} />}
              <h3 className="product__name">{product.name}</h3>
              <strong
                className="product__price"
                aria-label={`Цена ${product.price.value} ${product.price.currency}`}
              >
                <span className="product__price--value">
                  {product.price.value}
                </span>
                &nbsp;&#8372;
              </strong>
              <p className="product__description">{product.description}</p>
              <ul className="product__care-info">
                <li>{product.about.comp}</li>
                <li>{product.about.wash}</li>
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
                    {Object.entries(product.sizes).map(
                        ([sizeLabel, sizeValue]) => (
                          <option
                            key={sizeLabel}
                            value={sizeLabel}
                          >{`${sizeValue.label} - ${sizeValue.stock} шт`}</option>
                        )
                    )}
                  </select>
                  <svg className="product__select-svg" width="15" height="15">
                    <use xlinkHref="/img/sprite.svg#icon-caret"></use>
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
                  <Link
                    to={AppRoute.SIZES.path}
                    className="product__helper-link"
                    target="_blank"
                  >
                    Таблица&nbsp;размеров
                  </Link>
                </li>
                <li className="product__helper-item">
                  <Link
                    to={AppRoute.DELIVERY.path}
                    className="product__helper-link"
                    target="_blank"
                  >
                    Доставка&nbsp;&amp;&nbsp;Возврат
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsRequestStatus: getProductsRequestStatus(state),
  product: getProductByAlias(state, ownProps),
});

export default connect(mapStateToProps)(ProductPage);
