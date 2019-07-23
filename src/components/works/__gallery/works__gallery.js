class ShowSlide {
    constructor(startIndex, element) {  
        this.element = element
        this.startIndex = startIndex;
        this.currentIndex = startIndex;
        this.slides = document.querySelectorAll('.slide-page');

        this.setActiveSlide();
        this.next();
        this.prev();
    }

    setActiveSlide() {
        this.slides.forEach((item, index) => {
            if(index === this.currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    next() {
        let nextBtn = this.element.querySelector('.next');
        nextBtn.addEventListener('click', () => {
            if(this.currentIndex === this.slides.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++
            }
            this.setActiveSlide();
        });
    }

    prev() {
        let prevBtn = this.element.querySelector('.prev');
        prevBtn.addEventListener('click', () => {
            if(this.currentIndex === 0) {
                this.currentIndex = this.slides.length - 1;
            } else {
                this.currentIndex--;
            }
            this.setActiveSlide();
        });
    }
}

function initSlider() {
    let gallery = document.querySelector('.works__gallery');
    new ShowSlide(0, gallery);
}

export default initSlider;