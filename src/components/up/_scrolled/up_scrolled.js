function upScroll() {

    window.addEventListener('scroll', ()=> {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        
        if(scrolled > 150) {
            const up = document.querySelector('.up');
            up.classList.add("show");
        } else {
            const up = document.querySelector('.up');
            up.classList.remove("show");
        }
    });
}

export default upScroll;