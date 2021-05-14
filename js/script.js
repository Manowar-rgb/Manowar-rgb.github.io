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
                breakpoint: 425,
                settings: {slidesToShow: 1, arrows: false},

            },{
                breakpoint: 991,
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

    //slider
    const slides = document.querySelectorAll('.offer__slide'),
          next = document.querySelector('.offer__slider-next'),
          prev = document.querySelector('.offer__slider-prev');
    let slideIndex = 1;

    
    function showSlides(n){
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < slides.length){
            slideIndex = 2;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
    showSlides(slideIndex);
    

});