const openButton= document.querySelector('.open');
const Modal = document.querySelector('.modal-window');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
    console.log('click');
    Modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
    console.log('click');
    Modal.classList.remove('show');
});