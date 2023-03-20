import './style/normalize.css';
import './style/style.scss';


//sticky header
(function () {
    const header = document.querySelector('.header');
    const order = document.querySelector('.order');

    window.onscroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('fix');
            order.classList.add('fix');
        } else {
            header.classList.remove('fix');
            order.classList.remove('fix');
        }
    }
})()


//custom dropdown select
const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(dropwrapper => {

    const dropInput = dropwrapper.querySelector('.dropdown__input');
    const dropButton = dropwrapper.querySelector('.dropdown__button');
    const dropList = dropwrapper.querySelector('.dropdown__list');
    const dropListItem = dropList.querySelectorAll('.dropdown__list-item');

    //open drop and rotate arrow
    dropButton.addEventListener('click', toggleClass);

    function toggleClass () {
        dropList.classList.toggle('show');
        dropButton.classList.toggle('rotate');
    }

    //choose drop item
    dropListItem.forEach(dropItem => {
        dropItem.addEventListener('click', function() {
            dropButton.innerText = this.innerText;
            dropInput.value = this.dataset.value;
            dropInput.value = localStorage.setItem('dropvalue', dropInput.value)
            dropList.classList.remove('show');
            dropButton.classList.remove('rotate');
        })
    })
    //hidden dropdown list when click document
    document.addEventListener('click', (evt) => {
        if(evt.target !== dropButton) {
            dropList.classList.remove('show');
            dropButton.classList.remove('rotate');
        }
    })
})


