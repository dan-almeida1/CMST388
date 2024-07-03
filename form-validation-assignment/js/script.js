const form = document.querySelector('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipcode = document.getElementById('zipcode');
const phone = document.getElementById('phone');
const email = documents.getElementById('email');
const error = document.getElementById('error');
//error messages + empty inputs. can't seem to get it to work
form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value === '' || firstname.value == null) {
        messages.push('First Name is Required');
        document.getElementById("firstnameerror").style.visibility = "visible";
    }else{
        document.getElementById("firstnameerror").style.visibility = "hidden";
    }
    
    if (lastname.value === '' || lastname.value == null) {
        messages.push('Last Name is Required');
    }

    if (address.value === '' || address.value == null) {
        messages.push('Address is Required');
    }


    if(messages.length > 0) {
        e.preventDefault();
        error.innerHTML = messages.join(', ');
    }
  
});

//checks if two checks are submitted
function handleData( ) {
    var formData = new
    FormData(document.querySelector("form"));
    if(!formData.has("contact[]"))
        {        document.getElementById("chk_option_error").style.visibility = "visible";
        }else{
            document.getElementById("chk_option_error").style.visibility = "hidden";
        }
return false;
}


//reset button
function wipe() {
    document.getElementById("form").reset();
}
