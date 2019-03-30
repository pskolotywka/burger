
const eBtn = document.querySelectorAll('.accordeon__item-name-button');


for (const item of eBtn) {
    item.addEventListener('click', e => {
        const content = document.querySelectorAll('.accordeon__item-dropdown');
        const curItem = e.currentTarget;
        const btnParent = curItem.parentNode;
        const contentel = btnParent.nextElementSibling;
        const contBlock = contentel.firstElementChild;
        const reqHeight = getComputedStyle(contBlock).height;
        

        if (curItem.classList.contains('active')) {
            curItem.classList.remove('active');
            contentel.style.height = '0px';
        }
        else {
            for (let i = 0; i < content.length; i++) {
                content[i].style.height = '0px';
            }
            for (let i = 0; i < eBtn.length; i++ ) {
                eBtn[i].classList.remove('active');
            }
            curItem.classList.add('active');
            contentel.style.height = '100%';
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