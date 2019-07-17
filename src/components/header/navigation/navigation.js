function navigation() {
    const linkArray = document.querySelectorAll('.navigation__elem-link');

    linkArray.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.getAttribute('data-target');
            const target = document.querySelector("#"+id);
            target.scrollIntoView();
        })
    })
}

export default navigation;