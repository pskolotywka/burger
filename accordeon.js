const myBtn = document.querySelectorAll('.setmenu__item-name');

for (const item of myBtn) {
    item.addEventListener('click', e => {
        const curItem = e.currentTarget;
        const contente = curItem.lastElementChild;
        const btn = curItem.querySelector('.setmenu__item-button')
        const contentel = document.querySelectorAll('.setmenu__item-dropdown');
        const eBtn = document.querySelectorAll('.setmenu__item-button')
        console.log(contente)
        if (window.innerWidth < 768) {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                contente.style.width = '0px';
                item.style.width = '70px';
                btn.style.color = 'white';
            }
            else {
                for (let i = 0; i < eBtn.length; i++ ) {
                    eBtn[i].classList.remove('active');
                    eBtn[i].style.color = 'white';
                }
                for (let i = 0; i < myBtn.length; i++ ) {
                    myBtn[i].style.width = '70px';
                }
                for (let i = 0; i < contentel.length; i++ ) {
                    contentel[i].style.width = '0px';
                }
                btn.classList.add('active');
                item.style.width = '320px';
                contente.style.width = '250px';
                btn.style.color = '#f9b43b';
            }
        } 
        else {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                contente.style.width = '0px';
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
                contente.style.width = '350px';
                btn.style.color = '#f9b43b';
            }
        }
        
    })
}

window.onresize = () => {
    
    if (window.innerWidth < 768) {
        const eBtn = document.querySelectorAll('.setmenu__item-button')
        const contentel = document.querySelectorAll('.setmenu__item-dropdown');
        for (let i = 0; i < myBtn.length; i++ ) {
            myBtn[i].style.width = '70px';
        }  
        for (let i = 0; i < contentel.length; i++ ) {
            contentel[i].style.width = '0px';
        }
        for (let i = 0; i < eBtn.length; i++ ) {
            eBtn[i].classList.remove('active');
            eBtn[i].style.color = 'white';
        }
    btn.classList.remove('active');
/*     contente.style.width = '0px'; */
    item.style.width = '70px';
    btn.style.color = 'white';
    }
    else {
        for (let i = 0; i < myBtn.length; i++ ) {
            myBtn[i].style.width = '100px';
        }  
        const contentel = document.querySelectorAll('.setmenu__item-dropdown');
        for (let i = 0; i < contentel.length; i++ ) {
            contentel[i].style.width = '0px';
        }
        for (let i = 0; i < eBtn.length; i++ ) {
            eBtn[i].classList.remove('active');
            eBtn[i].style.color = 'white';
        }
    btn.classList.remove('active');
    item.style.width = '100px';
    btn.style.color = 'white';
    }
}