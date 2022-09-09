(function ($) {
  $('.slider').slick({
    centerMode: false,
    slidesToShow: 3,
    arrows: true,
    padding: 0,
    lop: false,
    centerPadding: '60px',
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-left.png' alt='left'></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-right.png' alt='right'></button>",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

})(jQuery)


function rimg() {
  var w = window.innerWidth;
  var bp = 768;
  var flg_sp = false;
  if (w < bp) {
      $('img').each(function() {
          if ($(this).hasClass('rimg')) {
              $(this).attr('src', $(this).attr('src').replace('_pc', '_sp'));
          }

      });
  } else if (w >= bp) {
      $('img').each(function() {
          if ($(this).hasClass('rimg')) {
              $(this).attr('src', $(this).attr('src').replace('_sp', '_pc'));
          }
      });
  }
}

rimg();
$(window).resize(function() {
  rimg();
});


$(function () {
  //$('a[href^="#"]').click(function () {
  $('c-pagetop').click(function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({
      scrollTop: position
    }, speed, 'easeInOutCubic');
    return false;
  });
  var $pagetop = $('.c-pagetop');
  $(window).scroll(function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      if ($(this).scrollTop() > 100) {
        $pagetop.fadeIn();
      } else {
        $pagetop.fadeOut();
      }
    } else {
      $pagetop.fadeOut();
    }
  });
});
