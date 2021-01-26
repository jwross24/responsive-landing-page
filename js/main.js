$(document).ready(function () {
  'use strict';

  const window_height = window.innerHeight,
    header_height = $('.default-header').height(),
    fitScreen = window_height - header_height;

  $('.fullscreen').css('height', window_height);
  $('.fitscreen').css('height', fitScreen);

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
});
