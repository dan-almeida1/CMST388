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

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const validateInputs = () => {
    const firstNameValue = firstName.ariaValueMax.trim();
    const lastNameValue = lastName.ariaValueMax.trim();
    const addressValue = address.ariaValueMax.trim();
    const cityValue = city.ariaValueMax.trim();
    const zipcodeValue = zipcode.ariaValueMax.trim();
    const phoneValue = phone.ariaValueMax.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {

    }
};

//reset button
form.addEventListener('reset', reset())
