

const submit = document.getElementById('submit');

form.addEventListener('submit',(e) => {
        e.preventDefault();
        checkInput();


    });
function checkInput (){

var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var phonenumber = document.getElementById('phonenumber');
var usernameValue = username.value.trim();
var emailValue = email.value.trim();
var passwordValue = password.value.trim();
var password2Value = password2.value.trim();
var phonenumberValue = phonenumber.value.trim();

if(usernameValue === ''){
setError(username,'username cannot be Blank');}
else{

    setSuccess(username);
}
if(emailValue === ""){
    setError(email," email cannot be Blank");
}
else if(!isEmail(emailValue)){
    setError(email," email cannot be Blank");

}
else{

    setSuccess(email);
}

if(passwordValue === ""){

    setError(password,"password cannot be blank");


}
else if(passwordValue.length<6){
    setError(password,"password length cannot be under 6");


}
else{

    setSuccess(password);

}



if(passwordValue != password2Value){

setError(password2,"password doesnot match conform password");
}
else{

setSuccess(password2);

}

if(phonenumberValue === ""){

setError(phonenumber,"contact number must");

}

else{
setSuccess(phonenumber);

}


}
function setError(input,message){

    const formControl = input.parentElement;
     const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;



    }
    function setSuccess(input){
        const formControl = input.parentElement;

        formControl.className = 'form-control success';
    }
    function isEmail(emailValue){

        var emailValue = email.value.trim();

        RegExp = /^([a-zA-Z0-9-.])+\@([a-z])+\.([a-z])+$/
    if(!RegExp.test(emailValue)){
    email.style.border = '2px solid red';
    message.innerText ='enter a valid email ....@'

    return false;
    }
    else{
        email.style.border = '4px solid green';
    message.innerHTML="";

    return true;


    }

    }
