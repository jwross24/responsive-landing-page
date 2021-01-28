$(document).ready(function () {
  'use strict';

  const window_height = window.innerHeight,
    header_height = $('.default-header').height(),
    fitScreen = window_height - header_height;

  $('.fullscreen').css('height', window_height);
  $('.fitscreen').css('height', fitScreen);

  // Magnific Popup helpers
  $('.play-button').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: false,
    removalDelay: 150,
  });

  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // Use Superfish on the nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show',
    },
    speed: 300,
  });

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Tiny Slider for testimonial carousel
  let slider = tns({
    container: '.active-testimonial-carousel',
    items: 3,
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: 'true',
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
});
