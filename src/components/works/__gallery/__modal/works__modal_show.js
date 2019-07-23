class ShowModal {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelectorAll('.slide-item');
        this.modal = document.querySelector('.works__modal');
        this.cotainer = document.querySelector('.image-container');

        this.Show();
        this.Hide();
    }

    Show() {
        this.items.forEach((el) => {
            el.addEventListener('click', (e) => {
                
                this.modal.style.display = "flex";
                this.cotainer.appendChild(e.target.cloneNode(true));
            });
        });
    }

    Hide() {
        this.modal.addEventListener('click', (el) => {
            if(el.target.classList.contains("slide-item")) {
                return;
            }
            this.modal.style.display = "none";
            this.cotainer.innerHTML = "";
        })
    }
}

export default ShowModal;