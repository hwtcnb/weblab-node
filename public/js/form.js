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



const button = document.querySelector('#href_button');
button.addEventListener('click', () => {
   const id = prompt('Enter id')
   if (id) {
      const href = document.querySelector('#href')
      href.setAttribute('href', `/database/${id}`)
   } 
})

const deleteButton = document.querySelector('#delete_button')
deleteButton.addEventListener('click', () => {
   const id = prompt('Enter id')
   const href = document.querySelector('#delete')
   $.ajax({
      url: `/database/${id}`,
      type: 'DELETE',
      success: function(result) {
         alert(result);
      }
  });
})

const updateButton = document.querySelector('#update_button')
updateButton.addEventListener('click', () => {
   const id = prompt('Enter id')
   const column = prompt('Enter column to change (name, surname, email, password, sex, year)')
   const edit = prompt('Enter new value')
   const href = document.querySelector('#update')
   $.ajax({
      url: `/database/${id}/${column}/${edit}`,
      type: 'PUT',
      success: function (result) {
         alert(result)
      }
   })
})


export {openPopup, closePopup}
