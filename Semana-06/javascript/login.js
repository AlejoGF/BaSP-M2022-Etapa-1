window.onload = function () {
    var loginForm = document.getElementById('form');
    var loginButton = document.getElementById('button-login');
    var inputContent = document.getElementsByClassName('login');
    emailContent = inputContent[0];
    passwordContent = inputContent[1];
    inputEmail = emailContent.children[1];
    inputPassword = passwordContent.children[1];
    loginButton.addEventListener('click', loginClick);

    inputEmail.onfocus = function(){
        myFocus(inputEmail, emailContent)
    }
    inputEmail.onblur = function (){
        myBlur(inputEmail, emailContent);
    }
    inputPassword.onfocus = function(){
        myFocus(inputPassword, passwordContent)
    }
    inputPassword.onblur = function (){
        myBlur(inputPassword, passwordContent);
    }
}

function myFocus(input, inputText){
    hideError(inputText);
}

function myBlur(input, inputText){
    if (input.value == "") {
        showError(inputText);
    } else {
        hideError(inputText);
    }
}

function loginClick() {
    var email = inputEmail.value;
    var password = inputPassword.value;
    if (validateEmail(email) && validatePassword(password)) {
        alert("Has login successfully\nEmail: " + email +"\nPassword: " + password)
    }
    if (!validateEmail(email)) {
        showError(emailContent);
    } else {
        hideError(emailContent);
    }
    if (!validatePassword(password)) {
        showError(passwordContent);
    } else {
        hideError(passwordContent);
    }
}

function validateEmail(email) {
    var emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return false;
    } else {
        return true;
    }
}

function validatePassword(password) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var letters = ['a','b','c',"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z",'0'];
    var specialChar = 0;
    var symbols = false;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if (letters.includes(password[i])){
            specialChar++;
        } else {
            symbols = true;
        }
    }
    if (password.length >= 8 && num >= 1 && specialChar >=1 && !symbols) {
        return true;
    } else {
        return false;
    }
}

function showError(inputContent) {
    var contentChildrens = inputContent.children;
    contentChildrens[1].classList.add('invalid-error')
    contentChildrens[2].classList.remove('error-display');
}

function hideError(inputContent){
    var contentChildrens = inputContent.children;
    contentChildrens[1].classList.remove('invalid-error')
    contentChildrens[2].classList.add('error-display');
}