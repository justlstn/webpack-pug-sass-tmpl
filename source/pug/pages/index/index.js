import './index.sass';
import 'bootstrap';

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';

jQuery( document ).ready(function() {
  const text = 'Push me';
  const satisfaction = `${text}, and then just touch me`;

  (() =>console.log(satisfaction))();
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});