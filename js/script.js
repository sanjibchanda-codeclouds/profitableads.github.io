/* preloader
.............................*/
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});


/* slider navbar
.............................*/
function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/* sticky navbar
.............................*/
window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


/* scroll to top script
.............................*/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});  

/*responsive slider*/
$('.autoplay').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [    
    {
      breakpoint: 992,
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


/*... owl-slider script
.........................*/
jQuery(document).ready(function($) {
  "use strict";
  $('#testimonials-list').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: false,
      dots: true,
      nav: true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          700: {
              items: 2
          },
          1170: {
              items: 3
          }
      }
  });
});

