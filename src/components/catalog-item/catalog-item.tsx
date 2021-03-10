import * as React from "react";
import {Link} from "react-router-dom";

import {ProductInterface} from "../../helpers/my-types";
import {AppRoute} from "../../helpers/const";

interface CatalogItemProps {
  item: ProductInterface;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  item,
}: CatalogItemProps) => (
  <article className="catalog__item">
    <Link
      to={`${AppRoute.PRODUCT.path}/${item.alias}`}
      className="catalog__link"
    >
      <div className="catalog__image-wrapper">
        <img
          className="catalog__item-thumbnail"
          src={item.pictures[0]}
          alt={`${item.type} цвета ${item.color} «${item.name}» из коллекции ${item.collection.name}`}
        />
      </div>
      <div className="catalog__item-info">
        <h3 className="catalog__item-name">{item.name}</h3>
        <strong className="catalog__item-price">
          <span className="catalog__item-price--value">{item.price.value}</span>
          &nbsp;&#8372;
        </strong>
      </div>
    </Link>
  </article>
);

export default CatalogItem;
