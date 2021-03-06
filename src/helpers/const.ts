export enum PageCategories {
  MAIN = `MAIN`,
  SHOP = `SHOP`,
  CATALOG = `CATALOG`,
  CLIENT = `CLIENT`,
  CART = `CART`,
  SEARCH = `SEARCH`,
  PAYMENT = `PAYMENT`,
  USER = `USER`,
  OTHER = `OTHER`,
}

export const AppRoute = {
  ROOT: {
    path: `/`,
    title: `Главная`,
    category: PageCategories.MAIN,
  },
  CATALOG: {
    path: `/catalog`,
    title: `Каталог`,
    category: PageCategories.CATALOG,
  },
  COLLECTIONS: {
    path: `/collections`,
    title: `Коллекции`,
    category: PageCategories.CATALOG,
  },
  PRODUCT: {
    path: `/product`,
    title: ``,
    category: PageCategories.SHOP,
  },
  CART: {
    path: `/cart`,
    title: `Корзина`,
    category: PageCategories.CART,
  },
  SEARCH: {
    path: `/search`,
    title: `Поиск`,
    category: PageCategories.SEARCH,
  },
  ABOUT: {
    path: `/about`,
    title: `О нас`,
    category: PageCategories.OTHER,
  },
  CONTACTS: {
    path: `/contacts`,
    title: `Связь с нами`,
    category: PageCategories.CLIENT,
  },
  DELIVERY: {
    path: `/delivery`,
    title: `Доставка и Возврат`,
    category: PageCategories.CLIENT,
  },
  SIZES: {
    path: `/sizes`,
    title: `Таблица размеров`,
    category: PageCategories.CLIENT,
  },
  FAQ: {
    path: `/faq`,
    title: `FAQ`,
    category: PageCategories.CLIENT,
  },
  PRIVACY: {
    path: `/privacy`,
    title: `Публичная оферта`,
    category: PageCategories.CLIENT,
  },
  CHECKOUT: {
    path: `/checkout`,
    title: `Оформление заказа`,
    category: PageCategories.PAYMENT,
  },
  LOGIN: {
    path: `/login`,
    title: `Вход`,
    category: PageCategories.USER,
  },
  SIGNUP: {
    path: `/signup`,
    title: `Регистрация`,
    category: PageCategories.USER,
  },
  PROFILE: {
    path: `/profile`,
    title: `Профиль`,
    category: PageCategories.USER,
  },
};

export enum AppMediaQuery {
  MOBILE = `(min-width: 0px) and (max-width: 767px)`,
  TABLET = `(min-width: 768px) and (max-width: 1365px)`,
  DESKTOP = `(min-width: 1366px)`,
}

export enum ProductType {
  TSHIRT = `TSHIRT`,
  HOODIE = `HOODIE`,
  PANTS = `PANTS`,
}

export enum Sizes {
  XS = `X-SMALL`,
  S = `SMALL`,
  M = `MEDIUM`,
  L = `LARGE`,
  XL = `X-LARGE`,
  XXL = `XX-LARGE`,
}

export enum RequestStatus {
  NOT_SENT = `NOT_SENT`,
  SENDING = `SENDING`,
  SUCCESS = `SUCCESS`,
  ERROR = `ERROR`,
}

interface ApiConfigInterface {
  URL: string;
  TIMEOUT: number;
  COOKIES: boolean;
}

export const ApiConfig: ApiConfigInterface = {
  URL: `/api`,
  TIMEOUT: 5000,
  COOKIES: true,
};

export enum ErrorStatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL = 500,
  SERVICE_UNAVAILABLE = 503,
}

export enum CartUserAction {
  ADD = `ADD`,
  REMOVE = `REMOVE`,
  CUSTOM = `CUSTOM`,
}

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NOT_AUTH = `NOT_AUTH`,
}
