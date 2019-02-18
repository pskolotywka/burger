const button = document.querySelector('.menu__gamburger-link');
const popup = document.querySelector('.menu__popup');
const menuModal = document.querySelector('.menu');
const closedBtn = document.querySelector('.close')
const closeStyle = document.querySelector('.menu__gamburger-link')

button.addEventListener('click', e => {
    popup.classList.toggle('opened');
    menuModal.classList.toggle('menu__modal');
    closeStyle.classList.toggle('close');

})


const descBtn = document.querySelector('.description__composition-button');
const descPopup = document.querySelector('.description__composition-drop');

descBtn.addEventListener('click', e => {
    descPopup.classList.toggle('descopened');
})