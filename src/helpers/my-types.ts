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
