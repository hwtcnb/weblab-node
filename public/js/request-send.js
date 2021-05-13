import {closePopup} from "./form.js";

function formJSSend(form) {
    const dataServer = document.createElement('p')
    const serverStatus = document.createElement('p')
    dataServer.classList.add('dataServer')
    serverStatus.classList.add('serverStatus')
    document.querySelector('.response-content').append(dataServer)
    document.querySelector('.response-content').append(serverStatus)

    const request = new XMLHttpRequest()

    request.open('POST', '/form', true)
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

    const formData = new FormData(form)

    const data_obj = {}

    formData.forEach((value, key) => {
        data_obj[key] = value
    })

    const data = JSON.stringify(data_obj)

    request.send(data)

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            dataServer.innerText = data.name +' '+ data.surname +' '+ data.email +' '+ data.pass +' '+ data.sex +' '+ data.year;
            serverStatus.textContent = request.statusText
            form.reset()
            setTimeout(() => {
                closePopup('#response-popup')
                setTimeout(() => {
                    dataServer.innerHTML = ''
                    serverStatus.textContent = ''
                }, 1000)
            }, 10000)
        } else {
            dataServer.innerHTML = 'Fail'
        }
    })
    return data_obj
}



function formJQuerySend(form){
    const messages = {
        loading : "Loading...",
        success : "Success!",
        failure : "Failure!"
    }

    const dataServer = document.createElement('p')
    const serverStatus = document.createElement('p')
    dataServer.classList.add('dataServer')
    serverStatus.classList.add('serverStatus')
    document.querySelector('.response-content').append(dataServer)
    document.querySelector('.response-content').append(serverStatus)
    serverStatus.textContent = messages.loading


    const formData = new FormData(form)
    const data_obj = {}

    formData.forEach((value, key) =>{
        data_obj[key] = value
    })



    $.ajax({
        url: '/form',
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data_obj),
        success: (data, textStatus) => {
            if (textStatus === 'success') {
                dataServer.innerHTML = data.name +' '+ data.surname +' '+ data.email +' '+ data.pass +' '+ data.sex +' '+ data.year
                serverStatus.textContent = messages.success
                form.reset()
                setTimeout(() => {
                    closePopup('#response-popup')
                    setTimeout(() => {
                        dataServer.innerHTML = ''
                        serverStatus.textContent = ''
                    }, 1000)
                }, 10000)
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus)
            console.log(errorThrown)
            dataServer.innerHTML = ''
            serverStatus.textContent = messages.failure
        }
    })
    return data_obj
}


export {formJSSend, formJQuerySend}