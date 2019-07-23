import UpScroll from './_scrolled/up_scrolled';

function Up() {
    let btnUp = document.querySelector('.up');
    btnUp.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector("#home");
        target.scrollIntoView();
    });

    UpScroll();
}

export default Up;