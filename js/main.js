$(document).ready(function () {
  'use strict';

  const window_height = window.innerHeight;
  $('.fullscreen').css('height', window_height);

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

  // Mobile nav menu
  if ($('#nav-menu-container').length) {
    let $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav',
    });
    $mobile_nav.find('> ul').attr({
      class: '',
      id: '',
    });
    $('body').append($mobile_nav);
    $('body').prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>',
    );
    $('body').append('<div id="mobile-body-overlay"></div>');
    $('#mobile-nav')
      .find('.menu-has-children')
      .prepend('<i class="fas fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function () {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass('fa-chevron-down fa-chevron-up');
    });

    $(document).on('click', '#mobile-nav-toggle', function () {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-window-close fa-bars');
      $('#mobile-body-overlay').toggle();
    });

    $(document).click(function (e) {
      let container = $('#mobile-nav, #mobile-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-window-close fa-bars');
          $('#mobile-body-overlay').fadeOut();
        }
      }
    });
  } else if ($('#mobile-nav, #mobile-nav-toggle').length) {
    $('#mobile-nav, $mobile-nav-toggle').hide();
  }

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

  // Smooth scroll for nav and link items
  $('.nav-menu a, #mobile-nav a').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      if (target.length) {
        let top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();
        }

        $('html, body').animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          'easeInOutExpo',
        );

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-window-close fa-bars');
          $('#mobile-body-overlay').fadeOut();
        }
        return false;
      }
    }
  });

  $(document).ready(function () {
    $('html, body').hide();

    if (window.location.hash) {
      setTimeout(function () {
        $('html, body').scrollTop(0).show();

        $('html, body').animate(
          {
            scrollTop: $(window.location.hash).offset().top,
          },
          1000,
        );
      }, 0);
    } else {
      $('html, body').show();
    }
  });
});
