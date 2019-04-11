const myBtn = document.querySelectorAll('.setmenu__item-name');

for (const item of myBtn) {
    item.addEventListener('click', e => {
        const curItem = e.currentTarget;
        const content = curItem.lastElementChild;
        const btn = curItem.querySelector('.setmenu__item-button')
        const contentel = document.querySelectorAll('.setmenu__item-dropdown');
        const eBtn = document.querySelectorAll('.setmenu__item-button')
        console.log(content)
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            content.style.width = '0px';
            item.style.width = '100px';
            btn.style.color = 'white';
        }
        else {
            for (let i = 0; i < eBtn.length; i++ ) {
                eBtn[i].classList.remove('active');
                eBtn[i].style.color = 'white';
            }
            for (let i = 0; i < myBtn.length; i++ ) {
                myBtn[i].style.width = '100px';
            }
            for (let i = 0; i < contentel.length; i++ ) {
                contentel[i].style.width = '0px';
            }
            btn.classList.add('active');
            item.style.width = '450px';
            content.style.width = '350px';
            btn.style.color = '#f9b43b';
        }
    })
}