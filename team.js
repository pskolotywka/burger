const eBtn = document.querySelectorAll('.accordeon__item-name-button');

/* const reqHeight = getComputedStyle(content).height; */

for (const item of eBtn) {
    const content = document.querySelector('.accordeon__item-dropdown');
    item.addEventListener('click', e => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.height = '0px';
        }
        else {
            item.classList.add('active');
            content.style.height = '100%';
        }    
    })
}
/*  */