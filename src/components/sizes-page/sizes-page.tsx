import * as React from "react";

import SizesTshirt from "../sizes-tshirt/sizes-tshirt";
import SizesHoodie from "../sizes-hoodie/sizes-hoodie";
import SizesPants from "../sizes-pants/sizes-pants";

import withActiveSize from "../../hocs/with-active-size/with-active-size";

import { ProductType } from "../../helpers/const";

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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default SizesPage;
