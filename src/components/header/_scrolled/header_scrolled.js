function headerScroll() {
    
    window.onscroll = function() {

        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 150) {
            const header = document.querySelector('.header');
            header.classList.add("whitebg");
        } else {
            const header = document.querySelector('.header');
            header.classList.remove("whitebg");
        }
    }
}

export default headerScroll;