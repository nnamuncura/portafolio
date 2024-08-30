const navLinkEls = document.querySelectorAll('.nav-link')
navLinkEls.forEach(navLinkEL =>{
   navLinkEL.addEventListener('click', ()=>{
    document.querySelector('.active')?.classList.remove('active')
    navLinkEL.classList.add('active')
   })
})

const form = document.querySelector('form');
//console.log(form);
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let fullName = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let msg = document.getElementById('message').value;
  //console.log('Los datos son: ' + fullName + email + msg);
  form.reset();
  let contentForm = document.querySelector('#contentForm');
  contentForm.classList.add('alert', 'alert-success');
  contentForm.innerHTML = `
          <hr>
        <br><strong>Mensaje enviado. Le responderemos a la brevedad posible.</strong>
        <br><strong>Nombre: </strong> ${fullName}
        <br><strong>Email: </strong> ${email}
        <br><strong>Mensaje: </strong> ${msg}
  `;
})
