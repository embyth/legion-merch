'use strict';

(function () {
  // Product Images Slider
  /* eslint-disable */
  let swiper = Swiper;
  let init = false;

  // Which media query
  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1365px)');
    let aboveMobile = window.matchMedia('(min-width: 1366px)');

    // Enable (for mobile)
    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper-container', {
          loop: true,
          effect: 'fade',
          grabCursor: true,
          pagination: {
            el: '.product__gallery-controls',
            clickable: true,
            bulletClass: 'product__gallery-controls-dot',
            bulletActiveClass: 'product__gallery-controls-dot--current',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
          a11y: {
            prevSlideMessage: 'Предыдущее фото',
            nextSlideMessage: 'Следующие фото',
            paginationBulletMessage: 'Перейти к фото номер {{index}}'
          },
        });
      }
    }

    // Disable (for tablet)
    else if (aboveMobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          slidesPerView: 'auto',
          allowTouchMove: false,
          a11y: {
            prevSlideMessage: 'Предыдущее фото',
            nextSlideMessage: 'Следующие фото',
            paginationBulletMessage: 'Перейти к фото номер {{index}}'
          },
        });
      }
    }
  }

  // On Load
  window.addEventListener('load', swiperMode);

  // On Resize
  window.addEventListener('resize', swiperMode);

  // Index Page Images Background Showcase
  let isIndex = document.querySelector('.page--front');

  function swiperIndex() {
    let desktopOnly = window.matchMedia('(min-width: 1366px)');
    let initIndex = false;

    if (desktopOnly.matches) {
      if (!initIndex) {
        initIndex = true;
        swiper = new Swiper('.swiper-container', {
          loop: true,
          direction: 'vertical',
          slidesPerView: 1,
          speed: 700,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.bg-controls__button--next',
            prevEl: '.bg-controls__button--prev',
          },
          a11y: {
            prevSlideMessage: 'Предыдущее фото',
            nextSlideMessage: 'Следующие фото',
          },
        });
      }
    }
  }

  // On Load
  window.addEventListener('load', function () {
    if (isIndex) {
      swiperIndex();
    }
  });

  // On Resize
  window.addEventListener('resize', function () {
    if (isIndex) {
      swiperIndex();
    }
  });
  /* eslint-enable */
})();
