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
  