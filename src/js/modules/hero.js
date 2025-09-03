import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const heroSwiper = new Swiper('#heroSwiper', {
    modules: swiperModules,
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,

    navigation: {
        nextEl: '.hero__next',
        prevEl: '.hero__prev',
    },

    
})
