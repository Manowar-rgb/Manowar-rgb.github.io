(function($) {

    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    
    })(jQuery);
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1200,
        responsive:[
            {
                breakpoint: 769,
                settings: {slidesToShow: 2, arrows: false},

            },
            {
                breakpoint: 376,
                settings: {slidesToShow: 1, arrows: false},

            },{
                breakpoint: 426,
                settings: {slidesToShow: 1, arrows: false},

            },{
                breakpoint: 992,
                settings: {slidesToShow: 3, arrows: false},

            },

        ]

    });
});



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});