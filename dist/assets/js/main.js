(function ($) {
    ({
      init: function () {
        var self = this
        $(function () {
          self.setUaClass();
          self.slider();
          self.wowloader();
        })
      },
      setUaClass: function() {
        var self = this
        var ua = navigator.userAgent
        var body = $('body')

        if (typeof window.orientation !== 'undefined') {
          $.isMobile = true
          body.addClass('mobile')
        } else {
          body.addClass('pc');
        }

        if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0) {
          body.addClass('ios')
        } else if (ua.indexOf('Android') > 0) {
          body.addClass('android')
        }
      },
      wowloader: function(){
        wow = new WOW();
        wow.init();
      },
      slider: function(){
        if($.isMobile){
          $('.jc_slider').slick({
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            loop: false,
            arrows: true,
            dots: true,
         });
        }else{}
      }
    }.init())
  })(jQuery)


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
