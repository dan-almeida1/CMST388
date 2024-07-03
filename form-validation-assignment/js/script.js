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
    if (firstName.value === "" || firstName.value == null) {
        messages.push('First Name is Required')
    }
    
    if (lastName.value === "" || lastName.value == null) {
        messages.push('Last Name Name is Required')
    }
    if(messages.length > 0) {
        e.preventDefault();
    }
  
});


const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//reset button
function wipe() {
    document.getElementById("form").reset();
}
