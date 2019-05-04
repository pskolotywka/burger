const buttonm = document.querySelector('.menu__gamburger-link');
const popup = document.querySelector('.menu__popup');
const menuModalStyle = document.querySelector('.menu__modal');
const menuModal = document.querySelector('.menu');
const closedBtn = document.querySelector('.close');
const closeStyle = document.querySelector('.menu__gamburger-link');
const menuBtn = document.querySelectorAll('.menu__item-link');



const openMenu = () => {
    menuModal.classList.add('menu__modal');
        closeStyle.classList.add('close');
        popup.classList.add('opened');
        setTimeout(function foo() {
            popup.style.opacity = '1';
            menuModal.style.opacity = '1';
        }, 30) 
}
const closeMenu = () => {
    closeStyle.classList.remove('close');
    setTimeout(function fooC() {
        popup.style.opacity = '0';
        menuModal.style.opacity = '0';
    }, 30)
    setTimeout(function fooM () {
        menuModal.classList.remove('menu__modal');
    }, 400)
    setTimeout(function fooO() {
        popup.classList.remove('opened');
    }, 400)
}




buttonm.addEventListener('click', e => {
    if (!(menuModal.classList.contains('menu__modal'))) {
        openMenu();
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
                popup.classList.remove('opened');
                menuModal.style.opacity = '1';
            }, 400)
        }
    }  
});

for (let i = 0; i < menuBtn.length; i++ ) {
    menuBtn[i].addEventListener('click', function closed() {
        if (menuModal.style.opacity > 0) {
            closeMenu();
        }
    })
}

document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        if (menuModal.style.opacity > 0) {
            closeMenu();
        }
    }
})

