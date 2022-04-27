window.onload = function () {
    var signUpButton = document.getElementById('button-sign-up');
    signUpButton.addEventListener('click', signUpClick);
    getTodayDate();
    var inputContent = document.getElementsByClassName('sign-up');
    contentFirstName = inputContent[0];
    inputFirstName = contentFirstName.children[1];
    contentLastName = inputContent[1];
    inputLastName = contentLastName.children[1];
    dniContent = inputContent[2];
    inputDni = dniContent.children[1];
    dateOfBirthContent = inputContent[3];
    inputDateOfBirth = dateOfBirthContent.children[1];
    telephoneContent = inputContent[4];
    inputTelephone = telephoneContent.children[1];
    addressContent = inputContent[5];
    inputAddress = addressContent.children[1];
    postalCodeContent = inputContent[6];
    inputPostalCode = postalCodeContent.children[1];
    emailContent = inputContent[7];
    inputEmail = emailContent.children[1];
    passwordContent = inputContent[8];
    inputPassword = passwordContent.children[1];
    confirmPasswordContent = inputContent[9];
    inputConfirmPassword = confirmPasswordContent.children[1];

    inputFirstName.onfocus = function() {
        myFocus(inputFirstName, contentFirstName);
    }
    inputFirstName.onblur = function () {
        myBlur(inputFirstName, contentFirstName);
    }
    inputLastName.onfocus = function() {
        myFocus(inputLastName, contentLastName);
    }
    inputLastName.onblur = function () {
        myBlur(inputLastName, contentLastName);
    }
    inputDni.onfocus = function() {
        myFocus(inputDni, dniContent);
    }
    inputDni.onblur = function () {
        myBlur(inputDni, dniContent);
    }
    inputDateOfBirth.onfocus = function() {
        myFocus(inputDateOfBirth, dateOfBirthContent);
    }
    inputDateOfBirth.onblur = function () {
        myBlur(inputDateOfBirth, dateOfBirthContent);
    }
    inputTelephone.onfocus = function() {
        myFocus(inputTelephone, telephoneContent);
    }
    inputTelephone.onblur = function () {
        myBlur(inputTelephone, telephoneContent);
    }
    inputAddress.onfocus = function() {
        myFocus(inputAddress, addressContent);
    }
    inputAddress.onblur = function () {
        myBlur(inputAddress, addressContent);
    }
    inputPostalCode.onfocus = function() {
        myFocus(inputPostalCode, postalCodeContent);
    }
    inputPostalCode.onblur = function () {
        myBlur(inputPostalCode, postalCodeContent);
    }
    inputEmail.onfocus = function() {
        myFocus(inputEmail, emailContent);
    }
    inputEmail.onblur = function () {
        myBlur(inputEmail, emailContent);
    }
    inputPassword.onfocus = function() {
        myFocus(inputPassword, passwordContent);
    }
    inputPassword.onblur = function () {
        myBlur(inputPassword, passwordContent);
    }
    inputConfirmPassword.onfocus = function() {
        myFocus(inputConfirmPassword, confirmPasswordContent);
    }
    inputConfirmPassword.onblur = function () {
        myBlur(inputConfirmPassword, confirmPasswordContent);
    }
}

function myFocus(input, inputText) {
    hideError(inputText);
}

function myBlur(input, inputText) {
    if (input.value == "") {
        showError(inputText);
    } else {
        hideError(inputText);
    }
}

function signUpClick() {
    var inputText = document.getElementsByClassName('sign-up');
    var data = {
        firstName : document.getElementById('first-name').value,
        lastName : document.getElementById('last-name').value,
        dni : document.getElementById('user-dni').value,
        birthDate : document.getElementById('user-date-birth').value,
        telephone : document.getElementById('user-telephone').value,
        address : document.getElementById('user-address').value,
        city : document.getElementById('user-city').value,
        postalCode : document.getElementById('user-postal-code').value,
        email : document.getElementById('user-email').value,
        password : document.getElementById('user-password').value,
        passwordConfirmation : document.getElementById('user-password-confirmation').value
    }
    var allValid = true;
    if (!validateFirstNameLastName(data.firstName, inputText[0])) {
        alert('Name is invalid')
        allValid = false;
    }
    if (!validateFirstNameLastName(data.lastName, inputText[1])) {
        alert('Last Name is invalid')
        allValid = false;
    }
    if (!validateDNI(data.dni, inputText[2])) {
        alert('DNI is invalid')
        allValid = false
    }
    if (!validateBirthOfDate(data.birthDate, inputText[3])) {
        alert('Birth of Date is invalid')
        allValid = false
    }
    if (!validateTelephone(data.telephone, inputText[4])) {
        alert('Phone is invalid')
        allValid = false;
    }
    if (!validateCity(data.city, inputText[5])) {
        alert('City is invalid')
        allValid = false;
    }
    if (!validateAddress(data.address, inputText[6])) {
        alert('Address is invalid')
        allValid = false;
    }
    if (!validatePostalCode(data.postalCode, inputText[7])) {
        alert('Postal Code is invalid')
        allValid = false;
    }
    if (!validateEmail(data.email, inputText[8])) {
        alert('Invalid Email')
        allValid = false;
    }
    if (!validatePassword(data.password, inputText[9])) {
        alert('Invalid Password')
        allValid = false;
    }
    if (!validatePasswordConfirmation(data.password, data.passwordConfirmation, inputText[10])) {
        alert('Password do not match')
        allValid = false;
    }
    if (allValid) {
        alert('¡Successfully registered!\nName: '+ data.firstName + '\nLast Name: ' + data.lastName + '\nDNI: ' + data.dni + '\nDate of Birth: ' + data.birthDate + '\nTelephone Number: ' + data.telephone + '\nCity: ' + data.city + '\nAddress: ' + data.address + '\nPostal Code: ' + data.postalCode + '\nEmail: ' + data.email + '\nPassword: ' + data.password + '\nPassword Confirm: ' + data.passwordConfirmation)
    }
}

function validateFirstNameLastName(x, textInputs) {
    var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var isValid = true;
    var name = x.toLowerCase();
    for (i = 0; i < name.length; i++) {
        if (!lowLetters.includes(name[i]) && !upLetters.includes(name[i])) {
            isValid = false;
        }
    }
    if (name.length >= 3 && isValid) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validateDNI(dni, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < dni.length; i++){
        if (!numbers.includes(dni[i])) {
            isValid = false;
        }
    }
    if (dni.length >= 7 && isValid) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function getTodayDate(){
    var inputDate = document.getElementById('user-date-birth');
    var currentDate = new Date();
    var day = currentDate.getDate().toString();
    var month = currentDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var year = currentDate.getFullYear().toString();
    var maxAge = year + '-' + (month) + '-' + day;
    inputDate.setAttribute('max', maxAge);
}

function validateBirthOfDate(date, textInputs){
    var inputDate = new Date(date);
    var thisMoment = new Date(Date.now());
    var isMajor = new Date(thisMoment - inputDate).getFullYear() - 1970 >= 18;
    if (isMajor) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validateTelephone(telephone, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < telephone.length; i++) {
        if (!numbers.includes(telephone[i])) {
            isValid = false;
        }
    }
    if (telephone.length >= 8 && isValid) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validateCity(city, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c',"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var minValue = city.toLowerCase();
    var num = 0;
    var specialChar = 0;
    var symbols = false;
    for (i = 0; i < city.length; i++) {
        if (numbers.includes(city[i])) {
            num++;
        } else if (letters.includes(minValue[i])) {
            specialChar++;
        } else {
            symbols = true;
        }
    }
    if (city.length >= 3 && !symbols) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validateAddress(address, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c',"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var space = ' ';
    var isValid = true;
    var specialChar = [];
    for (i = 0; i < address.length; i++) {
        if (letters.includes(address[i])) {
            specialChar.push('1');
            if (i !== 0 && specialChar [(i-1)] === 'n') {
                isValid = false;
            }
        } else if (space === address[i]) {
            specialChar.push('s');
        } else if (numbers.includes(address[i])) {
            specialChar.push('n');
            if (i !== 0 && specialChar[(i-1)] === '1') {
                isValid = false;
            }
        }
    }
    if (address.length >= 5 && isValid) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validatePostalCode(postalCode, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    for (i = 0; i < postalCode.length; i++) {
        if (numbers.includes(postalCode[i])) {
            num++;
        }
    }
    if (postalCode.length <= 5 && num >= 4) {
            hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validateEmail(email, textInputs) {
    var emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        showError(textInputs)
        return false;
    } else {
        hideError(textInputs)
        return true;
    }
}

function validatePassword(password, textInputs) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialChar = 0;
    var symbols = false;
    var minValue = password.toLowerCase();
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if (letters.includes(minValue[i])) {
            specialChar++
        } else {
            symbols = true;
        }
    }
    if (password.length >= 8 && num >= 1 && specialChar >=1 && !symbols) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function validatePasswordConfirmation(password, passwordConfirmation, textInputs) {
    if (password === passwordConfirmation) {
        hideError(textInputs);
        return true;
    } else {
        showError(textInputs);
        return false;
    }
}

function showError(inputContent) {
    var contentChildrens = inputContent.children;
    contentChildrens[1].classList.add('invalid-error')
    contentChildrens[2].classList.remove('error-display');
}

function hideError(inputContent) {
    var contentChildrens = inputContent.children;
    contentChildrens[1].classList.remove('invalid-error')
    contentChildrens[2].classList.add('error-display');
}