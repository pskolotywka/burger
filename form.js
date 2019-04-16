var form = document.querySelector('#form');
const btn = document.querySelector('.form__buttons-send');
const field = form.getElementsByTagName('input');
const fieldvalue = field.textContent;
const resetBtn = document.querySelector('.form__block-buttons-reset');


const popupsForm = document.querySelector('.reviews__popup');
const popupsFormTitle = document.querySelector('.reviews__modal-title');
const popupsFormText = document.querySelector('.reviews__modal-text');
const popupsFormStyle = document.querySelector('.reviews__modal-container')
function modalopen() {
  popupsForm.classList.add('modalshow');
  popupsFormTitle.textContent = "Запрос отправлен";
  popupsFormText.textContent = "";
  popupsFormStyle.style.padding = '30px'
  content.style.animation = 'zoomIn .4s'
  setTimeout( function foo() {
    over.style.opacity = '1'; 
  },1)
  setTimeout(() => {
    content.style.animation = 'zoomOut .4s';
    setTimeout( function foo() {
      over.style.opacity = '0'; 
    },1)
    setTimeout( function foo() {
        popups.classList.remove('modalshow');
        popupsFormStyle.style.padding = '20px'
    },400)
  },2000);
}


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.querySelector('#user_name').value;
  const phone = document.querySelector('#user_phone').value;
  const comment = document.querySelector('#user_comment').value;
  const mail = "johnyjust69@gmail.com";

  var formData = new FormData() 
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('comment', comment);
      formData.append('mail', mail);
      console.log(formData);
      
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
<<<<<<< HEAD
  xhr.send(formData);
=======
  xhr.send(JSON.stringify(formData));
>>>>>>> fb4bcb193a4f400c970578324793ffae81919169
  xhr.addEventListener('load', e => {
    if (xhr.readyState === 4) {
      modalopen();
      console.log(xhr.readyState)
    }
    else {
      modalopen(); 
      popupsFormTitle.textContent = "Ошибка";
    }
    setTimeout(function clr() {
      resetBtn.click()
    },2000);
  })
});
