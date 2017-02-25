$( document ).on('scroll', function(e) {
  var offset = 350;
  if ( $( document ).scrollTop() > 350 ) {
    $('.navbar-brand').removeClass('navbar-brand--hidden');
  } else {
    $('.navbar-brand').addClass('navbar-brand--hidden');
  }
})
