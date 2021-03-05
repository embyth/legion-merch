const products = [
  {
    name: `lucid fc MMX`,
    description: `Худи с регулируемым капюшоном на шнурке и длинными рукавами.`,
    alias: `lucid-fc-mmx`,
    id: 1,
    category: {
      label: `Худи`,
      alias: `hoodie`,
    },
    type: `Худи`,
    color: `cream`,
    isAvailable: true,
    about: {
      comp: `Флис 100%`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1099,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `LUCIDREAM`,
      id: 1,
    },
    pictures: [`/img/products/lucidream/lucid-fc-mmx-1.jpg`, `/img/products/lucidream/lucid-fc-mmx-2.jpg`, `/img/products/lucidream/lucid-fc-mmx-3.jpg`],
  },
  {
    name: `lucid fc LOGO`,
    description: `Классичекое худи с регулируемым капюшоном на шнурке и длинными рукавами.`,
    alias: `lucid-fc-logo`,
    id: 2,
    category: {
      label: `Худи`,
      alias: `hoodie`,
    },
    type: `Худи`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% французский махровый хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1299,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `LUCIDREAM`,
      id: 1,
    },
    pictures: [`/img/products/lucidream/lucid-fc-logo-1.jpg`, `/img/products/lucidream/lucid-fc-logo-2.jpg`],
  },
  {
    name: `Arch LS TEE`,
    description: `Свитер с круглым вырезом и длинными рукавами`,
    alias: `arch-ls-tee`,
    id: 3,
    category: {
      label: `Свитшоты`,
      alias: `longsleeves`,
    },
    type: `Свитшот`,
    color: `white`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 999,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `LUCIDREAM`,
      id: 1,
    },
    pictures: [`/img/products/lucidream/arch-ls-tee-1.jpg`, `/img/products/lucidream/arch-ls-tee-2.jpg`],
  },
  {
    name: `LUCI with Pocket`,
    description: `Свитер с круглым вырезом, длинными рукавами и карманом`,
    alias: `luci-with-pocket`,
    id: 4,
    category: {
      label: `Свитшоты`,
      alias: `longsleeves`,
    },
    type: `Свитшот`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 999,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `LUCIDREAM`,
      id: 1,
    },
    pictures: [`/img/products/lucidream/luci-with-pocket-1.jpg`, `/img/products/lucidream/luci-with-pocket-2.jpg`, `/img/products/lucidream/luci-with-pocket-3.jpg`, `/img/products/lucidream/luci-with-pocket-4.jpg`, `/img/products/lucidream/luci-with-pocket-5.jpg`],
  },
  {
    name: `BIG BOY JEANS`,
    description: `Джинсы облегающего кроя с пятью карманами`,
    alias: `big-boy-jeans`,
    id: 5,
    category: {
      label: `Штаны`,
      alias: `pants`,
    },
    type: `Джинсы`,
    color: `blue`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1699,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/big-boy-jeans-1.jpg`, `/img/products/polarskate/big-boy-jeans-2.jpg`, `/img/products/polarskate/big-boy-jeans-3.jpg`],
  },
  {
    name: `SCRIPT JEANS`,
    description: `Джинсы облегающего кроя с пятью карманами`,
    alias: `script-jeans`,
    id: 6,
    category: {
      label: `Штаны`,
      alias: `pants`,
    },
    type: `Джинсы`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1699,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/script-jeans-1.jpg`, `/img/products/polarskate/script-jeans-2.jpg`, `/img/products/polarskate/script-jeans-3.jpg`],
  },
  {
    name: `HAPPY SAD SOX`,
    description: `Вязаные носки с улыбчастой и грустной гримасой по бокам и ребристой отделкой.`,
    alias: `happy-sad-sox`,
    id: 7,
    category: {
      label: `Аксессуары`,
      alias: `accessories`,
    },
    type: `Носки`,
    color: `white`,
    isAvailable: true,
    about: {
      comp: `85% хлопок, 10% полиэстер, 5% спандекс`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 250,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      women: {
        stock: 3,
        label: `35-40`,
      },
      men: {
        stock: 2,
        label: `41-45`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/happy-sad-sox-1.jpg`],
  },
  {
    name: `STRIPPED SOX`,
    description: `Вязаные носки с контрастными полосами по бокам и ребристой отделкой.`,
    alias: `stripped-sox`,
    id: 8,
    category: {
      label: `Аксессуары`,
      alias: `accessories`,
    },
    type: `Носки`,
    color: `white`,
    isAvailable: true,
    about: {
      comp: `85% хлопок, 10% полиэстер, 5% спандекс`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 250,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      women: {
        stock: 3,
        label: `35-40`,
      },
      men: {
        stock: 2,
        label: `41-45`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/stripped-sox-1.jpg`, `/img/products/polarskate/stripped-sox-2.jpg`],
  },
  {
    name: `POLAR TEE`,
    description: `Футболка оверсайз. Круглый вырез, контрастные принты впереди и сзади.`,
    alias: `polar-tee`,
    id: 9,
    category: {
      label: `Футболки`,
      alias: `shirts`,
    },
    type: `Футболка`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 699,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/polar-tee-1.jpg`, `/img/products/polarskate/polar-tee-2.jpg`, `/img/products/polarskate/polar-tee-3.jpg`],
  },
  {
    name: `STROKE SCARF`,
    description: `Мягкий шарф с необработанными кромками.`,
    alias: `stroke-skarf`,
    id: 10,
    category: {
      label: `Аксессуары`,
      alias: `accessories`,
    },
    type: `Шарф`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `70% акрил, 30% шерсть`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 999,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      onesize: {
        stock: 2,
        label: `Универсальный`,
      },
    },
    collection: {
      name: `polaR Skate`,
      id: 2,
    },
    pictures: [`/img/products/polarskate/stroke-skarf-1.jpg`, `/img/products/polarskate/stroke-skarf-2.jpg`, `/img/products/polarskate/stroke-skarf-3.jpg`],
  },
  {
    name: `riding shoe`,
    description: `Вышитые люверсы на подмышках для вентиляции, поп-логотип напечатанный на задней части шеи, белый вышитый логотип с надписью на левой стороне`,
    alias: `riding-shoe`,
    id: 11,
    category: {
      label: `Свитшоты`,
      alias: `longsleeves`,
    },
    type: `Свитшот`,
    color: `grey`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1299,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `pop trading`,
      id: 3,
    },
    pictures: [`/img/products/poptrading/riding-shoe-1.jpg`, `/img/products/poptrading/riding-shoe-2.jpg`],
  },
  {
    name: `van Here`,
    description: `Ван Гог не ушел и остался на логотипе этого худи. Свободная толстовка с круглым вырезом и длинными рукавами.`,
    alias: `van-here`,
    id: 12,
    category: {
      label: `Худи`,
      alias: `hoodie`,
    },
    type: `Худи`,
    color: `grey`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1299,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `pop trading`,
      id: 3,
    },
    pictures: [`/img/products/poptrading/van-here-1.jpg`, `/img/products/poptrading/van-here-2.jpg`, `/img/products/poptrading/van-here-3.jpg`],
  },
  {
    name: `pop's in charge`,
    description: `Свободная футболка с круглым вырезом, короткими рукавами и контрастным принтом на груди.`,
    alias: `pops-in-charge`,
    id: 13,
    category: {
      label: `Футболки`,
      alias: `shirts`,
    },
    type: `Футболка`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 699,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `pop trading`,
      id: 3,
    },
    pictures: [`/img/products/poptrading/pops-in-charge-1.jpg`, `/img/products/poptrading/pops-in-charge-2.jpg`],
  },
  {
    name: `underachievers`,
    description: `Свободная футболка с круглым вырезом, короткими рукавами и контрастным принтом на груди.`,
    alias: `underachievers`,
    id: 14,
    category: {
      label: `Футболки`,
      alias: `shirts`,
    },
    type: `Футболка`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 699,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `pop trading`,
      id: 3,
    },
    pictures: [`/img/products/poptrading/underachievers-1.jpg`, `/img/products/poptrading/underachievers-2.jpg`],
  },
  {
    name: `Roswell`,
    description: `Черная шапка в резинку. Черно-белая нашивка с вышитым логотипом по закругленным полям.`,
    alias: `roswell`,
    id: 15,
    category: {
      label: `Аксессуары`,
      alias: `accessories`,
    },
    type: `Шапка`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `100% акрил`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 799,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      onesize: {
        stock: 0,
        label: `Универсальный`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/roswell-1.jpg`, `/img/products/dropdead/roswell-2.jpg`],
  },
  {
    name: `DANCER`,
    description: `Свитшот из хлопкового флиса серого цвета с длинными рукавами. Печатная графика белого цвета спереди. Воротник, манжеты и подол с круглым вырезом трикотажной резинкой. Тональная строчка.`,
    alias: `dancer`,
    id: 16,
    category: {
      label: `Свитшоты`,
      alias: `longsleeves`,
    },
    type: `Свитшот`,
    color: `grey`,
    isAvailable: true,
    about: {
      comp: `80% хлопок, 20% полиэстер`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 799,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/dancer-1.jpg`, `/img/products/dropdead/dancer-2.jpg`],
  },
  {
    name: `CASTLE`,
    description: `Худи черного цвета с длинными рукавами и открытыми необработанными краями на плечах. Мягкий флис, свободный крой и свободные плечи. Он отмечен доисторическим символом совершенно другой галактики, начертанным на метеоре.`,
    alias: `castle`,
    id: 17,
    category: {
      label: `Худи`,
      alias: `hoodie`,
    },
    type: `Худи`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `70% хлопок, 30% полиэстер`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1599,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/castle-1.jpg`, `/img/products/dropdead/castle-2.jpg`],
  },
  {
    name: `SUMMONER`,
    description: `Футболка из хлопкового джерси белого цвета с короткими рукавами. Воротник с круглым вырезом в резинку. Печатная графика черного цвета спереди и сзади.`,
    alias: `summoner`,
    id: 18,
    category: {
      label: `Футболки`,
      alias: `shirts`,
    },
    type: `Футболка`,
    color: `white`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1599,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/summoner-1.jpg`, `/img/products/dropdead/summoner-2.jpg`, `/img/products/dropdead/summoner-3.jpg`],
  },
  {
    name: `KIRIYAMA`,
    description: `Черные спортивные штаны свободного кроя с красным принтом в виде буффов и брызгами крови. Талия и манжеты на резинке. Модель с двумя карманами на молнии. Кулиска на талии с тиснеными фирменными нашивками черного цвета. Тональная строчка.`,
    alias: `kiriyama`,
    id: 19,
    category: {
      label: `Штаны`,
      alias: `pants`,
    },
    type: `Штаны`,
    color: `black`,
    isAvailable: true,
    about: {
      comp: `70% вискоза, 30% полиэстер`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: true,
      value: 1199,
      prevValue: 1499,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/kiriyama-1.jpg`, `/img/products/dropdead/kiriyama-2.jpg`],
  },
  {
    name: `DEATH VALLEY`,
    description: `Толстовка из хлопкового флиса с длинными рукавами и v-образным вырезом черного цвета. Печатная графика белого цвета спереди. Промыть кислотой. Воротник с V-образным вырезом в рубчик. Тональная строчка.`,
    alias: `death-valley`,
    id: 20,
    category: {
      label: `Худи`,
      alias: `hoodie`,
    },
    type: `Худи`,
    color: `grey`,
    isAvailable: true,
    about: {
      comp: `100% хлопок`,
      wash: `Можно стирать в машинке при 30 градусах`,
    },
    price: {
      isOnSale: false,
      value: 1599,
      prevValue: 0,
      currency: `грн`,
    },
    sizes: {
      s: {
        stock: 6,
        label: `Small`,
      },
      m: {
        stock: 4,
        label: `Medium`,
      },
      l: {
        stock: 3,
        label: `Large`,
      },
      xl: {
        stock: 3,
        label: `X-Large`,
      },
      xxl: {
        stock: 3,
        label: `XX-Large`,
      },
    },
    collection: {
      name: `DROP DEAD`,
      id: 4,
    },
    pictures: [`/img/products/dropdead/death-valley-1.jpg`, `/img/products/dropdead/death-valley-2.jpg`, `/img/products/dropdead/death-valley-3.jpg`, `/img/products/dropdead/death-valley-4.jpg`],
  },
];

module.exports = products;
