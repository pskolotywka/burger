const paginationBtn = document.querySelectorAll('.pagination__item');
const hrefsave = document.querySelectorAll('.pagination__item-link');

for (const item of paginationBtn) {
    item.addEventListener('click', e => {
        if (!(item.classList.contains('pagination__item-active'))) {
            for (let i = 0; i < paginationBtn.length; i++ ) {
                paginationBtn[i].classList.remove('pagination__item-active'); 
            }
            item.classList.add('pagination__item-active');
        }
    })
}
