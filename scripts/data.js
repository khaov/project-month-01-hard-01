// Surfaces items

const surfacesItems = [
  {
    title: 'Шоссе',
    description: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    image: './images/surfaces/surface-highway-image.jpg',
    icon: './images/surfaces/surface-highway-icon.svg'
  },
  {
    title: 'Грэвел',
    description: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    image: './images/surfaces/surface-gravel-image.jpg',
    icon: './images/surfaces/surface-gravel-icon.svg'
  },
  {
    title: 'ТТ',
    description: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    image: './images/surfaces/surface-tt-image.jpg',
    icon: './images/surfaces/surface-tt-icon.svg'
  }
];

// Bicycles items

const bicyclesItems = [
  {
    surface: 'Шоссе',
    active: 'true',
    data: [
      {
        link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
        image: './images/bicycles/bicycle-cervelo-caledonia-5.png',
        model: 'Cervelo Caledonia 5'
      },
      {
        link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
        image: './images/bicycles/bicycle-cannondale-systemsix-himod.png',
        model: 'Cannondale Systemsix Himod'
      },
      {
        link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
        image: './images/bicycles/bicycle-trek-domane-sl-7.png',
        model: 'Trek Domane SL-7'
      }
    ]
  },
  {
    surface: 'Грэвел',
    active: 'false',
    data: [
      {
        link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
        image: './images/bicycles/bicycle-cervelo-aspero-grx-810.png',
        model: 'Cervelo Aspero GRX 810'
      },
      {
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
        image: './images/bicycles/bicycle-specialized-s-works-diverge.png',
        model: 'Specialized S-Works Diverge'
      },
      {
        link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
        image: './images/bicycles/bicycle-cannondale-topstone-lefty-3.png',
        model: 'Cannondale Topstone Lefty 3'
      }
    ]
  },
  {
    surface: 'TT',
    active: 'false',
    data: [
      {
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
        image: './images/bicycles/bicycle-specialized-s-works-shiv.png',
        model: 'Specialized S-Works Shiv'
      },
      {
        image: './images/bicycles/bicycle-bmc-timemachine-01-one.png',
        model: 'BMC Timemachine 01 ONE',
        link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
      },
      {
        image: './images/bicycles/bicycle-cervelo-p-series.png',
        model: 'Cervelo P-Series',
        link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
      }
    ]
  }
];
