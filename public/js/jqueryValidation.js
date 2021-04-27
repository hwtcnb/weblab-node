import {openPopup} from "./form.js";
import {formJSSend, formJQuerySend} from './request-send.js';

let person = {}

$('.validate').validate({
    rules: {

        name: {
            required: true,
            minlength: 2 
        },
        email:{
            required: true,
            pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
        },
        surname:{
            minlength: 2,
            required: true
        },
        pass:{
            required: true,
            minlength: 6
        }
        
    },

    messages:{

        name:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке ім'я!</span>"
        },
        email:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            pattern: "<br><span>Введіть пошту згідно формату!</span>"
        },
        surname:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке прізвище!</span>"
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
        console.log(person)
    }
})



