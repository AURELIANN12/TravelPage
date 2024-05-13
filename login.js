// let email = document.forms['form']['email'];
// let password = document.forms['form']['password']

// let email_error = document.getElementById('email_error')
// let password_error = document.getElementById('password_error')

// email.addEventListener('textInput', email_Verify);
// password.addEventListener('textInput', password_Verify);
// function validated(){

//     if (email.value.length < 9){
//         email.style.border = "1 px solid red";
//         email_error.style.display = "block";
//         email.focus();
//         return false;
//     }
//     if (password.value.length < 6){
//         password.style.border = "1 px solid red";
//         password_error.style.display = "block";
//         password.focus();
//         return false;
//     }
// }
// function email_Verify(){
//     if (email.value.length >= 8){
//         email.style.border = "1 px solid silver";
//         email_error.style.display = "none";
       
//         return true;
      
//     }
// }
// function password_Verify(){
//     if (password.value.length >= 5){
//         password.style.border = "1 px solid silver";
//         password_error.style.display = "none";
       
//         return true;
      
//     }
// }




let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');

email.addEventListener('input', email_Verify); // Changed 'textInput' to 'input'
password.addEventListener('input', password_Verify); // Changed 'textInput' to 'input'

function validated(){
    if (email.value.length < 9 && email != "me@.yahoo"){
        email.style.border = "1px solid red"; // Removed space between "1" and "px"
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6 && password != "1234567890"){
        password.style.border = "1px solid red"; // Removed space between "1" and "px"
        password_error.style.display = "block";
        password.focus();
        return false;
    }
    return true; // Added to allow form submission when validation passes
}

function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver"; // Removed space between "1" and "px"
        email_error.style.display = "none";
        return true;
    }
}

function password_Verify(){
    if (password.value.length >= 5){
        password.style.border = "1px solid silver"; // Removed space between "1" and "px"
        password_error.style.display = "none";
        return true;
    }
}
