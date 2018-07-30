(function () {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }
    /* $(document).ready(function () {
         //Set the carousel options
         $('#quote-carousel').carousel({
             pause: true,
             interval: 8000
         });
     });*/
    $(document).ready(function () {
        $('.icon').click(function () {
            $('.icon').toggleClass('active');
        })
    });
    $(document).ready(function () {
        $('.icon').click(function () {
            $('.menu ul').toggleClass('open');
        })
    });

    $(document).ready(function () {
        $('.slick-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            autoplaySpeed:2000,

        });
    });
}());
// When the DOM is ready, run this function
