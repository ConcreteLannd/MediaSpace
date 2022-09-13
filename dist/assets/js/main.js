(function ($) {
  $('.slider').slick({
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
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



var _headerAction = 0;
var _headerClose;

var _oldIE = navigator.userAgent.indexOf("MSIE 7") !== -1 || navigator.userAgent.indexOf("MSIE 8") !== -1
if (_checkRWD == undefined) var _checkRWD = function() {return false};
if (_globalNaviClose == undefined) var _globalNaviClose = function() {};	// for old version
if (_headerScrollTop == undefined) var _headerScrollTop = function() {};

if(_STextAdd == undefined) var _STextAdd = 0;



(function($){



// Set height of panels

var headerSetHeight = function(menu) {

	switch(menu) {

		case "SearchArea":
			$("#SearchArea").show();
			return $("#SearchSet").height() + 35;
			break;
		case "CountryRegionArea":
			$("#CountryRegionArea").show();
			if (_checkRWD(768)) {
				var h = 0 + $("#CountryRegion h2").height() + $("#CountryRegion .Global").height()
			} else {
				var h =  68
			}
			return h;
			break;
		case "SuperGlobalNaviProducts":
			$("#SuperGlobalNaviProducts").show();
			return $("#SuperGlobalNaviProducts .Inner").height() + (_checkRWD(768) ? 0 : 10);
			break;
		case "SuperGlobalNaviCompany":
			$("#SuperGlobalNaviCompany").show();
			return $("#SuperGlobalNaviCompany .Inner").height() + (_checkRWD(768) ? 0 : 10);
			break;
		case "UltraGlobalNavi":															// for new version
			$("#UltraGlobalNavi").show();													//
			return $("#GlobalNaviSP").height() + $("#SuperGlobalNaviProducts").height() + $("#SuperGlobalNaviCompany").height() + 30;	//
			break;																//

	}

}

var ultraGlobalNavi = function() {

	// Append to DOM

	if(!$("#SearchArea .BtnClose")[0]) {
		$("#Search").append(_SText);
		if(_STextAdd) $("#SearchSet").prepend(_STextAdd);
	}
	$("#CountryRegion").append(_CRText);
	$("#UltraGlobalNaviProducts").after(_SGNProductsText);
	$("#UltraGlobalNaviCompany").after(_SGNCompanyText);

	$("#HeaderArea .BtnOpen a").attr("href", "javascript:void(0);");



	// Bind click events : Open button

	$("#HeaderArea .BtnOpen a").bind("click", function() {

		if (_headerAction) return false;
		_headerAction = 1;

		var $this = $(this);

		if ($this.hasClass("Current")) {

			_headerClose();

		} else {

			$("#HeaderArea .BtnOpen .Current").removeClass("Current").parent().next().removeAttr("style");
			$("#GlobalNaviTopButtonSP .CurrentSP").removeClass("CurrentSP");	// for new version
			if ($this.parent().parent().attr("id") == "CountryRegion") {
				if (_checkRWD(768)) {
					$("#CountryRegionSet .Current").removeClass("Current");
				} else {
					if (!$("#CountryRegionSet .Current")[0]) $("#CountryRegion .Americas").addClass("Current");
				}
			}
			_globalNaviClose();							// for old version

			var h = headerSetHeight($this.parent().next().attr("id"));
			$this.addClass("Current").parent().next().height($("#HeaderArea").css("margin-bottom")).animate({height:h}, 300);
			$("#HeaderArea").animate({marginBottom:h}, 300, function() {
				_headerAction = 0;
			});

		}


	});


	// Bind click events : Close button

	_headerClose = function() {

		var $current = $("#HeaderArea .BtnOpen .Current");
		$current.removeClass("Current").parent().next().animate({height:0}, 300);
		$("#GlobalNaviTopButtonSP .CurrentSP").removeClass("CurrentSP");		// for new version

		$("#HeaderArea").animate({marginBottom:0}, 300, function() {
			$(this).removeAttr("style");
			$current.parent().next().removeAttr("style");
			_headerAction = 0;
		});

	}

	$("#HeaderArea .BtnClose a").bind("click", function() {

		if (_headerAction) return false;
		_headerAction = 1;
		_headerClose();

	});


	// Bind click events : Link to Global Network Page

	$("#CountryRegion .Global").bind("click", function() {
		if (_checkRWD(768)) location.href = $(this).find("a").attr("href");
	});






	// Image Icon

	if (!_oldIE && $(".ShowRWD")[0]) {

		$(".SuperGlobalNavi .NoIcon img").each(function() {

			var $img = $(this).clone();
			var src = $img.attr("src");
			$img.attr("src", src.replace("_hd.gif", "_white_hd.png"));
			$(this).parent().append($img);

		});

	}

}

$(document).ready(function() {
	var headerID = setInterval(function() {
		if(typeof _SText !== "undefined" && typeof _CRText !== "undefined" && typeof _SGNProductsText !== "undefined" && typeof _SGNCompanyText !== "undefined") {
			clearInterval(headerID);
			ultraGlobalNavi();
		}
	}, 50);
});

var _headerSP = 1;

$(window).resize(function() {

	if (!_oldIE && ($("#HeaderArea .BtnOpen .Current")[0] || $("#GlobalNaviTopButtonSP .CurrentSP")[0])) {

		if (_checkRWD(768)) {
			if (!_headerSP) {
				_headerSP = 1;
				$("#CountryRegionSet .Current").removeClass("Current");
				$("#GlobalNaviTopButtonSP .CurrentSP").removeClass("CurrentSP").addClass("Current");		// for new version
				$("#UltraGlobalNavi .BtnOpen .Current").parent().next().removeAttr("style");			//
			}
		} else {
			if (_headerSP) {
				_headerSP = 0;
				if (!$("#CountryRegionSet .Current")[0]) $("#CountryRegion .Americas").addClass("Current");
				if ($("#GlobalNaviTopButtonSP .Current")[0]) {							// for new version
					$("#GlobalNaviTopButtonSP .Current").removeClass("Current").addClass("CurrentSP");	//
					$("#HeaderArea").removeAttr("style");							//
					$("#UltraGlobalNavi").removeAttr("style");						//
				}												//
			}
		}

		var $current = $("#HeaderArea .BtnOpen .Current").parent().next();
		var h = headerSetHeight($current.attr("id"));
		$current.height(h);
		$("#HeaderArea").css({marginBottom:h});

	}

});



/* Base Settings
=========================================================================================== */

$("html[class!='JS']").addClass("JS");



})(jQuery);
