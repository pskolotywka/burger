
const eBtn = document.querySelectorAll('.accordeon__item-name-button');
const lishka = document.querySelectorAll('.accordeon__item');


for (const item of eBtn) {
    item.addEventListener('click', e => {
        const content = document.querySelectorAll('.accordeon__item-dropdown');
        const curItem = e.currentTarget;
        const btnParent = curItem.parentNode;
        const li = btnParent.parentNode;
        const contentel = btnParent.nextElementSibling;
        const contBlock = contentel.firstElementChild;
        const contBlockb = contBlock.firstElementChild;
        const reqHeight = getComputedStyle(contBlockb).height;
        console.log(reqHeight)
        if (li.classList.contains('active')) {
            li.classList.remove('active');
            item.classList.remove('active');
            contentel.style.height = '0px';
            setTimeout( function fooOut() {
                contentel.style.animation = 'fadeOut .6s'
            },10)
        }
        else {
            for (let i = 0; i < content.length; i++) {
                content[i].style.height = '0px';
            }
            for (let i = 0; i < lishka.length; i++ ) {
                lishka[i].classList.remove('active');
            }

            li.classList.add('active');
            item.classList.add('active');
            contentel.style.height = reqHeight;
            setTimeout( function fooIn() {
                contentel.style.animation = 'fadeIn .6s'
            },10)
        }
    })
}














/* const eBtn = document.querySelectorAll('.accordeon__item-name-button');

/* const reqHeight = getComputedStyle(content).height; */

/* for (const item of eBtn) {
    const content = document.querySelectorAll('.accordeon__item-dropdown');
    item.addEventListener('click', e => {
        for (let i = 0; i < content.length; i++) {
            if (item.classList.contains('active')) {
                content[i].style.height = '0px';
                for (let i = 0; i < item.length; i++) {
                    item[i].classList.remove('active');
                }
            }
        }
        item.classList.add('active');
        content.style.height = '100%';
        
    })
} */




/* if (item.classList.contains('active')) {
    item.classList.remove('active');
    content.style.height = '0px';
}
else {
    item.classList.add('active');
    content.style.height = '100%';
}     */