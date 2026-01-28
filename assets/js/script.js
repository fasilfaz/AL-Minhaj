(function ($) {
    "use strict";

    // Preloader
    function handlePreloader() {
        if ($('.loader-wrap').length) {
            $('.loader-wrap').delay(1000).fadeOut(500);
        }
    }

    if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function () {
            $('.loader-wrap').delay(200).fadeOut(500);
        });
    }

    // Header Sticky
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }
    });

    // Mobile Navigation
    if ($('.mobile-nav__toggler').length) {
        $('.mobile-nav__toggler').on('click', function (e) {
            e.preventDefault();
            $('.mobile-nav__wrapper').toggleClass('expanded');
            $('body').toggleClass('locked');
        });
    }

    // Scroll to Top
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
            return false;
        });
    }

    // Jarallax
    if ($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.3
        });
    }

    // Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    // Initialize when document is ready
    $(document).on('ready', function () {
        handlePreloader();
    });

})(jQuery); 