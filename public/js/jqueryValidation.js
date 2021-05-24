import {openPopup} from "./form.js";
import {formJSSend, formJQuerySend} from './request-send.js';

let person = {}

$.validator.addMethod("special", function(value, element) {
    return this.optional(element) || !/[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/i.test(value);
  }, "Не повинно бути запретних символів");

$('.validate').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
            special: true
        },
        email:{
            required: true,
            pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
        },
        surname:{
            minlength: 2,
            required: true,
            special: true
        },
        pass:{
            required: true,
            minlength: 6
        }
        
    },

    messages:{

        name:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке ім'я!</span>",
            special: "<br><span>Не повинно бути спецсимволів!</span>"
        },
        email:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            pattern: "<br><span>Введіть пошту згідно формату!</span>"
        },
        surname:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке прізвище!</span>",
            special: "<br><span>Не повинно бути спецсимволів!</span>"
        },
        pass:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Пароль має містити мінімум 6 символів!</span>"
        }

    },

    submitHandler: function (form) {
        const chooser = prompt('Enter "jq" if you want jQuery_send, enter "js" if you want JavaScript_send')

        if (chooser === 'jq') {
            person = formJQuerySend(form)
        }
        else{
            person = formJSSend(form)
        }
        openPopup('#response-popup')
    }
})



