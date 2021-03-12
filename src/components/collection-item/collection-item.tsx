import * as React from "react";
import {Link} from "react-router-dom";

import {CollectionInterface} from "../../helpers/my-types";
import {AppRoute} from "../../helpers/const";

interface CollectionItemProps {
  item: CollectionInterface;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  item,
}: CollectionItemProps) => (
  <article className="catalog__item">
    <Link
      to={`${AppRoute.COLLECTIONS.path}/${item.alias}`}
      className="catalog__link"
    >
      <div className="catalog__image-wrapper">
        <img
          className="catalog__item-thumbnail"
          src={item.picture}
          alt={`Логотип коллекции «${item.name}»`}
        />
      </div>
      <div className="catalog__item-info">
        <h3 className="catalog__item-name">{item.name}</h3>
        <strong className="catalog__item-price">
          <span className="catalog__item-price--value">{item.year}</span>
        </strong>
      </div>
    </Link>
  </article>
);

export default CollectionItem;
