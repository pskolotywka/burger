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
        contentParent = thisBtn.parentNode; // через парентНод выходим к общему родителю контента
        const title = contentParent.querySelector('.reviews__description-title').innerHTML; // в переменную присваиваем значение нужного контента
        const text = contentParent.querySelector('.reviews__description-text').innerHTML;
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
