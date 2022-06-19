$(document).ready(function() {

    'use strict';

    /*-----------------------------------------------------------------
      Dark mode toggler
    -------------------------------------------------------------------*/

    const togglers = document.getElementsByClassName("toggle-dark-mode");
    [].forEach.call(togglers, btn => btn.addEventListener("click", function() {
        darkTheme.disabled = !darkTheme.disabled;
        localStorage.setItem("theme", darkTheme.disabled ? 'light' : 'dark');
    }));
    
    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
            .on('sticky_kit:bottom', function(e) {
                $(this).parent().css('position', 'static');
            })
            .on('sticky_kit:unbottom', function(e) {
                $(this).parent().css('position', 'relative');
            });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function() {
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));

    /*-----------------------------------------------------------------
      Tooltip
    -------------------------------------------------------------------*/

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });


    /*-----------------------------------------------------------------
      Switch categories & Filter mobile
    -------------------------------------------------------------------*/

    $('.select').on('click', '.placeholder', function() {
        var parent = $(this).closest('.select');
        if (!parent.hasClass('is-open')) {
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        } else {
            parent.removeClass('is-open');
        }
    }).on('click', 'ul>li', function() {
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text($(this).text());
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));

        $('.filter__item').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');

        $('.js-filter-container').isotope({
            filter: selector
        });
        return false;
    });


    /*-----------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------*/

    // Portfolio
    var $portfolioMasonry = $('.js-masonry').isotope({
        itemSelector: '.gallery-grid__item',
        layoutMode: 'fitRows',
        percentPosition: true,
        transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },
        masonry: {
            columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });

    $portfolioMasonry.imagesLoaded().progress(function() {
        $portfolioMasonry.isotope({
            columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
            layoutMode: 'fitRows',
            fitRows: {
                gutter: '.gutter-sizer'
            }
        });
    });

    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/

    $('textarea').niceScroll({
        horizrailenabled: false
    });


    /*-----------------------------------------------------------------
      mediumZoom
    -------------------------------------------------------------------*/

    mediumZoom('[data-zoom]', {
        margin: 30
    });


    /*-----------------------------------------------------------------
      Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();


    /*-----------------------------------------------------------------
      Polyfill object-fit
    -------------------------------------------------------------------*/

    var $someImages = $('img.cover');
    objectFitImages($someImages);

});