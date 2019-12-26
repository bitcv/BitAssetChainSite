// On document ready functions
$(document).ready(function() {

    // Bootstrap - Submenu event for small resolutions
    $('.dropdown-menu .dropdown-submenu [data-toggle="dropdown"]').on('click', function(e) {

            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $subMenu.parent().toggleClass('show');

            $(this).parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;

    });

    // Fix the closing problem when clicking inside dopdown menu
    $('.navbar .dropdown-menu').on('click', function(event) {
        event.stopPropagation();
    });

    // One page nav
    $('.navbar-onepage .nav-link').on('click', function(e) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        e.preventDefault();
    });

    // Hamburger
    if ($('.hamburger-js')[0]) {
        $(".hamburger-js").each(function() {
            var $this = $(this);

            $this.on("click", function(e) {
                $this.toggleClass("is-active");
                // Do something else, like open/close menu
            });
        });

    }

    // Bootstrap Carousels
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover'
    });

    // Smooth scroll
    $('.scroll-me, [data-scroll-to]').on('click', function(event) {
        var hash = $(this).data('scroll-to');
        var offset = $(this).data('scroll-to-offset') ? $(this).data('scroll-to-offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });

    // To top
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.back-to-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible'): $back_to_top.removeClass('back-to-top-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('back-to-top-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body, html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // Tooltip & Popover
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });

    $('[data-toggle="popover"]').popover({
        html: true
    });
}); // END document ready
