import * as React from "react";

import PageHeader from "../page-header/page-header";
import SideMenu from "../side-menu/side-menu";
import CatalogItem from "../catalog-item/catalog-item";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";

import { AppRoute } from "../../helpers/const";
import { products } from "../../mocks/product";

const CatalogPage: React.FC = () => (
  <div className="page page--inner">
    <PageHeader currentPage={AppRoute.CATALOG} />
    <SideMenu currentPage={AppRoute.CATALOG} />

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

    <PageFooter />
    <SearchPopup />
    <SideCart />
  </div>
);

export default CatalogPage;
