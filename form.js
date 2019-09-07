var form = document.querySelector('#form');
const btn = document.querySelector('.form__buttons-send');
const field = form.getElementsByTagName('input');
const fieldvalue = field.textContent;
const resetBtn = document.querySelector('.form__block-buttons-reset');


const popupsForm = document.querySelector('.reviews__popup');
const popupsFormTitle = document.querySelector('.reviews__modal-title');
const popupsFormText = document.querySelector('.reviews__modal-text');
const popupsFormStyle = document.querySelector('.reviews__modal-container');

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

function check() {
  if (form.querySelector('.form__checkbox').checked === false) {
    console.log('Не перезванивать');
  }
  if (form.querySelector('.form__checkbox').checked === true) {
    console.log('Перезванивать');
  }
}
function checkCard() {
  if (form.querySelector('.radioform__button-change').checked === true) {
    console.log('Потребуется сдача');
  }
  if (form.querySelector('.radioform__button-card').checked === true) {
    console.log('Оплата картой');
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm(form)) {
    
    const name = document.querySelector('#user_name').value;
    const phone = document.querySelector('#user_phone').value;
    const comment = document.querySelector('#user_comment').value;
    const radiocard = document.querySelector('.radioform__button-card').checked;
    const radiochange = document.querySelector('.radioform__button-change').checked;
    const radioCall = document.querySelector('.form__checkbox').checked;
    const mail = "johnyjust69@gmail.com";
    console.log(radioCall)
    if (radioCall === false) {
      var radioCallValue = 'Перезванивать';
    }
    if (radioCall === true) {
      var radioCallValue = 'Не перезванивать';
    }
    if (radiochange === true) {
      var radios = 'Потребуется сдача';
    }
    if (radiocard === true) {
      var radios = 'Оплата картой';
    }
    if (radiocard === false && radiochange == false) {
      var radios = 'Не выбрано';
    }

    var formData = new FormData() 
        formData.append('Имя', name);
        formData.append('Телефон', phone);
        formData.append('Комментарий', comment);
        formData.append('Почта', mail);
        formData.append('Оплата', radios);
        formData.append('Звонок', radioCallValue);
        console.log(formData);
        
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    console.log(form.querySelector('.form__checkbox').checked);
    check();
    checkCard();
    xhr.addEventListener('load', e => {
      if (xhr.status === 200) {
        modalopen();
        console.log(xhr.status)
      }
      else {
        modalopen(); 
        popupsFormTitle.textContent = "Ошибка";
      }
      setTimeout(function clr() {
        resetBtn.click()
      },2000);
    })
  }
  



  function validateForm(form) {
    let valid = true;
    
    if (!validateField(form.querySelector('#user_name'))) {
        valid = false;
    }

    if (!validateField(form.querySelector('#user_phone'))) {
        valid = false;
    }

    if (!validateField(form.querySelector('#user_comment'))) {
        valid = false;
    }
    return valid;
  };


  function validateField(field) {
    if (!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    }
    else {
        field.nextElementSibling.textContent = '';
        return true;
    }
  }
});
