import * as React from "react";

import SizesTshirt from "../sizes-tshirt/sizes-tshirt";
import SizesHoodie from "../sizes-hoodie/sizes-hoodie";
import SizesPants from "../sizes-pants/sizes-pants";
import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideMenu from "../side-menu/side-menu";
import SideCart from "../side-cart/side-cart";

import withActiveSize from "../../hocs/with-active-size/with-active-size";

import { AppRoute, ProductType } from "../../helpers/const";

const SizesTshirtWrapped = withActiveSize(SizesTshirt);
const SizesHoodieWrapped = withActiveSize(SizesHoodie);
const SizesPantsWrapped = withActiveSize(SizesPants);

interface SizesPageState {
  currentProductType: string;
}

class SizesPage extends React.PureComponent<{}, SizesPageState> {
  constructor(props) {
    super(props);

    this.state = {
      currentProductType: ProductType.TSHIRT,
    };

    this.handlePrudctTypeButtonClick = this.handlePrudctTypeButtonClick.bind(
      this
    );
    this.renderProductType = this.renderProductType.bind(this);
  }

  private handlePrudctTypeButtonClick(type) {
    this.setState({
      currentProductType: type,
    });
  }

  private renderProductType() {
    const { currentProductType } = this.state;

    switch (currentProductType) {
      case ProductType.TSHIRT:
        return <SizesTshirtWrapped />;
      case ProductType.HOODIE:
        return <SizesHoodieWrapped />;
      case ProductType.PANTS:
        return <SizesPantsWrapped />;
      default:
        return <SizesTshirtWrapped />;
    }
  }

  render() {
    const { currentProductType } = this.state;

    return (
      <div className="page page--inner page--customer-care">
        <PageHeader currentPage={AppRoute.SIZES} />

        <main className="main-content" id="main-content">
          <h1 className="visually-hidden">
            Условия доставки или возврата интернет-магазина Legion
          </h1>

          <section className="size">
            <h2 className="page-title">Таблица размеров</h2>

            <ul className="size__product-type-switchers">
              <li className="size__switch-wrapper">
                <button
                  className={`size__button ${
                    currentProductType === ProductType.TSHIRT
                      ? `size__button--active`
                      : ``
                  } button button--primary button--glitch`}
                  id="size-tshirt"
                  type="button"
                  onClick={() =>
                    this.handlePrudctTypeButtonClick(ProductType.TSHIRT)
                  }
                >
                  Футболки
                </button>
              </li>
              <li className="size__switch-wrapper">
                <button
                  className={`size__button ${
                    currentProductType === ProductType.HOODIE
                      ? `size__button--active`
                      : ``
                  } button button--primary button--glitch`}
                  id="size-hoodie"
                  type="button"
                  onClick={() =>
                    this.handlePrudctTypeButtonClick(ProductType.HOODIE)
                  }
                >
                  Толстовки
                </button>
              </li>
              <li className="size__switch-wrapper">
                <button
                  className={`size__button ${
                    currentProductType === ProductType.PANTS
                      ? `size__button--active`
                      : ``
                  } button button--primary button--glitch`}
                  id="size-pants"
                  type="button"
                  onClick={() =>
                    this.handlePrudctTypeButtonClick(ProductType.PANTS)
                  }
                >
                  Штаны
                </button>
              </li>
            </ul>

            {this.renderProductType()}
          </section>
        </main>

        <PageFooter />
        <SideMenu currentPage={AppRoute.SIZES} />
        <SideCart />
        <SearchPopup />
      </div>
    );
  }
}

export default SizesPage;
