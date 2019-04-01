const button = document.querySelector('.menu__gamburger-link');
const popup = document.querySelector('.menu__popup');
const menuModalStyle = document.querySelector('.menu__modal');
const menuModal = document.querySelector('.menu');
const closedBtn = document.querySelector('.close');
const closeStyle = document.querySelector('.menu__gamburger-link');
const menuBtn = document.querySelectorAll('.menu__item-link');


button.addEventListener('click', e => {
    if (!(menuModal.classList.contains('menu__modal'))) {
        menuModal.classList.add('menu__modal');
        closeStyle.classList.add('close');
        popup.classList.add('opened');
        setTimeout(function foo() {
            popup.style.opacity = '1';
            menuModal.style.opacity = '1';
        }, 30) 
    }
    else {
        if (menuModal.style.opacity > 0) {
            closeStyle.classList.remove('close');
            setTimeout(function fooC() {
                popup.style.opacity = '0';
                menuModal.style.opacity = '0';
            }, 30)
            setTimeout(function fooM () {
                menuModal.classList.remove('menu__modal');
            }, 400)
        }
        else {
            popup.classList.remove('opened');
        }
    }  
});

for (let i = 0; i < menuBtn.length; i++ ) {
    menuBtn[i].addEventListener('click', () => {
        if (menuModal.style.opacity > 0) {
            closeStyle.classList.remove('close');
            setTimeout(function fooC() {
                popup.style.opacity = '0';
                menuModal.style.opacity = '0';
            }, 30)
            setTimeout(function fooM () {
                menuModal.classList.remove('menu__modal');
            }, 400)
        }
        else {
            popup.classList.remove('opened');
        }
    })
}







