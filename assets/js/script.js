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
    if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
        var navContent = document.querySelector(".main-menu__list").outerHTML;
        var mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
    }

    if ($(".mobile-nav__container .main-menu__list").length) {
        var dropdownAnchor = $(".mobile-nav__container .main-menu__list .dropdown > a");
        dropdownAnchor.each(function () {
            var self = $(this);
            var toggleBtn = document.createElement("BUTTON");
            toggleBtn.setAttribute("aria-label", "dropdown toggler");
            toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
            self.append(function () {
                return toggleBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                var button = $(this);
                button.toggleClass("expanded");
                button.parent().toggleClass("expanded");
                button.parent().parent().children("ul").slideToggle();
            });
        });
    }

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

    // jQuery 3 removed the "ready" event binding via .on('ready').
    // Run after full page load so the preloader always closes.
    $(window).on('load', function () {
        handlePreloader();
    });

})(jQuery); 
