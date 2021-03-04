import * as React from "react";

import CatalogItem from "../catalog-item/catalog-item";

import { products } from "../../mocks/product";

const CatalogPage: React.FC = () => (
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

export default CatalogPage;
