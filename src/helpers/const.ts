export const indexShowcaseParams = {
  navigation: {
    nextEl: `.bg-controls__button--next`,
    prevEl: `.bg-controls__button--prev`,
  },
  a11y: {
    prevSlideMessage: `Предыдущее фото`,
    nextSlideMessage: `Следующие фото`,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      enabled: true,
  },
  loop: true,
  direction: `vertical` as const,
  slidesPerView: 1,
  speed: 700,
};

export const productCarouselParams = {
  MOBILE: {
    pagination: {
      el: `.product__gallery-controls`,
      clickable: true,
      bulletClass: `product__gallery-controls-dot`,
      bulletActiveClass: `product__gallery-controls-dot--current`,
      renderBullet: (index, className) => (
        `<span class="${className}">${index + 1}</span>`
      ),
    },
    a11y: {
      paginationBulletMessage: `Перейти к фото номер {{index}}`,
    },
    grabCursor: true,
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    effect: `fade` as const,
    direction: `horizontal` as const,
  },

  DESKTOP: {
    allowTouchMove: false,
    slidesPerView: `auto` as const,
    direction: `vertical` as const,
  },
};

export enum PageCategories {
  MAIN = `MAIN`,
  SHOP = `SHOP`,
  CLIENT = `CLIENT`,
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
    category: PageCategories.SHOP,
  },
  PRODUCT: {
    path: `/product`,
    title: ``,
    category: PageCategories.SHOP,
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
