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
  a11y: {
    prevSlideMessage: `Предыдущее фото`,
    nextSlideMessage: `Следующие фото`,
    paginationBulletMessage: `Перейти к фото номер {{index}}`,
  },
  pagination: {
    el: `.product__gallery-controls`,
    clickable: true,
    bulletClass: `product__gallery-controls-dot`,
    bulletActiveClass: `product__gallery-controls-dot--current`,
    renderBullet: (index, className) => (
      `<span class="${className}">${index + 1}</span>`
    ),
  },
  grabCursor: true,
  slidesPerView: 1,
  effect: `fade` as const,
  direction: `horizontal` as const,
};

export enum AppRoute {
  ROOT = `/`,
  CATALOG = `/catalog`,
  PRODUCT = `/product`,
}
