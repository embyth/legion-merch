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
    spaceBetween: 20,
  },
};
