function toggleMenu() {
    let btnMenu = document.querySelector('.header__mobile-btn');

    btnMenu.addEventListener('click', (el) => {
        el.preventDefault();

        const menu = document.querySelector('.navigation');

        menu.classList.toggle("show");

        if(menu.classList.contains("show")) {
            const mark = document.querySelector('.header__mobile-btn-icon');
            mark.innerHTML = `&#10005;`;
        } else {
            const mark = document.querySelector('.header__mobile-btn-icon');
            mark.innerHTML = `&#9776;`;
        }
    });
}

export default toggleMenu;