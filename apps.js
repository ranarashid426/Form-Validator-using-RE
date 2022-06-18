document.getElementById('name').addEventListener('blur',validateName)
document.getElementById('email').addEventListener('blur',validateEmail)
document.getElementById('zipcode').addEventListener('blur',validateZipcode)
document.getElementById('phone').addEventListener('blur',validatePhone)


function validateName() {
   const name = document.getElementById('name')
   re = /^[a-zA-Z]{2,15}([\s]{1})?([a-zA-Z]{2,15})?$/
   if(!re.test(name.value)){
       name.classList.add('is-invalid')
   }else{
       name.classList.remove('is-invalid')
   }
}
function validateZipcode() {
   const zipcode = document.getElementById('zipcode')
   re = /^([0-9]{5})(-[0-9]{4})?$/
   if(!re.test(zipcode.value)){
       zipcode.classList.add('is-invalid')
   }else{
       zipcode.classList.remove('is-invalid')
   }
}
function validatePhone() {
   const phone = document.getElementById('phone')
   re = /^([\+0-9]{1,3})?[0-9]{8,12}$/
   if(!re.test(phone.value)){
       phone.classList.add('is-invalid')
   }else{
       phone.classList.remove('is-invalid')
   }
}
function validateEmail() {
   const email = document.getElementById('email')
   re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
   if(!re.test(email.value)){
       email.classList.add('is-invalid')
   }else{
       email.classList.remove('is-invalid')
   }
}