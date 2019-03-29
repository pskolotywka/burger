
const eBtn = document.querySelectorAll('.accordeon__item-name-button');
const content = document.querySelectorAll('.accordeon__item-dropdown');

for (const item of eBtn) {
    item.addEventListener('click', e => {
        const curItem = e.currentTarget;
        const btnParent = item.parentNode;
        const contentel = btnParent.nextElementSibling;
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            contentel.style.height = '0px';
        }
        else {
            item.classList.add('active');
            contentel.style.height = '100%'
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