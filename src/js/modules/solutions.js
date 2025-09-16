import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const solutionsSwiper = new Swiper('.solution__slider .swiper', {
    modules: swiperModules,
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,

    navigation: {
        nextEl: '.solution__next',
        prevEl: '.solution__prev',
    },

    
})

$(".solution__slider .swiper").each(function () { 
    $(this).magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    })
})
