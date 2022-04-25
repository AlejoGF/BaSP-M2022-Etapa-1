var form = document.querySelector('form');
var inputFirstName = document.getElementById('first-name');
var inputLastName = document.getElementById('last-name');
var inputDni = document.getElementById('user-dni');
var inputDateOfBirth = document.getElementById('user-date-birth');
var inputTelephone = document.getElementById('user-telephone');
var inputAddress = document.getElementById('user-address');
var inputCity = document.getElementById('user-city');
var inputPostalCode = document.getElementById('user-postal-code');
var inputEmail = document.getElementById('user-email');
var emailConfirmation = document.getElementById('user-email-confirmation');
var inputPassword = document.getElementById('user-password');
var passwordConfirmation = document.getElementById('user-password-confirmation');
var clickButton = document.getElementById('button-sign-up');
var letters = /[a-z]/
var numbers = /[0-9]/;
var symbols = /([@"'(.?*+^$#-()])/;
var dotCom = /.com/;
var mail = /@/;
var subdomain = /(?<=@)[a-z]/;

function correctStyles(correctContainer, inputToValidate) {
    correctContainer.style.display = 'flex';
    correctContainer.innerHTML = 'Correct';
    correctContainer.style.color = '#00FF7F';
    inputToValidate.style.border = '2px solid #00FF7F';
}

function errorStyles(msgContainer, inputSelected) {
    msgContainer.style.display = "flex";
    msgContainer.style.color = "#DC143C";
    inputSelected.style.border = "2px solid #DC143C";
}

function testValidationsStyles() {
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid #DC143C";
}

function cleanValidations() {
    textValidations.innerHTML = "";
    testScreen.style.border = "2px solid";
}

function checkFirstName() {

}

function checkLastName() {

}

function checkDni() {

}

function checkDateOfBirth() {

}

function checkTelephone() {

}

function checkAddress() {

}

function checkCity() {

}

function checkPostalCode() {

}

function checkEmail() {

}

function checkEmailConfirm() {

}

function checkPassword() {

}

function checkPasswordConfirm() {

}