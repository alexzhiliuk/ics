import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const reviewsSwiper = new Swiper('#reviewsSwiper', {
    modules: swiperModules,
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,

    navigation: {
        nextEl: '.reviews-nav__next',
        prevEl: '.reviews-nav__prev',
    },

    
})
