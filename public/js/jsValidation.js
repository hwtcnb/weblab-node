let form = document.querySelector('#form');
let email = document.querySelector('#email');
let name = document.querySelector('#name');
let surname  = document.querySelector('#surname');
let pass = document.querySelector('#password');

let emailError = document.querySelector('.email-error');
let nameError = document.querySelector('.name-error');
let surnameError = document.querySelector('.surname-error');
let passError = document.querySelector('.pass-error');

let checker1 = 0;
let checker2 = 0;
let checker3 = 0;
let checker4 = 0;

const emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

email.addEventListener('input', function (event) {
    if (!email.value){
        emailError.innerHTML = "Поле не має бути порожнім!"
        checker1 = 0
    }
    else if (!email.value.match(emailReg) && email.value) {
        emailError.innerHTML = "Введіть пошту згідно формату!"
        checker1 = 0
    }
    else {
        emailError.innerHTML = ""
        checker1 = 1
    }
}, false)

surname.addEventListener('input', function (event) {
    if (!surname.value){
        surnameError.innerHTML = "Поле не має бути порожнім!"
        checker2 = 0
    }
    else if (surname.value.length < 2) {
        surnameError.innerHTML = "Поле має містити більше 2 символів"
        checker2 = 0
    }
    else {
        surnameError.innerHTML = ""
        checker2 = 1
    }
}, false)

pass.addEventListener('input', function (event) {
    if (!pass.value){
        passError.innerHTML = "Поле не має бути порожнім!"
        checker3 = 0
    }
    else if (pass.value.length < 6) {
        passError.innerHTML = "Пароль має містити не менше 6 символів!"
        checker3 = 0
    }
    else {
        passError.innerHTML = ""
        checker3 = 1
    }
}, false)

name.addEventListener('input', function (event) {
    if (!name.value){
        nameError.innerHTML = "Поле не має бути порожнім"
        checker4 = 0
    }
    else if (name.value.length < 2) {
        nameError.innerHTML = "Поле має містити більше 2 символів!"
        checker4 = 0
    }
    else {
        nameError.innerHTML = ""
        checker4 = 1
    }
}, false)

form.addEventListener("submit", function (event) {
    if (!(checker1 && checker2 && checker3 && checker4)) {
        event.preventDefault()
    }
}, false)
