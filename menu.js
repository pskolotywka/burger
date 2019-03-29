const button = document.querySelector('.menu__gamburger-link');
const popup = document.querySelector('.menu__popup');
const menuModal = document.querySelector('.menu');
const closedBtn = document.querySelector('.close');
const closeStyle = document.querySelector('.menu__gamburger-link');
const menuBtn = document.querySelectorAll('.menu__item-link');

button.addEventListener('click', e => {
    popup.classList.toggle('opened');
    menuModal.classList.toggle('menu__modal');
    closeStyle.classList.toggle('close');
})

for (let i = 0; i < menuBtn.length; i++ ) {
    menuBtn[i].addEventListener('click', () => {
        menuModal.classList.remove('menu__modal');
        popup.classList.remove('opened');
        closeStyle.classList.remove('close');
    })
}




































