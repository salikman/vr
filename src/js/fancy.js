import { Carousel } from 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/carousel/carousel.esm.min.js';
import { Thumbs } from 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/carousel/carousel.thumbs.esm.min.js';
import { Fancybox } from 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/fancybox/fancybox.esm.min.js';

new Carousel(
  document.getElementById('productCarousel'),
  {
    infinite: false,
    Dots: false,
    Thumbs: {
      type: 'classic',
      Carousel: {
        slidesPerPage: 1,
        Navigation: true,
        center: true,
        fill: true,
        dragFree: true,
      },
    },
  },
  { Thumbs }
);

Fancybox.bind('[data-fancybox="gallery"]', {
  idle: false,
  compact: false,
  dragToClose: false,

  animated: false,
  showClass: 'f-fadeSlowIn',
  hideClass: false,

  Carousel: {
    infinite: false,
  },

  Images: {
    zoom: false,
    Panzoom: {
      maxScale: 1.5,
    },
  },

  Toolbar: {
    absolute: true,
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },

  Thumbs: {
    type: 'classic',
    Carousel: {
      axis: 'x',

      slidesPerPage: 1,
      Navigation: true,
      center: true,
      fill: true,
      dragFree: true,

      // breakpoints: {
      //   '(min-width: 640px)': {
      //     axis: 'y',
      //   },
      // },
    },
  },
});