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
    })
}());
// When the DOM is ready, run this function
