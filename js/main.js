$(function() {
    
    "use strict";
    
    //===== Prealoder
$('img').attr('loading','lazy');
$('form').attr('action', 'pochta_newssite_forma.php');
    
// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$("#navbar").removeClass("sticky");
		    document.getElementById("logo").style.display = "block";
            document.getElementById("tel").style.display = "none";
	} else {
		$("#navbar").addClass("sticky");
		    document.getElementById("logo").style.display = "none";
            document.getElementById("tel").style.display = "block";
	}
});

    /*setTimeout(function () {
	let a = window.location.href;
	let b = 'https://animatorbest.ru/zakazhi-onlajn-pozdravlenie-ot-animatorov.html';
	let c = 'https://animatorbest.ru/message-sent.html';
	let d = 'https://animatorbest.ru/vypusknoj-onlajn.html';
           if (a != b && a != c && a != d) {
            $('#myModalCenter').modal('show');
           }else{
            $('#myModalCenter').modal('hide');
           }
        }, 500);*/


    //$('#myModalCenter').modal('show');
    //===== Serach Box
    
    $("#search").on('click', function(){
        $(".search-box").slideToggle();
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    
   /* var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> 123</button>';
        });
        
        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });
        
    }*/
    
    
    //===== Slick Slider
    
    $('#slider').slick({
        arrows:false,
        dots:true,
        fade:true,
        speed: 600,
    });
    
    
    //===== Images Loaded
    
    $('#container').imagesLoaded( function() {
        // images have loaded
        
        //===== Isotope

        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
            }
        });

        // filter items on button click
        $(".case-menu ul").on( 'click', 'li', function() {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });

        //for menu active class
        $(".case-menu ul li").on('click', function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            //event.preventDefault();
var url_keyword=window.location.pathname.split('/')[1]
$('a[href*="/'+url_keyword+'/"]').addClass('active')
        });
    
    });
    
    
    //===== Counter Up
    
   /* $('.counter').counterUp({
        delay: 10,
        time: 2000
    });*/
    
    
    //===== slick Team Slied
    
    $('.team-slied').slick({
        dots: false,
        arrows: true,
 	     nextArrow:'<p class="tn-atom"><i class="fa fa-arrow-right" aria-hidden="true"></i></p>',
         prevArrow:'<p class="tn-atom2"><i class="fa fa-arrow-left" aria-hidden="true"></i></p>',
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
   /* var flkty = new Flickity('.carousel');

flkty.on( 'pointerUp', function() {
  console.log('pointerUp');
});*/
$(document).ready(function() {
	$('.carousel').flickity({
		imagesLoaded: true,
		contain: true,
		wrapAround: true,
		cellAlign: 'center',
		friction: 0.2,
		selectedAttraction: 0.01,
		pageDots: true,
		lazyLoad: 1
	});
});

$(document).ready(function() {
	$('.carousel2').flickity({
		imagesLoaded: true,
		contain: true,
		wrapAround: true,
		cellAlign: 'center',
		friction: 0.2,
		selectedAttraction: 0.01,
		pageDots: false,
		lazyLoad: 1
	});
});
    //===== slick Testimonial Slied
    
    $('.testimonial-slied').slick({
        dots: true,
        arrows: false,
        infinite: true,
        vertical: true,
//        autoplay: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
            },
            {
              breakpoint: 600,
            },
            {
              breakpoint: 480,
            }
        ]
    });

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
prevArrow: '<button class="clnService-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="clnService-next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//================================== Слайдер с двумя фото

 /* $('.slider-for').slick({
  slidesToShow: 1,
        infinite: true,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
        responsive: [
            {
              breakpoint: 1024,
            },
            {
              breakpoint: 600,
            },
            {
              breakpoint: 480,
            }
        ]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
        infinite: true,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1024,
            },
            {
              breakpoint: 600,
            },
            {
              breakpoint: 480,
            }
        ]
});*/

    $('.slider-for').slick({
        dots: false,
        arrows: true,
        infinite: true,

prevArrow: '<button class="clnService-prev"><img src="https://animatorbest.ru/wp-content/themes/animator/images/strelka-right.svg"></button>',
    nextArrow: '<button class="clnService-next"><img src="https://animatorbest.ru/wp-content/themes/animator/images/strelka-right.svg"></button>',
        autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
	
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    $('img').each(function(){ 
        $(this).removeAttr('height');
    });
    //===== 
    //===== 
    
   $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
});

$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModalVideo').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
})
  
  
// stop playing the youtube video when I close the modal
$('#myModalVideo').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
  
// document ready  
});


/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));

