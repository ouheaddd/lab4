$(function(){

    $('.updates-tabs__item').on('click', function (e) {
        e.preventDefault();

        $('.updates-tabs__item').removeClass('updates-tabs__item--active');
        $(this).addClass('updates-tabs__item--active');

        $('.updates-tabs__content').removeClass('updates-tabs__content--active');
        $($(this).attr('href')).addClass('updates-tabs__content--active');
    });

    // $('.slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    //   });


});