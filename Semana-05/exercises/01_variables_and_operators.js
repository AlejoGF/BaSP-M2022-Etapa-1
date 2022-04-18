console.log('--EXERCISE 1: VIARABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
console.log('-Exercise 1.a:');

var numberOne = 21;
var numberTwo = 7;
var finalNumber = numberOne + numberTwo;

console.log('Total =', finalNumber);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('\n-Exercise 1.b:');

var cityBorn = 'Rosario';
var countryBorn = 'Argentina';
var placeBorn = cityBorn + ", " + countryBorn;

console.log('Where are you from?: ', placeBorn);

/// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
console.log('\n-Exercise 1.c:');

var firstName = 'Alejo';
var lastName = 'Gonzalez';
var lengthName = firstName.length+ lastName.length;

console.log('The total length of ' + firstName + ' and ' + lastName + ' is ' + lengthName);