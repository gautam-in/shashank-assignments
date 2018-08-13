class Carousel {
    constructor(el, options = {}) {
        this.el = el;
        this.slideClass = options.slideClass || "carousel__slide";
        this.controlClass = options.controlClass || "carousel__controls";
        this.nextClass = options.nextClass || "carousel__next";
        this.prevClass = options.prevClass || "carousel__prev";
        this.paginationClass = options.paginationClass || "carousel__pagination";
        this.paginationItemClass = options.paginationItemClass || "carousel__pagination__item";
        this.currentSlide = options.currentSlide || 1;
        this.activeSlideClass = options.activeSlideClass || 'active';

        this.cache = {};

        this.cache.slides = [...this.el.querySelectorAll(`.${this.slideClass}`)];
        this.slidesCount = this.cache.slides.length;

        this.appendControls();
        this.bindEvents();
        this.showSlide(this.currentSlide);
    }
    bindEvents() {
        this.cache.nextControl.addEventListener('click', () => { this.currentSlide < this.slidesCount && this.showSlide(this.currentSlide + 1); });
        this.cache.prevControl.addEventListener('click', () => { this.currentSlide > 1 && this.showSlide(this.currentSlide - 1); });
        this.cache.pagination.addEventListener('click', (event) => { event.target.classList.contains(this.paginationItemClass) && this.showSlide(event.target.dataset.slideNo); } );
    }
    appendControls() {
        const controlContainerElement = document.createElement('div'),
            prevControl = document.createElement('button'),
            nextControl = document.createElement('button'),
            pagination = document.createElement('div');
        
        controlContainerElement.classList.add(this.controlClass);
        prevControl.classList.add(this.prevClass);
        nextControl.classList.add(this.nextClass);
        pagination.classList.add(this.paginationClass);

        this.cache.prevControl = prevControl;
        this.cache.nextControl = nextControl;
        this.cache.pagination = pagination;

        this.generateAndAppendPaginationTo(pagination);

        controlContainerElement.append(prevControl);
        controlContainerElement.append(nextControl);
        controlContainerElement.append(pagination);
        

        this.el.append(controlContainerElement);
    }
    generateAndAppendPaginationTo(pagination) {
        this.cache.paginationElements = [];
        this.cache.slides.map( (slide, index) => {
            let paginationElement = document.createElement('button');
            paginationElement.classList.add(this.paginationItemClass);
            paginationElement.dataset.slideNo = index + 1;
            this.cache.paginationElements.push(paginationElement);
            pagination.append(paginationElement);
        } );
    }
    showSlide(slideNo) {
        const prevSlideNo = this.currentSlide;
        this.currentSlide = parseInt(slideNo);
        this.cache.slides.map( slide => {
            slide.style.transform = `translate3d( -${(slideNo - 1) * 100}%, 0, 0 )` ;
        } );
        this.updateClasses(prevSlideNo, this.currentSlide);
    }
    updateClasses(prevSlideNo, currentSlideNo) {
        this.cache.slides[prevSlideNo - 1].classList.remove(this.activeSlideClass);
        this.cache.slides[currentSlideNo - 1].classList.add(this.activeSlideClass);
        this.cache.paginationElements[prevSlideNo - 1].classList.remove(this.activeSlideClass);
        this.cache.paginationElements[currentSlideNo - 1].classList.add(this.activeSlideClass);
        if ( this.currentSlide === 1 ) {
            this.cache.prevControl.disabled = true;
        } else {
            this.cache.prevControl.disabled = false;
        }
        if ( this.currentSlide === this.slidesCount ) {
            this.cache.nextControl.disabled = true;
        } else {
            this.cache.nextControl.disabled = false;
        }

    }
}

export default Carousel;