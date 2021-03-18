$(document).ready(() => {
    initHomeSlider();
    initGallerySlider();
    mobileNavInit();
})

function initHomeSlider() {
    $("#slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true
    });
}

function initGallerySlider() {
    $("#gallery-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
        }
    });
}

function mobileNavInit() {
    var headerElem = $('.header');
    $('.mobile-nav-burger').click(function () {
        headerElem.addClass('show');
    });

    $('.mobile-nav-close').click(function () {
        headerElem.removeClass('show');
    });
}