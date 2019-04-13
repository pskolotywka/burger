var form = document.querySelector('#form');
const btn = document.querySelector('.form__buttons-send');
const field = form.getElementsByTagName('input');
const fieldvalue = field.textContent;

btn.addEventListener('click', function(e) {
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

  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
      console.log(name)

  });

  request.open('POST', 'email.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone)
  + '&street=' + encodeURIComponent(formData.street)
  + '&house=' + encodeURIComponent(formData.house)
  + '&part=' + encodeURIComponent(formData.part)
  + '&flat=' + encodeURIComponent(formData.flat)
  + '&floor=' + encodeURIComponent(formData.floor) + '&text=' + encodeURIComponent(formData.text));
});

