import * as React from "react";
import {connect} from "react-redux";

import ProductLoader from "../product-loader/product-loader";
import CollectionItem from "../collection-item/collection-item";
import CatalogItem from "../catalog-item/catalog-item";

import {
  getCollections,
  getProductsByCollection,
  getProductsRequestStatus,
} from "../../store/data/selectors";

import {ProductInterface, CollectionInterface, RouteProps} from "../../helpers/my-types";
import {RequestStatus} from "../../helpers/const";

interface CollectionsPageProps extends RouteProps {
  productsRequestStatus: string;
  products: Array<ProductInterface>;
  collections: Array<CollectionInterface>;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({
  productsRequestStatus,
  products,
  collections,
  routeProps,
}: CollectionsPageProps) => {
  if (productsRequestStatus !== RequestStatus.SUCCESS) {
    return <ProductLoader />;
  }

  const isCollectionDefined = routeProps.match.params.collection;

  return (
    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">
        Коллекции одежды интернет-магазина Legion
      </h1>

      <section className="catalog">
        <h2 className="visually-hidden">Наши коллекции</h2>
        <div className="catalog__inner">
          {isCollectionDefined
            ? products.map((product) => (
              <CatalogItem key={product.id} item={product} />
            ))
            : collections.map((collection) => (
              <CollectionItem key={collection.id} item={collection} />
            ))
          }
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsRequestStatus: getProductsRequestStatus(state),
  products: getProductsByCollection(state, ownProps),
  collections: getCollections(state),
});

export default connect(mapStateToProps)(CollectionsPage);
