// aos 
AOS.init();
// owl carousel
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        autoWidth: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 3
            },
            1200: {
                items: 5
            },
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
})
// nav on
window.addEventListener("scroll",function(){
    var header_nav = document.querySelector('nav');
    header_nav.classList.toggle('sticky',window.scrollY> 0);
})
