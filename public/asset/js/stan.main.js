/**
 * @Autor - Castillo Flores Steven Antony
 * @Año - 2018
 * @Ubicacion - Peru.Lambayeque
 */

  //Preloader
  var preloader = $('#load');

  $(window).on('load', function () {

    preloader.css({transition: "0.2s",visibility: "hidden"});

  });

 /**
  * Terminar Proyecto antes de Año Nuevo
  */

$(document).ready(function () {


  /**
   * Animaciones iniciales
   */
  var bannerImg = function () {
    var selectClass = $('.baner-area .img-banner');
    selectClass.addClass('img-banner-animation');
  }

  bannerImg();

  /**
   * End Animaciones
   */

  var user = $('.icon-user');

  // var cls = () {

  // }

  function init() {
    user.css({animation :'initUser 0.5s linear'});
  }

  init();

  // ----- Header Scroll ----- //

  $(window).scroll(function () {

    if ( $(this).scrollTop() > 60 ) {
      $('header').addClass('header-scroll');
    }else{
      $('header').removeClass('header-scroll');
    }

  });


});