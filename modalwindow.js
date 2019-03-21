const descBtn = document.querySelector('.description__composition-button');
const descPopup = document.querySelector('.description__composition-drop');


descBtn.addEventListener('click', e => {
   if (!(descPopup.classList.contains('descopened'))) {
        descPopup.classList.add('descopened');
   }
   else {
    descPopup.classList.remove('descopened');
   }
})
