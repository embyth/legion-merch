export const indexShowcaseParams = {
  breakpoints: {
    320: {
      autoplay: false,
      allowTouchMove: false,
      allowSlidePrev: false,
      allowSlideNext: false,
    },
    1366: {
      allowTouchMove: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        enabled: true,
      },
    }
  },
  navigation: {
    nextEl: `.bg-controls__button--next`,
    prevEl: `.bg-controls__button--prev`,
  },
  a11y: {
    prevSlideMessage: `Предыдущее фото`,
    nextSlideMessage: `Следующие фото`,
  },
  className: `showcase`,
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

export enum AppRoute {
  ROOT = `/`,
  CATALOG = `/catalog`,
  PRODUCT = `/product`,
}

export enum Pages {
  MAIN = `MAIN`,
  CATALOG = `CATALOG`,
  PRODUCT = `PRODUCT`,
}

export enum AppMediaQuery {
  MOBILE = `(min-width: 0px) and (max-width: 1365px)`,
  DESKTOP = `(min-width: 1366px)`,
}
