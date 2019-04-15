var form = document.querySelector('#form');
const btn = document.querySelector('.form__buttons-send');
const field = form.getElementsByTagName('input');
const fieldvalue = field.textContent;
const resetBtn = document.querySelector('.form__block-buttons-reset');


const popupsForm = document.querySelector('.reviews__popup');
const popupsFormTitle = document.querySelector('.reviews__modal-title');
const popupsFormText = document.querySelector('.reviews__modal-text');
const popupsFormStyle = document.querySelector('.reviews__modal-container')



form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log(field)
  
  

  var formData = {
    name: document.querySelector('input[name="user_name"]').value,
    phone: document.querySelector('input[name="user_phone"]').value,
    street: document.querySelector('input[name="user_street"]').value,
    house: document.querySelector('input[name="user_house"]').value,
    part: document.querySelector('input[name="user_part"]').value,
    flat: document.querySelector('input[name="user_flat"]').value,
    floor: document.querySelector('input[name="user_floor"]').value,
    text: document.querySelector('textarea[name="user_text"]').value
  };


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

  var request = new XMLHttpRequest();

  request.open('POST', 'email.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone)
  + '&street=' + encodeURIComponent(formData.street)
  + '&house=' + encodeURIComponent(formData.house)
  + '&part=' + encodeURIComponent(formData.part)
  + '&flat=' + encodeURIComponent(formData.flat)
  + '&floor=' + encodeURIComponent(formData.floor) + '&text=' + encodeURIComponent(formData.text));
  console.log(request.status)
  if (request.readyState < 4) {
    modalopen();
    console.log(request.readyState)
  }
  else {
    modalopen();
    popupsFormTitle.textContent = "Ошибка";
  }
  setTimeout(function clr() {
    resetBtn.click()
  },2000);
});





/* request.addEventListener('load', function() {
  console.log(name)

}); */