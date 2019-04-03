const mybutton = document.querySelectorAll('#reviews__description-button');
const close = document.querySelector('#close-btn');
const popups = document.querySelector('.reviews__popup');
const over = document.querySelector('.reviews__overlay');
const content = document.querySelector('.reviews__modal-container');



const contentTitle = document.querySelector('.reviews__modal-title');
const contentText = document.querySelector('.reviews__modal-text');



for (let i = 0; i < mybutton.length; i++) {
    mybutton[i].addEventListener('click', e => {
        const thisBtn = e.currentTarget; // отслеживаем событие по клику
        contentWrap = thisBtn.parentNode; // через парентНод выходим к общему родителю контента
        const title = contentWrap.querySelector('.reviews__description-title').innerHTML; // в переменную присваиваем значение нужного контента
        const text = contentWrap.querySelector('.reviews__description-text').innerHTML;
        contentTitle.innerHTML = title; // приравниваем присвоенное значение выше к значению контента в модальном окне
        contentText.innerHTML = text;
        popups.classList.add('modalshow'); // добавляем активный класс что бы поставить display block
        content.style.animation = 'zoomIn .4s'; // добавляем анимацию при открытии
        setTimeout( function foo() {
           over.style.opacity = '1'; 
        },1)
    });
}

close.addEventListener('click', function  () {
    content.style.animation = 'zoomOut .4s';
    setTimeout( function foo() {
        over.style.opacity = '0'; 
     },1)
     setTimeout( function foo() {
        popups.classList.remove('modalshow');
     },400)


})

over.addEventListener('click', e => {
    if (e.target == over) {
        content.style.animation = 'zoomOut .4s';
        setTimeout( function foo() {
            over.style.opacity = '0'; 
         },40)
         setTimeout( function foo() {
            popups.classList.remove('modalshow');
         },400)
    }
})

function setContent(title, text) {
    
}























/* const btn = document.querySelectorAll('.reviews__description-button');
const modal = createModal();

for (let i = 0; i < btn.length; i++ ) {
    btn[i].addEventListener('click', e => {
        const myBtn = e.currentTarget;
        contentWrap = myBtn.parentNode;
        const title = contentWrap.querySelector('.reviews__description-title').innerHTML;
        const text = contentWrap.querySelector('.reviews__description-text').innerHTML;
        modal = setContent(title, text);
        modal.open();


    })
}

function createModal() {
    const container = document.createElement('div');
    const template = document.querySelector('#modal-template').innerHTML;
    container.className = 'popup';
    container.innerHTML = template;

    const contentBlock = container.querySelector('.reviews-popup-content');

    const contentTitle = container.querySelector('.popup__title');
    const contentText = container.querySelector('.popup__text');

    const closeBtn = container.querySelector('#close-btn');
    
    closeBtn.addEventListener('click', e => {
        document.body.removeChild(container);
    });

    const overlay = container.querySelector('.overlay');

    overlay.addEventListener('click', e => {
        document.body.removeChild(container);
    });
    
    return {
        open() {
            document.body.appendChild(container);
        },
        close() {
            closeBtn.click();
        },
        setContent(title, text) {
            contentTitle.innerHTML = title;
            contentText.innerHTML = text;
        }
    }
} */