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
    
    e.preventDefault();

    validateInputs();
    
});

const setError = (element, Message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = Message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.ariaValueMax.trim();
    const lastNameValue = lastName.ariaValueMax.trim();
    const addressValue = address.ariaValueMax.trim();
    const cityValue = city.ariaValueMax.trim();
    const zipcodeValue = zipcode.ariaValueMax.trim();
    const phoneValue = phone.ariaValueMax.trim();
    const emailValue = email.value.trim();

    if(firstNameValue === '') {
        setError(firstName, "First Name is Required");
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, "Last Name is Required");
    } else {
        setSuccess(lastName);
    }

    if(addressValue === '') {
        setError(address, "Address is Required");
    } else {
        setSuccess(lastName);
    }
};

//reset button
form.addEventListener('reset', reset())
