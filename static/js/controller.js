/*
  controller for the outdoor site
  zach dobbs
  2018
*/

// initialize the Vue app
var app = new Vue({
    el: '#app',
    data: {
      message: 'outside'
    }
});

// materialize helpers
$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  // set timer for carousel
  setInterval(function() {
    $('.carousel.carousel-slider').carousel('next');
  }, 4000);
});
