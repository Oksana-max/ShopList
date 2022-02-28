const swiper = new Swiper('.mainslider', {
    navigation: {
        nextEl: '.mainslider__btn-next',
        prevEl: '.mainslider__btn-prev',
    },
    pagination: {
        el: '.mainslider__pagination',
        type: 'bullets',
        clickable: true,

    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    speed: 800,
});

const swiper1 = new Swiper('.product-slider', {

    navigation: {
        nextEl: '.products-page__btn-next',
        prevEl: '.products-page__btn-prev',
    },

    breakpoints: {
        380: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
    loop: true,

});
const swiper2 = new Swiper('.product-slider_2', {
    slidesPerView: 5,
    navigation: {
        nextEl: '.products-page__btn-next',
        prevEl: '.products-page__btn-prev',
    },
    breakpoints: {
        380: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
    loop: true,

});
const swiper3 = new Swiper('.product-slider_3', {
    slidesPerView: 5,
    navigation: {
        nextEl: '.products-page__btn-next',
        prevEl: '.products-page__btn-prev',
    },
    breakpoints: {
        380: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
    loop: true,

});
const swiper4 = new Swiper('.brands-page__slider', {
    navigation: {
        nextEl: '.brands-page__btn-next',
        prevEl: '.brands-page__btn-prev',
    },
    breakpoints: {
        380: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },

    loop: true,
});