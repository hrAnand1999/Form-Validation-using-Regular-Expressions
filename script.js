const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validPhone = false;
let validEmail = false;
$('#success').hide();
$('#failure').hide();  // to hide the above spaces
// console.log(name, email, phone);
Name.addEventListener('blur', () => {
    console.log('Name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = Name.value;
    if (regex.test(str)) {
        console.log('Your Name is Valid');
        Name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('Your Name is Not Valid');
        Name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    if (regex.test(str)) {
        console.log('Your email is Valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is Not Valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    if (regex.test(str)) {
        console.log('Your phone is Valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is Not Valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault(); // to prevent it from reloading

    //    Submit your form here
    console.log('You have submitted the form');

    let failure = document.getElementById('failure');
    let success = document.getElementById('success');
    if (validPhone && validEmail && validName) {
        console.log('Phone, email and user are valid. Submitting the form');
        
        success.classList.add('show');
        $('#success').show();
        $('failure').hide();
    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }

})