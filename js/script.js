$(function(){
    'use strict';
    
    // back to top

    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });
     // ourProject slider start
     $('.recnt_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

     // Blog slider start
     $('.blog_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    // test slider start
    $('.main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
     // Gallery js here
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: 'red',
        arrowsColor: 'green',
        closeColor: 'red',
        closeBackground: 'gray',
    });

    // Counter up js here
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });








})



