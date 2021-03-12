import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import SwiperCore, {Pagination, EffectFade, A11y} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {
  getProductByAlias,
  getProductsRequestStatus,
} from "../../store/data/selectors";
import {Operations as DataOperations} from "../../store/data/data";
import {Operations as CartOperations} from "../../store/cart/cart";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import ProductLoader from "../product-loader/product-loader";

import {ProductInterface} from "../../helpers/my-types";
import {productCarouselParams} from "../../helpers/swiper-params";
import {AppRoute, CartUserAction, RequestStatus} from "../../helpers/const";

SwiperCore.use([Pagination, EffectFade, A11y]);

interface ProductPageProps {
  product: ProductInterface;
  productsRequestStatus: string;
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
  onAddToCartButtonClick(productId: number, size: string): void;
}

interface ProductPageState {
  currentSize: string;
}

class ProductPage extends React.PureComponent<ProductPageProps, ProductPageState> {
  constructor(props) {
    super(props);

    this.state = {
      currentSize: `not-selected`,
    };

    this.handleSizeSelectChange = this.handleSizeSelectChange.bind(this);
  }

  private handleSizeSelectChange(evt) {
    this.setState({
      currentSize: evt.target.value,
    });
  }

  render() {
    const {
      DESKTOP: desktopSwiperParams,
      MOBILE: mobileSwiperParams,
    } = productCarouselParams;
    const {mediaQueries, productsRequestStatus, product, onAddToCartButtonClick} = this.props;
    const {currentSize} = this.state;
    const {isDesktop, isTablet, isMobile} = mediaQueries;

    if (productsRequestStatus !== RequestStatus.SUCCESS) {
      return <ProductLoader />;
    }

    const isProductInStock = Object.entries(product.sizes).reduce((acc, [sizeLabel]) => acc + product.sizes[sizeLabel].stock, 0) > 0;

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
                        alt={`${product.type} цвета ${product.color} «${product.name}» из коллекции ${product.collection.name}, ${index + 1} из ${product.pictures.length}`}
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
                        alt={`${product.type} цвета ${product.color} «${product.name}» из коллекции ${product.collection.name}, ${index + 1} из ${product.pictures.length}`}
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
                  {isProductInStock
                    ? (
                      <span className="product__price--value">
                        {product.price.value}
                        &nbsp;&#8372;
                      </span>
                    )
                    : (
                      <span>Нет в наличии</span>
                    )
                  }
                </strong>
                <p className="product__description">{product.description}</p>
                <ul className="product__care-info">
                  <li>{product.about.comp}</li>
                  <li>{product.about.wash}</li>
                </ul>

                <form className="product__add-bag">
                  <div className="product__size-select">
                    <label className="visually-hidden" htmlFor="product-size">
                      Выбрать размер
                    </label>
                    <select
                      className="product__size"
                      name="product-size"
                      id="product-size"
                      value={currentSize}
                      disabled={!isProductInStock}
                      onChange={this.handleSizeSelectChange}
                    >
                      <option
                        value="not-selected"
                        disabled
                      >Выбрать размер</option>
                      {Object.entries(product.sizes).map(
                          ([sizeLabel, sizeValue]) => (
                            <option
                              key={sizeLabel}
                              value={sizeLabel}
                              disabled={product.sizes[sizeLabel].stock === 0}
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
                    disabled={currentSize === `not-selected` || product.sizes[currentSize].stock === 0}
                    onClick={(evt) => {
                      evt.preventDefault();
                      onAddToCartButtonClick(product.id, currentSize);
                    }}
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  productsRequestStatus: getProductsRequestStatus(state),
  product: getProductByAlias(state, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCartButtonClick(productId, size) {
    dispatch(CartOperations.addProductToCart(productId, size));
    dispatch(DataOperations.updateProductStock(productId, size, CartUserAction.ADD));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
