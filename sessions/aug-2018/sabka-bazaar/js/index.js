import Carousel from './Carousel.js';
(function() { 
    document.addEventListener("DOMContentLoaded", init);
    
    function init() {
        const carouselList = document.querySelectorAll('.carousel'),
            carouselLen = carouselList.length;
        for( let i = 0; i < carouselLen; i++ ) {
            new Carousel( carouselList[i], {currentSlide: 3} );
        }
        const myCarousel = document.querySelector('.myCarousel');
        new Carousel(myCarousel,{
            slideClass:"slide",
            controlClass:"controls", 
            nextClass:"forward",
            prevClass:"back",
            paginationClass:"dots",
            paginationItemClass:"dot"
        })
    }
}());