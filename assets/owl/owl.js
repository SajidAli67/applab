$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      
      autoWidth:true,
      loop:true,
          item:4,
          autoplay:true,
          autoplayHoverPause:true,
          nav:true,
          responsive:{
                  0:{
                      items:1,
                      
                  },
                  600:{
                      items:1,
                     
                  },
                  1000:{
                      items:3,
                      
                      loop:true
                  }
              }
     

    });


});
