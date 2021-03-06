import * as React from "react";
import {connect} from "react-redux";

import CatalogItem from "../catalog-item/catalog-item";

import {
  getProductsByCategory,
  getProductsRequestStatus,
} from "../../store/data/selectors";

import {ProductInterface} from "../../helpers/my-types";

interface CatalogPageProps {
  productsRequestStatus: string;
  products: Array<ProductInterface>;
}

const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
}: CatalogPageProps) => (
  <React.Fragment>
    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">
        Каталог одежды интернет-магазина Legion
      </h1>

      <section className="catalog">
        <h2 className="visually-hidden">Наша продукция</h2>
        <div className="catalog__inner">
          {products.map((product) => (
            <CatalogItem key={product.id} item={product} />
          ))}
        </div>
      </section>
    </main>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  productsRequestStatus: getProductsRequestStatus(state),
  products: getProductsByCategory(state, ownProps),
});

export default connect(mapStateToProps)(CatalogPage);
