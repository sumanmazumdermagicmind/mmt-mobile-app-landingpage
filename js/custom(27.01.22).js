$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 114) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("scrollHeader");
    }else{
        $("header").removeClass("scrollHeader");
    }
});
$(document).ready(function () {
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
});
var revapi;

		    jQuery(document).ready(function() {

		         revapi = jQuery('.tp-banner').revolution(
		        {
		          delay:3000,
		          startwidth:1920,
		          startheight:1050,
		          hideThumbs:10,
		          fullWidth:"on",
		          forceFullWidth:"on"
		        });

		    }); //ready
// $(document).ready(function () {
    $("#services").owlCarousel({
        navigation : true,
        nav: false,
        dots: false,
        center: false,
        loop: true,
        margin: 15,
        autoplay: 900,
        autoPlaySpeed: 900,
        autoPlayTimeout: 900,
        autoplayHoverPause: false,

        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:2},
            767 : {items:2},
            576 : {items:2},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }
      });

    $("#contact").owlCarousel({
        navigation : true,
        nav: false,
        dots: true,
        center: false,
        loop: true,
        margin: 15,
        autoplay: 900,
        autoPlaySpeed: 900,
        autoPlayTimeout: 900,
        autoplayHoverPause: false,

        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:1},
            0 : {items:1},                
            991 : {items:1},
            767 : {items:1},
            576 : {items:1},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }
      });

$(document).ready(function () {
    $("#locations").owlCarousel({
        items: 4,
        loop: true,
        dots:false,
        margin: 0,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        margin: 30,
        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:3},
            767 : {items:3},
            576 : {items:2},
            480 : {items:2},
            360 : {items:1},
            320 : {items:1}
        }
      });

    $("#principle").owlCarousel({
        items: 4,
        loop: true,
        dots:false,
        margin: 0,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        margin: 30,
        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:3},
            767 : {items:3},
            576 : {items:2},
            480 : {items:2},
            360 : {items:1},
            320 : {items:1}
        }
      });

});
// });
// $(document).ready(function () {
		

// });
		
$(document).ready(function(){
    $(".thump li a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        console.log(target);
        $(".thump li a").removeClass("active");
        $(this).addClass("active");
        $(".tes-decp div").hide();
        $(target).fadeIn();
    })
});