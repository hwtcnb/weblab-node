function openPopup(element){
    document.querySelector(element).style.left = '70px';
};

function closePopup(element){
   document.querySelector(element).style.left = '-9999px';
};
document.querySelector('.dialog-button').onclick = () => {
   openPopup('#popup')
}

document.querySelector('#close').onclick = () => {
   closePopup('#popup')
}

const select = document.querySelector('#selector');
const now = new Date();

for (let i = 2000; i <= now.getFullYear(); i++) {
   let options = String(i);
   let el = document.createElement('option');
   el.textContent = options
   el.value = options
   select.appendChild(el) 
}

function getID() {
   const id = prompt('Enter id')
   const href = document.querySelector('#href')
   href.setAttribute('href', `/database/${id}`)
}

const button = document.querySelector('#href_button');
button.addEventListener('click', () => {
   getID()
})

export {openPopup, closePopup}
