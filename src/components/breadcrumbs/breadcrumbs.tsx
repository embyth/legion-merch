import * as React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../helpers/const";
import { ProductInterface } from "../../helpers/my-types";

interface BreadcrumbsProps {
  product: ProductInterface;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  product,
}: BreadcrumbsProps) => (
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <Link to={AppRoute.ROOT.path} className="breadcrumbs__link">
        Главная
      </Link>
    </li>
    <li className="breadcrumbs__item">
      <Link to={AppRoute.CATALOG.path} className="breadcrumbs__link">
        {product.category}
      </Link>
    </li>
    <li className="breadcrumbs__item">{product.name}</li>
  </ul>
);

export default Breadcrumbs;
