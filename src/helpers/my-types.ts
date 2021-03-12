import {RouteComponentProps} from "react-router";

export interface ProductInterface {
  name: string;
  description: string;
  alias: string;
  id: number;
  category: {
    label: string;
    alias: string;
  };
  type: string;
  color: string;
  isAvailable: boolean;
  about: {
    comp: string;
    wash: string;
  };
  price: {
    isOnSale: boolean;
    value: number;
    prevValue: number;
    currency: string;
  };
  sizes: {
    s?: {
      stock: number;
      label: string;
    };
    m?: {
      stock: number;
      label: string;
    };
    l?: {
      stock: number;
      label: string;
    };
    xl?: {
      stock: number;
      label: string;
    };
    xxl?: {
      stock: number;
      label: string;
    };
    onesize?: {
      stock: number;
      label: string;
    };
    women?: {
      stock: number;
      label: string;
    };
    men?: {
      stock: number;
      label: string;
    };
  };
  collection: {
    name: string;
    id: number;
  };
  pictures: Array<string>;
}

export interface CartProductInterface extends ProductInterface {
  itemQuantity: number;
  itemTotal: number;
  selectedSize: {
    key: string;
    label: string;
  };
}

export interface CollectionInterface {
  name: string;
  id: number;
  alias: string;
  picture: string;
  year: number;
}

interface MatchParams {
  category?: string;
  alias?: string;
  query?: string;
  collection?: string;
}

export interface RouteProps {
  routeProps: RouteComponentProps<MatchParams>;
}
