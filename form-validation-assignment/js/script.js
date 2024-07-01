const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipcode = document.getElementById('zipcode');
const phone = document.getElementById('phone');
const email = documents.getElementById('email');
const errorElement = document.getElementById('error');
//error sign
form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value == null) {
        messages.push('Name is Required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})

//reset button
form.addEventListener('reset', reset())
